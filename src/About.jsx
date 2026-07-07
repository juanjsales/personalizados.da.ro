import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Star, Trophy, Brush } from 'lucide-react';

export const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              <Heart className="w-3.5 h-3.5 fill-primary/15" />
              <span>Quem Somos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                Nossa Paixão por Papelaria
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              A Personalizados da Rô nasceu da vontade de transformar papel em memórias eternas. Cada topo de bolo conta uma história e é a peça que coroa a sua celebração.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Box Decorativo Artístico */}
            <div className="relative p-10 rounded-3xl bg-gradient-to-tr from-primary/10 via-pink-100/5 to-secondary/15 border border-primary/20 aspect-square flex flex-col justify-center items-center overflow-hidden group shadow-xl">
              {/* Formas abstratas de fundo */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-secondary/25 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

              <div className="relative text-center space-y-4">
                <div className="mx-auto w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md border border-primary/10 group-hover:rotate-12 transition-all duration-500">
                  <Brush className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-foreground tracking-tight">Arte & Dedicação</h3>
                <p className="text-sm text-muted-foreground max-w-[280px] mx-auto leading-relaxed">
                  Trabalhamos com recortes precisos e camadas milimétricas para que cada topo de bolo seja uma verdadeira escultura de papel.
                </p>
                <div className="inline-block mt-4 -rotate-3 bg-white px-5 py-2.5 rounded-2xl shadow-md border border-secondary/20">
                  <span className="text-primary font-bold text-sm">Feito com muito amor ❤️</span>
                </div>
              </div>
            </div>

            {/* Conteúdo à Direita */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Com materiais de alta qualidade e um olhar atento a cada contorno, criamos topos personalizados que se destacam na mesa principal e rendem fotos inesquecíveis.
              </p>
              
              <div className="flex flex-wrap gap-2.5">
                <Badge variant="outline" className="text-xs py-1.5 px-4 bg-pink-500/5 text-pink-700 border-pink-500/20 rounded-full font-semibold">
                  <Heart className="w-3.5 h-3.5 mr-1 text-pink-500 fill-pink-500/10" />
                  Feito sob Encomenda
                </Badge>
                <Badge variant="outline" className="text-xs py-1.5 px-4 bg-amber-500/5 text-amber-700 border-amber-500/20 rounded-full font-semibold">
                  <Star className="w-3.5 h-3.5 mr-1 text-amber-500 fill-amber-500/10" />
                  Papelaria Premium
                </Badge>
                <Badge variant="outline" className="text-xs py-1.5 px-4 bg-blue-500/5 text-blue-700 border-blue-500/20 rounded-full font-semibold">
                  <Trophy className="w-3.5 h-3.5 mr-1 text-blue-500 fill-blue-500/10" />
                  Design Exclusivo
                </Badge>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-4">
                <Card className="bg-muted/30 border-border/40 hover:bg-muted/40 transition-colors rounded-2xl p-0">
                  <CardHeader className="py-4 px-6">
                    <CardTitle className="text-foreground flex items-center text-lg font-bold gap-2">
                      <Trophy className="w-4 h-4 text-primary" />
                      Nossa Missão
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-5 px-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Criar topos e decorações de papel que traduzam a essência, o tema e a alegria de cada celebração com perfeição.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-muted/30 border-border/40 hover:bg-muted/40 transition-colors rounded-2xl p-0">
                  <CardHeader className="py-4 px-6">
                    <CardTitle className="text-foreground flex items-center text-lg font-bold gap-2">
                      <Heart className="w-4 h-4 text-primary" />
                      Nossos Valores
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-5 px-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Criatividade em cada layout, compromisso com os prazos acordados, qualidade no acabamento e carinho em cada etapa.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};