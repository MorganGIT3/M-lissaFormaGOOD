import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Play, Pause, Volume2, Maximize } from 'lucide-react';
import { Video } from '@shared/types';
import { useState } from 'react';

interface VideoPlayerModalProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
  onComplete?: (videoId: string) => void;
}

export default function VideoPlayerModal({ video, isOpen, onClose, onComplete }: VideoPlayerModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  if (!video) return null;

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    console.log(`Video ${isPlaying ? 'paused' : 'played'}: ${video.title}`);
  };

  const handleComplete = () => {
    onComplete?.(video.id);
    console.log(`Video completed: ${video.title}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <DialogTitle className="text-xl font-serif text-primary">
                {video.title}
              </DialogTitle>
              <DialogDescription className="mt-2 text-muted-foreground">
                {video.description}
              </DialogDescription>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">{video.duration} min</Badge>
              {video.completed && (
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Terminé
                </Badge>
              )}
            </div>
          </div>
        </DialogHeader>
        
        <div className="px-6 pb-6">
          {/* Mock Video Player */}
          <div className="relative w-full h-64 bg-black rounded-lg overflow-hidden mb-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {isPlaying ? (
                    <Pause className="w-8 h-8" />
                  ) : (
                    <Play className="w-8 h-8" />
                  )}
                </div>
                <p className="text-lg font-medium">{video.title}</p>
                <p className="text-sm opacity-75">Lecteur vidéo - Mode Démo</p>
              </div>
            </div>
            
            {/* Mock Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center gap-4">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handlePlayPause}
                  className="text-white hover:bg-white/20"
                  data-testid="button-play-pause"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                
                <div className="flex-1 bg-white/20 h-1 rounded-full">
                  <div className="bg-primary h-full w-1/3 rounded-full"></div>
                </div>
                
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                  data-testid="button-volume"
                >
                  <Volume2 className="w-4 h-4" />
                </Button>
                
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                  data-testid="button-fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 justify-end">
            {!video.completed && (
              <Button 
                onClick={handleComplete}
                className="gap-2"
                data-testid="button-mark-complete"
              >
                Marquer comme terminé
              </Button>
            )}
            <Button 
              variant="outline" 
              onClick={onClose}
              data-testid="button-close-modal"
            >
              Fermer
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}