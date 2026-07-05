import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Star, Trophy, Brush } from 'lucide-react';

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
           <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
               <span className="bg-gradient-to-br from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                Nossa Paixão por Papelaria
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A Personalizados da Rô nasceu do amor por transformar papel em arte. Cada peça é uma oportunidade de levar mais charme e personalidade para sua celebração.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative flex items-center justify-center">
              <Brush className="w-64 h-64 text-primary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <p className="text-3xl font-bold text-center text-foreground/80 leading-tight -rotate-12">
                  Feito com <br/> <span className="text-primary text-5xl">amor</span><br/> e carinho
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com materiais de alta qualidade e um olhar atento aos detalhes, criamos decorações que se destacam e marcam momentos felizes.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  <Heart className="w-3.5 h-3.5 mr-1.5" />
                  Feito sob Encomenda
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  <Star className="w-3.5 h-3.5 mr-1.5" />
                  Papelaria Premium
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  <Trophy className="w-3.5 h-3.5 mr-1.5" />
                  Design Exclusivo
                </Badge>
              </div>
               <Card className="bg-muted/30 border-border/60">
                <CardHeader>
                  <CardTitle className="text-foreground">Nossa Missão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Criar topos e decorações de papel que traduzam a essência de cada celebração.</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/30 border-border/60">
                <CardHeader>
                  <CardTitle className="text-foreground">Nossos Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Criatividade, pontualidade, qualidade e carinho em cada recorte.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};