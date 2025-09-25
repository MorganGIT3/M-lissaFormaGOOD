import { motion } from 'framer-motion';
import { useParams } from 'wouter';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import VideoCard from '@/components/VideoCard';
import VideoPlayerModal from '@/components/VideoPlayerModal';
import { mockModules } from '@shared/mockData';
import { Video } from '@shared/types';
import { ArrowLeft, Clock, PlayCircle, Target, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

export default function ModuleDetail() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const module = mockModules.find(m => m.id === id);

  if (!module) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-destructive mb-4">Module non trouvé</h1>
        <Button onClick={() => setLocation('/modules')}>
          Retour aux modules
        </Button>
      </div>
    );
  }

  const handleWatchVideo = (videoId: string) => {
    const video = module.videos.find(v => v.id === videoId);
    if (video) {
      setSelectedVideo(video);
      setIsModalOpen(true);
    }
  };

  const handleVideoComplete = (videoId: string) => {
    console.log('Video completed:', videoId);
    // TODO: Update video completion status
    setIsModalOpen(false);
  };

  const completedVideos = module.videos.filter(v => v.completed).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-8 space-y-8"
    >
      {/* Header */}
      <div className="space-y-4">
        <Button
          variant="ghost"
          onClick={() => setLocation('/modules')}
          className="gap-2 text-muted-foreground hover:text-foreground"
          data-testid="button-back"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux modules
        </Button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">
            {module.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {module.description}
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - Videos */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <PlayCircle className="w-6 h-6 text-primary" />
              Vidéos du module ({completedVideos}/{module.videos.length})
            </h2>
            
            <div className="space-y-4">
              {module.videos.map((video, index) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onWatchVideo={handleWatchVideo}
                  delay={0.1 * index}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sidebar - Module Info */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-6"
        >
          {/* Progress Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Progression
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Complété</span>
                  <span className="font-semibold text-primary">{module.progress}%</span>
                </div>
                <Progress value={module.progress} className="h-3" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <div className="text-muted-foreground">Vidéos</div>
                  <div className="font-semibold">{completedVideos}/{module.videos.length}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-muted-foreground">Durée</div>
                  <div className="font-semibold">{module.totalDuration} min</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Module Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Résumé du module
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Objectifs d'apprentissage :</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Maîtriser les concepts fondamentaux
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Appliquer les techniques en situation réelle
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Développer votre expertise personnelle
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Prérequis :</h4>
                <p className="text-sm text-muted-foreground">
                  {module.id === '1' ? 'Aucun prérequis nécessaire' : 
                   module.id === '2' ? 'Avoir terminé le module "Les Bases"' :
                   'Avoir terminé les modules précédents'}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Module Status */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-center">
                {module.progress === 100 ? (
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    ✨ Module terminé
                  </Badge>
                ) : module.progress > 0 ? (
                  <Badge variant="outline">
                    📚 En cours
                  </Badge>
                ) : (
                  <Badge variant="outline">
                    🚀 À commencer
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Video Player Modal */}
      <VideoPlayerModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onComplete={handleVideoComplete}
      />
    </motion.div>
  );
}