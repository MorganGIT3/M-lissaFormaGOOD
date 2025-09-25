import { motion } from 'framer-motion';
import ResourceCard from '@/components/ResourceCard';
import { mockResources } from '@shared/mockData';
import { FileText, Download } from 'lucide-react';

export default function Resources() {
  const handleDownload = (resourceId: string) => {
    const resource = mockResources.find(r => r.id === resourceId);
    if (resource) {
      console.log('Downloading resource:', resource.title);
      // TODO: Implement actual download functionality
      alert(`Téléchargement de "${resource.title}" en cours... (Mock)`);
    }
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
          <FileText className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-serif font-bold text-primary">
            Ressources de Formation
          </h1>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          Accédez à tous vos documents, guides et ressources complémentaires 
          pour approfondir votre apprentissage.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {mockResources.map((resource, index) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            onDownload={handleDownload}
            delay={0.1 * index}
          />
        ))}
      </motion.div>

      {/* Additional Resources Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center py-12 border-t"
      >
        <div className="text-muted-foreground">
          <Download className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p className="text-lg mb-2">Plus de ressources bientôt disponibles !</p>
          <p className="text-sm max-w-md mx-auto">
            Nous enrichissons régulièrement notre bibliothèque de ressources 
            pour vous offrir le meilleur contenu pédagogique.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}