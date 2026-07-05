import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Instagram } from 'lucide-react';

export const Contact = ({ openWhatsApp }) => {
  return (
    <section id="contato" className="py-16 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Fale Conosco e Orce seu Topo</h2>
          <p className="text-lg text-gray-600 mb-12">
            Pronto para criar a decoração de papel perfeita? Entre em contato e peça o seu!
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="p-0 text-center">
                <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Envie seu tema e a data da sua festa</p>
                <Button onClick={openWhatsApp} className="whatsapp-button text-white w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  (21) 99714-8263
                </Button>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0 text-center">
                <Instagram className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Instagram</h3>
                <p className="text-gray-600 mb-4">Veja mais modelos e inspirações</p>
                <Button onClick={() => window.open('https://instagram.com/personalizados.da.ro/', '_blank')} variant="outline" className="w-full">
                  <Instagram className="w-4 h-4 mr-2" />
                  @personalizados.da.ro
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 p-8 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Informações Importantes</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-600">
              <div>
                <p><strong>Segunda a Sexta:</strong> 9h às 18h</p>
                <p><strong>Sábado:</strong> 9h às 15h</p>
              </div>
              <div>
                <p><strong>Domingo:</strong> Fechado</p>
                <p><strong>Encomendas:</strong> Com 5 dias úteis de antecedência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};