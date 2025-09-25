import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroBackground from '@assets/generated_images/Hero_background_pattern_3950280f.png';

interface HeroProps {
  onGetStarted?: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Bienvenue dans votre
            <span className="block text-primary"> espace de formation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Découvrez une expérience d'apprentissage premium conçue pour transformer 
            votre potentiel en réussite concrète.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="gap-3 text-lg px-8 py-4 shadow-xl"
              data-testid="button-get-started"
            >
              Commencer ma formation
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="gap-3 text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              data-testid="button-preview"
            >
              <Play className="w-5 h-5" />
              Aperçu de la formation
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <div className="text-center text-white">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-sm opacity-90">Modules Experts</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold text-primary mb-2">9</div>
            <div className="text-sm opacity-90">Vidéos Premium</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold text-primary mb-2">100h+</div>
            <div className="text-sm opacity-90">De Contenu</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}