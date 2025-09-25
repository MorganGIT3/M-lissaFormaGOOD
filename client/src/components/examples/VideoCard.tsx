import VideoCard from '../VideoCard';
import { mockModules } from '@shared/mockData';

export default function VideoCardExample() {
  return (
    <div className="p-8 max-w-md">
      <VideoCard 
        video={mockModules[0].videos[0]} 
        onWatchVideo={(id) => console.log('Video watched:', id)} 
      />
    </div>
  );
}