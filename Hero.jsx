import React from 'react';
import { Button } from './src/components/ui/button';
import { MessageCircle, Sparkles } from 'lucide-react';

export const Hero = ({ openWhatsApp, scrollToSection }) => {
  return (
    <section id="home" className="hero-gradient pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center py-16">
          <img src="/logo_personalizados_da_ro.png" alt="Personalizados da Rô - Topos de Bolo" className="h-32 w-auto mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            O Detalhe que Transforma sua Festa
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Criamos <strong>topos de bolo e scrap festa</strong> que contam histórias e encantam em cada detalhe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={openWhatsApp} size="lg" className="whatsapp-button text-white">
              <MessageCircle className="w-5 h-5 mr-2" />
              Orçar meu Topo
            </Button>
            <Button onClick={() => scrollToSection('produtos')} variant="outline" size="lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Ver Galeria
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};