import ResourceCard from '../ResourceCard';
import { mockResources } from '@shared/mockData';

export default function ResourceCardExample() {
  return (
    <div className="p-8 max-w-md">
      <ResourceCard 
        resource={mockResources[0]} 
        onDownload={(id) => console.log('Resource downloaded:', id)} 
      />
    </div>
  );
}