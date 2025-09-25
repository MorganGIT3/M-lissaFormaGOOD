import ModuleCard from '../ModuleCard';
import { mockModules } from '@shared/mockData';

export default function ModuleCardExample() {
  return (
    <div className="p-8 max-w-md">
      <ModuleCard 
        module={mockModules[0]} 
        onStartModule={(id) => console.log('Module started:', id)} 
      />
    </div>
  );
}