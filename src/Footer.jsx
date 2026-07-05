import React from "react";
import { MessageCircle, Instagram } from 'lucide-react';

export const Footer = ({ openWhatsApp }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background pt-12 pb-8">
      <div className="container mx-auto px-4 text-center">
        <img src="/logo_personalizados_da_ro.png" alt="Personalizados da Rô" className="h-14 w-auto mx-auto mb-4" />
        <p className="text-muted-foreground mb-6">Topos de bolo personalizados do seu jeito.</p>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://wa.me/5521997148263?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20para%20topos%20de%20bolo%20personalizados."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir conversa no WhatsApp"
            title="WhatsApp"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <MessageCircle className="w-6 h-6 text-green-500" />
          </a>
          <a
            href="https://instagram.com/personalizados.da.ro/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar perfil no Instagram"
            title="Instagram"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        <div className="border-t border-border/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground/80 text-sm order-2 md:order-1">
            &copy; {currentYear} Personalizados da Rô. Todos os direitos reservados.
          </p>
          <div class="md:text-right flex flex-col md:items-end items-center order-1 md:order-2">
               <p className="text-xs text-muted-foreground/70 mb-1">Solução desenvolvida por</p>
            <a href="https://kos-rho.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Visitar site do desenvolvedor KOS">
            <div class="inline-flex flex-col items-start leading-none group">
            <span class="text-2xl font-black tracking-widest text-white font-display uppercase flex items-center">
            KOS 
            <span class="font-['Montserrat'] inline-block w-2 h-2 rounded-full bg-[linear-gradient(to_right,#e53e3e,#dd6b20,#f6e05e,#48bb78,#4299e1,#667eea,#9f7aea)] ml-0.5"></span>
            </span>
           
            <div class="h-[2px] w-full bg-[linear-gradient(to_right,#e53e3e,#dd6b20,#f6e05e,#48bb78,#4299e1,#667eea,#9f7aea)] mt-1 rounded-full"></div>
            </div>
            </a>
            </div>
        </div>
      </div>
    </footer>
  );
};