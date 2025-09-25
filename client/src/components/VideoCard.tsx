import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, CheckCircle } from 'lucide-react';
import { Video } from '@shared/types';

interface VideoCardProps {
  video: Video;
  onWatchVideo?: (videoId: string) => void;
  delay?: number;
}

export default function VideoCard({ video, onWatchVideo, delay = 0 }: VideoCardProps) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="hover-elevate transition-all duration-200">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="text-lg font-medium text-foreground leading-snug">
              {video.title}
            </CardTitle>
            {video.completed && (
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 flex-shrink-0">
                <CheckCircle className="w-3 h-3 mr-1" />
                Vu
              </Badge>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {video.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{video.duration} min</span>
            </div>
            
            <Button 
              onClick={() => onWatchVideo?.(video.id)}
              size="sm"
              variant={video.completed ? "outline" : "default"}
              className="gap-2"
              data-testid={`button-video-${video.id}`}
            >
              <Play className="w-4 h-4" />
              {video.completed ? 'Revoir' : 'Regarder'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}