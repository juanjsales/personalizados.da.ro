import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { testimonials } from '@/data.js';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 fill-primary/15" />
            <span>Depoimentos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              O que dizem nossos Clientes
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            A alegria de fazer parte de momentos inesquecíveis e adoçar ainda mais as comemorações.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 py-4">
                  <div className="h-full">
                    <Card className="relative flex flex-col justify-between p-8 h-full bg-card shadow-md hover:shadow-lg transition-all duration-300 border border-border/30 rounded-2xl group overflow-hidden">
                      {/* Marca d'água das aspas no card */}
                      <Quote className="w-16 h-16 text-primary/5 absolute -right-2 -top-2 rotate-180 pointer-events-none group-hover:scale-110 transition-transform duration-300" />
                      
                      <CardContent className="p-0 flex flex-col justify-between h-full">
                        <div>
                          {/* Estrelas */}
                          <div className="flex gap-0.5 mb-5">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <p className="text-muted-foreground mb-6 italic text-sm leading-relaxed">
                            "{testimonial.text}"
                          </p>
                        </div>

                        {/* Informações do Cliente */}
                        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/20">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary text-white font-bold flex items-center justify-center text-sm shadow-inner shrink-0">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-foreground text-sm leading-none">{testimonial.name}</p>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Cliente</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-primary hover:text-white border border-border/40 w-10 h-10 rounded-full shadow-md" />
            <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-primary hover:text-white border border-border/40 w-10 h-10 rounded-full shadow-md" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};