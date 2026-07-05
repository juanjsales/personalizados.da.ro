import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, Trophy } from 'lucide-react';

export const About = () => {
  return (
    <section id="sobre" className="py-16 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Nossa Paixão por Papelaria</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A Personalizados da Rô nasceu do amor por transformar papel em arte. Cada peça é uma oportunidade de levar mais charme e personalidade para sua celebração.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Com materiais de alta qualidade e um olhar atento aos detalhes, criamos decorações que se destacam e marcam momentos felizes.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="text-sm">
                  <Heart className="w-3 h-3 mr-1" />
                  Feito sob Encomenda
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  <Star className="w-3 h-3 mr-1" />
                  Papelaria Premium
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  <Trophy className="w-3 h-3 mr-1" />
                  Design Exclusivo
                </Badge>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">Nossa Missão</h3>
                <p className="text-gray-600">Criar topos e decorações de papel que traduzam a essência de cada celebração.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">Nossos Valores</h3>
                <p className="text-gray-600">Criatividade, pontualidade, qualidade e carinho em cada recorte.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};