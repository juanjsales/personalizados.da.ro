import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = ({ openWhatsApp, scrollToSection }) => {
  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-background pt-24 pb-20 md:pt-32 md:pb-28"
    >
      {/* Fundo com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10" />
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            <span className="bg-gradient-to-br from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              O Detalhe que Transforma
            </span>
            <br />
            <span className="text-foreground">Sua Festa</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Criamos <strong>topos de bolo personalizados</strong> que contam histórias e encantam em cada detalhe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={openWhatsApp} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Orçar meu Topo
            </Button>
            <Button onClick={() => scrollToSection('produtos')} variant="secondary" size="lg" className="shadow-lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Ver Galeria
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};