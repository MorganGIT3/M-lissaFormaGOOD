import ProgressCard from '../ProgressCard';
import { mockProgressStats, mockUser } from '@shared/mockData';

export default function ProgressCardExample() {
  return (
    <div className="p-8 max-w-md">
      <ProgressCard 
        stats={mockProgressStats}
        totalProgress={mockUser.totalProgress}
        userName={mockUser.name}
      />
    </div>
  );
}