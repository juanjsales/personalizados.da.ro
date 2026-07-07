import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = ({ openWhatsApp, scrollToSection }) => {
  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-background pt-36 pb-20 md:pt-64 md:pb-32"
    >
      {/* Orbes e Blobs Decorativos de Fundo */}
      <div className="absolute top-1/4 -left-24 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-secondary/15 blur-3xl animate-float-slower pointer-events-none" />
      
      {/* Fundo com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge de destaque */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold uppercase tracking-wider mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 fill-primary/10 text-primary" />
            <span>Papelaria Criativa & Exclusiva</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-primary via-pink-500 to-secondary bg-clip-text text-transparent">
              O Detalhe que Transforma
            </span>
            <br />
            <span className="text-foreground">sua Celebração</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Dê vida e magia ao seu bolo com <strong className="text-foreground font-semibold">topos em camadas 3D</strong> exclusivos, criados sob encomenda com recortes e acabamentos perfeitos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={openWhatsApp} 
              size="lg" 
              className="bg-primary hover:bg-primary/95 text-white shadow-lg shadow-primary/25 rounded-full px-8 py-6 text-base font-semibold hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Pedir meu Orçamento
            </Button>
            <Button 
              onClick={() => scrollToSection('produtos')} 
              variant="outline" 
              size="lg" 
              className="border-primary/20 hover:border-primary/50 text-foreground hover:bg-primary/5 rounded-full px-8 py-6 text-base font-semibold hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Conhecer Modelos
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};