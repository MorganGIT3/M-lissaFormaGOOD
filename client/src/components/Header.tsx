import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';

interface HeaderProps {
  onLogin?: () => void;
}

export default function Header({ onLogin }: HeaderProps) {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full py-6 px-8 bg-background/80 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-2xl font-serif font-bold text-primary-foreground">F</span>
          </div>
          <div>
            <h1 className="text-2xl font-serif font-bold text-primary">Formation Premium</h1>
            <p className="text-sm text-muted-foreground">Votre espace d'excellence</p>
          </div>
        </div>
        
        <Button 
          onClick={onLogin} 
          className="gap-2"
          data-testid="button-login"
        >
          <LogIn className="w-4 h-4" />
          Se connecter
        </Button>
      </div>
    </motion.header>
  );
}