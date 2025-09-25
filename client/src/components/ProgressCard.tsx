import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Award, Clock, Calendar } from 'lucide-react';
import { ProgressStats } from '@shared/types';

interface ProgressCardProps {
  stats: ProgressStats;
  totalProgress: number;
  userName: string;
}

export default function ProgressCard({ stats, totalProgress, userName }: ProgressCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-primary">
            <TrendingUp className="w-6 h-6" />
            Progression de {userName}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-medium">Progression globale</span>
              <span className="text-2xl font-bold text-primary">{totalProgress}%</span>
            </div>
            <Progress value={totalProgress} className="h-3" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="w-4 h-4" />
                <span>Vidéos complétées</span>
              </div>
              <div className="text-xl font-semibold text-primary">
                {stats.completedVideos}/{stats.totalVideos}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Temps d'étude</span>
              </div>
              <div className="text-xl font-semibold text-primary">
                {stats.studyTime}h
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Série actuelle</span>
              </div>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {stats.streakDays} jours
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}