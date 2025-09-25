import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { useLocation } from 'wouter';

export default function Landing() {
  const [, setLocation] = useLocation();

  const handleLogin = () => {
    console.log('Login triggered');
    setLocation('/dashboard');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-background"
    >
      <Header onLogin={handleLogin} />
      <Hero onGetStarted={handleLogin} />
    </motion.div>
  );
}