import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './src/components/ui/card';
import { Button } from './src/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { topperGallery } from './src/data.js';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Products = ({ openWhatsApp }) => {
  return (
    <section id="produtos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossos Topos e Decorações</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada peça é feita com papelaria especial, garantindo um visual sofisticado e memorável.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topperGallery.map((topper, index) => (
            <motion.div key={topper.id} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.1 }}>
              <Card className="cake-card overflow-hidden h-full flex flex-col">
                <div className="aspect-square overflow-hidden">
                  <img src={topper.image} alt={topper.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{topper.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{topper.description}</p>
                  <Button onClick={openWhatsApp} className="w-full mt-auto" variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Pedir meu Topo
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};