import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react';
import { testimonials } from '@/data.js';

export const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
             <span className="bg-gradient-to-br from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              A Satisfação de Nossos Clientes
            </span>
          </h2>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                <div className="p-1 h-full">
                  <Card className="flex flex-col justify-between p-6 h-full bg-card shadow-sm transition-shadow hover:shadow-md">
                    <CardContent className="p-0">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                      <p className="font-semibold text-foreground">- {testimonial.name}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};