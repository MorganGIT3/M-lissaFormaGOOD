import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, PlayCircle, CheckCircle } from 'lucide-react';
import { Module } from '@shared/types';

interface ModuleCardProps {
  module: Module;
  onStartModule?: (moduleId: string) => void;
  delay?: number;
}

export default function ModuleCard({ module, onStartModule, delay = 0 }: ModuleCardProps) {
  const completedVideos = module.videos.filter(v => v.completed).length;
  const isCompleted = module.progress === 100;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="h-full hover-elevate cursor-pointer border-2 hover:border-primary/20 transition-colors">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-xl font-serif text-primary mb-2">
                {module.title}
              </CardTitle>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {module.description}
              </p>
            </div>
            {isCompleted && (
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <CheckCircle className="w-3 h-3 mr-1" />
                Terminé
              </Badge>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progression</span>
              <span className="font-medium text-primary">{module.progress}%</span>
            </div>
            <Progress value={module.progress} className="h-2" />
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <PlayCircle className="w-4 h-4" />
              <span>{completedVideos}/{module.videos.length} vidéos</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{module.totalDuration} min</span>
            </div>
          </div>
          
          <Button 
            onClick={() => onStartModule?.(module.id)}
            className="w-full gap-2"
            variant={isCompleted ? "outline" : "default"}
            data-testid={`button-module-${module.id}`}
          >
            <PlayCircle className="w-4 h-4" />
            {isCompleted ? 'Revoir le module' : module.progress > 0 ? 'Continuer' : 'Commencer'}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}