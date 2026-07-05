import React from "react";
import { MessageCircle, Instagram } from 'lucide-react';

export const Footer = ({ openWhatsApp }) => {
  return (
    <footer className="bg-gray-800 text-white py-8">
       <div class="md:text-right flex flex-col md:items-end items-center">
                <p class="text-xs font-light text-slate-400 mb-2">Solução desenvolvida por</p>
                
               <div class="inline-flex flex-col items-start leading-none group">
                <span class="text-2xl font-black tracking-widest text-white font-display uppercase flex items-center">
                    KOS<span class="font-['Montserrat'] inline-block w-2 h-2 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 via-blue-500 to-purple-500 animate-border-flow ml-0.5 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
                </span>
                <div class="h-[2px] w-full bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 via-blue-500 to-purple-500 mt-1 rounded-full animate-border-flow"></div>
            </div>
            </div>
    
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Topos de bolo personalizados do seu jeito</p>
          <div className="flex justify-center space-x-6 mb-4">
            <button
              onClick={openWhatsApp}
              aria-label="Abrir conversa no WhatsApp"
              title="WhatsApp"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </button>
            <button
              onClick={() => window.open('https://instagram.com/personalizados.da.ro/', '_blank')}
              aria-label="Visitar perfil no Instagram"
              title="Instagram"
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 KOS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};