import { motion } from 'framer-motion';
import ModuleCard from '@/components/ModuleCard';
import { mockModules } from '@shared/mockData';
import { useLocation } from 'wouter';
import { BookOpen } from 'lucide-react';

export default function Modules() {
  const [, setLocation] = useLocation();

  const handleStartModule = (moduleId: string) => {
    console.log('Starting module:', moduleId);
    setLocation(`/modules/${moduleId}`);
  };

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
          <BookOpen className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-serif font-bold text-primary">
            Mes Modules de Formation
          </h1>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          Découvrez nos modules de formation soigneusement conçus pour vous accompagner 
          dans votre développement personnel et professionnel.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {mockModules.map((module, index) => (
          <ModuleCard
            key={module.id}
            module={module}
            onStartModule={handleStartModule}
            delay={0.1 * index}
          />
        ))}
      </motion.div>

      {/* Empty state for future modules */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center py-12"
      >
        <div className="text-muted-foreground">
          <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p className="text-lg mb-2">D'autres modules arrivent bientôt !</p>
          <p className="text-sm">
            Nous travaillons sur de nouveaux contenus pour enrichir votre parcours.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}