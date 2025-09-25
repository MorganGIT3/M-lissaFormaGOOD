import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { mockUser, mockProgressStats, mockModules } from '@shared/mockData';
import { User, Award, Clock, Calendar, LogOut, Settings, Mail } from 'lucide-react';
import { useLocation } from 'wouter';
import coachImage from '@assets/generated_images/Professional_coach_portrait_eed1c557.png';

export default function Profile() {
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    console.log('Logout triggered');
    setLocation('/');
  };

  const completedModules = mockModules.filter(m => m.progress === 100);
  const inProgressModules = mockModules.filter(m => m.progress > 0 && m.progress < 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-8 space-y-8"
    >
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <User className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-serif font-bold text-primary">
            Mon Profil
          </h1>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <Card>
            <CardHeader className="text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src={coachImage} alt={mockUser.name} />
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  {mockUser.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-2xl font-serif text-primary">
                {mockUser.name}
              </CardTitle>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{mockUser.email}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progression globale</span>
                  <span className="font-semibold text-primary">{mockUser.totalProgress}%</span>
                </div>
                <Progress value={mockUser.totalProgress} className="h-2" />
              </div>
              
              <div className="flex justify-center">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Étudiant Premium
                </Badge>
              </div>
              
              <Button
                variant="outline"
                className="w-full gap-2"
                data-testid="button-settings"
              >
                <Settings className="w-4 h-4" />
                Paramètres
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Award className="w-5 h-5 text-primary" />
                  Modules terminés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">
                  {mockUser.completedModules}/{mockUser.totalModules}
                </div>
                <p className="text-sm text-muted-foreground">
                  {completedModules.length > 0 ? 
                    `Dernier module terminé : "${completedModules[completedModules.length - 1]?.title}"` :
                    'Aucun module terminé pour le moment'
                  }
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="w-5 h-5 text-primary" />
                  Temps d'étude
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">
                  {mockProgressStats.studyTime}h
                </div>
                <p className="text-sm text-muted-foreground">
                  Moyenne de {(mockProgressStats.studyTime / 7).toFixed(1)}h par jour cette semaine
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                  Série d'apprentissage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">
                  {mockProgressStats.streakDays} jours
                </div>
                <p className="text-sm text-muted-foreground">
                  Continuez comme ça ! Votre régularité paie.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <User className="w-5 h-5 text-primary" />
                  Vidéos visionnées
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">
                  {mockProgressStats.completedVideos}/{mockProgressStats.totalVideos}
                </div>
                <p className="text-sm text-muted-foreground">
                  {mockProgressStats.totalVideos - mockProgressStats.completedVideos} vidéos restantes
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Current Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Modules en cours</CardTitle>
            </CardHeader>
            <CardContent>
              {inProgressModules.length > 0 ? (
                <div className="space-y-4">
                  {inProgressModules.map((module) => (
                    <div key={module.id} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{module.title}</span>
                        <span className="text-sm text-primary">{module.progress}%</span>
                      </div>
                      <Progress value={module.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-4">
                  Aucun module en cours. Commencez un nouveau module !
                </p>
              )}
            </CardContent>
          </Card>

          {/* Logout Section */}
          <Card className="border-destructive/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-destructive mb-1">Déconnexion</h3>
                  <p className="text-sm text-muted-foreground">
                    Se déconnecter de votre compte de formation
                  </p>
                </div>
                <Button
                  variant="destructive"
                  onClick={handleLogout}
                  className="gap-2"
                  data-testid="button-logout-profile"
                >
                  <LogOut className="w-4 h-4" />
                  Se déconnecter
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}