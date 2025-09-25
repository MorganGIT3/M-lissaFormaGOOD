import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProgressCard from '@/components/ProgressCard';
import { ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import { mockUser, mockProgressStats, mockModules } from '@shared/mockData';
import { useLocation } from 'wouter';

export default function Dashboard() {
  const [, setLocation] = useLocation();

  const handleContinueTraining = () => {
    console.log('Continue training triggered');
    setLocation('/modules');
  };

  const currentModule = mockModules.find(m => m.progress > 0 && m.progress < 100) || mockModules[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-8 space-y-8"
    >
      {/* Welcome Message */}
      <div className="space-y-2">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-serif font-bold text-primary"
        >
          Bonjour {mockUser.name.split(' ')[0]} ! 👋
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-muted-foreground"
        >
          Prêt à continuer votre parcours d'excellence ?
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Progress Card */}
        <div className="lg:col-span-2">
          <ProgressCard 
            stats={mockProgressStats}
            totalProgress={mockUser.totalProgress}
            userName={mockUser.name}
          />
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="w-5 h-5 text-primary" />
                Vos statistiques
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Modules terminés</span>
                <span className="font-semibold text-primary">
                  {mockUser.completedModules}/{mockUser.totalModules}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Vidéos vues</span>
                <span className="font-semibold text-primary">
                  {mockProgressStats.completedVideos}/{mockProgressStats.totalVideos}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Temps total</span>
                <span className="font-semibold text-primary">
                  {mockProgressStats.studyTime}h
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Continue Training CTA */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                  Continuez votre formation
                </h3>
                <p className="text-muted-foreground mb-4">
                  Reprenez où vous vous êtes arrêté avec le module "{currentModule.title}"
                </p>
                <div className="text-sm text-muted-foreground">
                  Progression actuelle : {currentModule.progress}%
                </div>
              </div>
              <Button 
                size="lg" 
                onClick={handleContinueTraining}
                className="gap-2"
                data-testid="button-continue-training"
              >
                <BookOpen className="w-5 h-5" />
                Continuer ma formation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}