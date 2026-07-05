import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { topperGallery } from '@/data.js';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Products = ({ openWhatsApp }) => {
  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="bg-gradient-to-br from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Nossos Topos e Decorações
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada peça é feita com papelaria especial, garantindo um visual sofisticado e memorável.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topperGallery.map((topper, index) => (
            <motion.div 
              key={topper.id} 
              variants={cardVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }} 
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 border-border/80">
                <div className="aspect-square overflow-hidden">
                  <img src={topper.image} alt={topper.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow bg-card">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{topper.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{topper.description}</p>
                  <Button onClick={openWhatsApp} className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground">
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