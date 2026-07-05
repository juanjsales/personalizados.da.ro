import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from '@/components/ui/button';
import { MessageCircle, Instagram, Info } from 'lucide-react';

export const Contact = ({ openWhatsApp }) => {
  const openInstagram = () => {
    window.open('https://instagram.com/personalizados.da.ro/', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
             <span className="bg-gradient-to-br from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Fale Conosco
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Pronto para criar a decoração de papel perfeita? Entre em contato e peça o seu!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-green-100 rounded-full p-3 w-fit mb-2">
                   <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-foreground">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Envie seu tema e a data da sua festa para um orçamento.</p>
                <Button onClick={openWhatsApp} className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                  <MessageCircle className="w-4 h-4 mr-2 text-green-500" />
                  (21) 99714-8263
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                 <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-2">
                  <Instagram className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-foreground">Instagram</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Veja mais modelos e inspirações em nosso perfil.</p>
                <Button onClick={openInstagram} variant="secondary" className="w-full">
                  <Instagram className="w-4 h-4 mr-2" />
                  @personalizados.da.ro
                </Button>
              </CardContent>
            </Card>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Informações Importantes</AlertTitle>
            <AlertDescription>
              <div className="grid md:grid-cols-2 gap-x-4 gap-y-1 mt-2">
                <p><strong>Segunda a Sexta:</strong> 9h às 18h</p>
                <p><strong>Sábado:</strong> 9h às 15h</p>
                <p><strong>Domingo:</strong> Fechado</p>
                <p><strong>Encomendas:</strong> 5 dias úteis de antecedência</p>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
};