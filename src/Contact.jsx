import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Instagram, Info, Clock, Calendar } from 'lucide-react';

export const Contact = ({ openWhatsApp }) => {
  const openInstagram = () => {
    window.open('https://instagram.com/personalizados.da.ro/', '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-muted/10 relative">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5 fill-primary/15" />
            <span>Contato</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Fale Conosco
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-16 font-light max-w-2xl mx-auto">
            Pronto para dar aquele toque especial na sua festa? Entre em contato agora e tire suas dúvidas!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* WhatsApp Card */}
            <Card className="text-center transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 hover:-translate-y-1.5 border border-border/40 hover:border-green-500/20 rounded-3xl bg-card">
              <CardHeader className="pt-8">
                <div className="mx-auto bg-emerald-50 dark:bg-emerald-950/20 rounded-full p-4 w-fit mb-3">
                  <MessageCircle className="w-8 h-8 text-emerald-500 fill-emerald-500/10" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="pb-8 px-6">
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Envie o tema da festa, nome e idade para receber um orçamento personalizado.
                </p>
                <Button 
                  onClick={openWhatsApp} 
                  className="bg-emerald-500 hover:bg-emerald-600 text-white w-full rounded-2xl py-6 font-semibold shadow-md shadow-emerald-500/15 hover:scale-102 transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  (21) 99714-8263
                </Button>
              </CardContent>
            </Card>

            {/* Instagram Card */}
            <Card className="text-center transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1.5 border border-border/40 hover:border-pink-500/20 rounded-3xl bg-card">
              <CardHeader className="pt-8">
                <div className="mx-auto bg-pink-50 dark:bg-pink-950/20 rounded-full p-4 w-fit mb-3">
                  <Instagram className="w-8 h-8 text-pink-500" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">Instagram</CardTitle>
              </CardHeader>
              <CardContent className="pb-8 px-6">
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Confira nossos últimos trabalhos lançados e novidades direto no feed.
                </p>
                <Button 
                  onClick={openInstagram} 
                  variant="outline" 
                  className="border-pink-500/20 hover:border-pink-500/50 hover:bg-pink-500/5 text-foreground w-full rounded-2xl py-6 font-semibold hover:scale-102 transition-all"
                >
                  <Instagram className="w-5 h-5 mr-2 text-pink-500" />
                  @personalizados.da.ro
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Timetable/Info Panel */}
          <div className="bg-card border border-border/40 rounded-3xl p-8 text-left shadow-md max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 rounded-full p-2.5">
                <Info className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Informações Importantes</h3>
                <p className="text-xs text-muted-foreground">Prazos e atendimento</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-primary" /> Horário de Atendimento
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between border-b border-border/10 pb-1.5">
                    <span>Segunda a Sexta</span>
                    <span className="font-semibold text-foreground">9h às 18h</span>
                  </li>
                  <li className="flex justify-between border-b border-border/10 pb-1.5">
                    <span>Sábado</span>
                    <span className="font-semibold text-foreground">9h às 15h</span>
                  </li>
                  <li className="flex justify-between pb-1.5">
                    <span>Domingo</span>
                    <span className="text-destructive font-semibold">Fechado</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 bg-muted/40 p-5 rounded-2xl border border-border/30 flex flex-col justify-center">
                <h4 className="text-xs font-bold text-foreground/80 flex items-center gap-1.5 uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-primary" /> Antecedência Mínima
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Para garantir a qualidade impecável dos detalhes e das camadas 3D, solicitamos no mínimo <strong className="text-primary font-bold">5 dias úteis</strong> de antecedência para a confecção e retirada dos pedidos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};