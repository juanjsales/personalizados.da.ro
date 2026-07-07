import React from "react";
import { MessageCircle, Instagram } from 'lucide-react';

export const Footer = ({ openWhatsApp }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background pt-16 pb-10 border-t border-border/10">
      <div className="container mx-auto px-6 text-center">
        <img src="/logo_personalizados_da_ro.png" alt="Personalizados da Rô" className="h-12 w-auto mx-auto mb-4 hover:scale-105 transition-transform duration-300" />
        <p className="text-muted-foreground text-sm max-w-sm mx-auto mb-8 leading-relaxed">
          Topos de bolo personalizados em camadas e decorações em papelaria criativa para todas as ocasiões.
        </p>

        {/* Redes Sociais no Rodapé */}
        <div className="flex justify-center gap-4 mb-10">
          <a
            href="https://wa.me/5521997148263?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20para%20topos%20de%20bolo%20personalizados."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir conversa no WhatsApp"
            title="WhatsApp"
            className="w-11 h-11 rounded-full bg-muted/10 hover:bg-emerald-500/10 flex items-center justify-center text-muted-foreground hover:text-emerald-500 border border-border/10 hover:border-emerald-500/20 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 fill-emerald-500/5 text-emerald-500" />
          </a>
          <a
            href="https://instagram.com/personalizados.da.ro/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar perfil no Instagram"
            title="Instagram"
            className="w-11 h-11 rounded-full bg-muted/10 hover:bg-pink-500/10 flex items-center justify-center text-muted-foreground hover:text-pink-500 border border-border/10 hover:border-pink-500/20 transition-all duration-300"
          >
            <Instagram className="w-5 h-5 text-pink-500" />
          </a>
        </div>

        {/* Divisor */}
        <div className="w-full h-px bg-border/15 mb-8" />

        {/* Linha de Baixo */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Lado Esquerdo: Copyright + Assinatura Stacked */}
          <div className="flex flex-col items-center md:items-start gap-2 order-2 md:order-1 text-center md:text-left">
            <p className="text-muted-foreground/60 text-xs">
              &copy; {currentYear} Personalizados da Rô. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground/50 uppercase tracking-widest font-semibold">
              <span>Desenvolvido por</span>
              <a 
                href="https://kos-rho.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Visitar site do desenvolvedor KOS"
                className="hover:opacity-90 transition-opacity"
              >
                <div className="inline-flex flex-col items-start leading-none group">
                  <span className="text-sm font-black tracking-widest text-white font-display uppercase flex items-center">
                    KOS 
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[linear-gradient(to_right,#e53e3e,#dd6b20,#f6e05e,#48bb78,#4299e1,#667eea,#9f7aea)] ml-0.5"></span>
                  </span>
                  <div className="h-[1.5px] w-full bg-[linear-gradient(to_right,#e53e3e,#dd6b20,#f6e05e,#48bb78,#4299e1,#667eea,#9f7aea)] mt-0.5 rounded-full"></div>
                </div>
              </a>
            </div>
          </div>
          
          {/* Lado Direito: Espaçador vazio no desktop para acomodar o botão flutuante de WhatsApp */}
          <div className="hidden md:block w-24 h-10 order-1 md:order-2" />
        </div>
      </div>
    </footer>
  );
};