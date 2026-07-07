import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Sparkles } from 'lucide-react';
import { topperGallery } from '@/data.js';

const categories = [
  { id: 'all', label: 'Todos' },
  { id: '3d', label: 'Topos 3D' },
  { id: 'aniversario', label: 'Aniversários' },
  { id: 'infantil', label: 'Temáticos/Infantil' },
  { id: 'casamento-cha', label: 'Casamentos & Chás' },
  { id: 'kits-festa', label: 'Kits & Decorações' },
  { id: 'simples', label: 'Simples' },
  { id: 'personalizado', label: 'Personalizado' }
];

export const Products = ({ openWhatsApp }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProducts = selectedCategory === 'all'
    ? topperGallery
    : topperGallery.filter(item => item.category === selectedCategory);

  const itemsLimit = 4;
  const hasMore = filteredProducts.length > itemsLimit;
  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, itemsLimit);

  // Reinicia a visualização limitada quando o usuário altera a categoria
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowAll(false);
  };

  return (
    <section id="produtos" className="py-16 bg-background relative">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nossa Coleção</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Nossos Topos e Decorações
            </span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Feitos com papéis especiais de alta gramatura, camadas 3D, laminação premium e muito carinho.
          </p>
        </div>

        {/* Categoria Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4.5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted border border-border/30 hover:text-foreground'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grade de Produtos */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((topper) => (
              <motion.div 
                key={topper.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 border border-border/30 group bg-card">
                  {/* Aspect Ratio mudado de aspect-square (1:1) para aspect-[4/3] (Reduz visualmente a altura do card) */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={topper.image} 
                      alt={topper.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
                    />
                    {/* Badge da Categoria sobre a imagem */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-xs text-[10px] font-bold text-primary shadow-xs uppercase tracking-wide border border-primary/10">
                        {categories.find(c => c.id === topper.category)?.label || 'Destaque'}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-5 flex flex-col flex-grow bg-card">
                    <h3 className="text-lg font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                      {topper.title}
                    </h3>
                    <p className="text-muted-foreground text-xs mb-4 flex-grow leading-relaxed">
                      {topper.description}
                    </p>
                    <Button 
                      onClick={openWhatsApp} 
                      className="w-full mt-auto bg-primary hover:bg-primary/95 text-white rounded-xl py-4 shadow-xs text-xs font-semibold hover:scale-102 active:scale-98 transition-all duration-200"
                    >
                      <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                      Pedir meu Topo
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Botão Ver Mais / Ver Menos */}
        {hasMore && (
          <div className="text-center mt-10">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="border-primary/20 hover:border-primary/50 text-foreground hover:bg-primary/5 rounded-full px-8 py-5 text-sm font-semibold hover:scale-105 transition-all duration-300"
            >
              {showAll ? 'Ver Menos Modelos' : 'Ver Mais Modelos'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};