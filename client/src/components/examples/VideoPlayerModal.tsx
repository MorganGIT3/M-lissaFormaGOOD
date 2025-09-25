import VideoPlayerModal from '../VideoPlayerModal';
import { mockModules } from '@shared/mockData';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function VideoPlayerModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)}>
        Ouvrir le lecteur vidéo
      </Button>
      
      <VideoPlayerModal
        video={mockModules[0].videos[0]}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onComplete={(id) => console.log('Video completed:', id)}
      />
    </div>
  );
}