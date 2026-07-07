import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button';
import { MessageCircle, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { id: 'home', label: 'Início' },
  { id: 'produtos', label: 'Nossos Topos' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'contato', label: 'Contato' },
];

export const Header = ({ activeSection, scrollToSection, openWhatsApp }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollAndCloseMenu = (sectionId) => {
    scrollToSection(sectionId);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-border/10 ${
      isScrolled 
        ? 'glass-nav py-3.5 shadow-md' 
        : 'bg-white/95 md:bg-white/50 md:backdrop-blur-xs py-6 md:py-8'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Layout Desktop */}
        <div className="hidden md:block w-full">
          {isScrolled ? (
            /* Estado Rolado: Navegação dividida com logo pequeno no centro */
            <div className="flex items-center justify-between w-full">
              {/* Lado Esquerdo: Primeiros 2 links */}
              <div className="flex-1 flex justify-start">
                <nav className="flex items-center space-x-8">
                  {navItems.slice(0, 2).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-sm font-semibold transition-colors pb-1 nav-link-underline hover:text-primary ${
                        activeSection === item.id ? 'text-primary nav-link-active' : 'text-muted-foreground'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Centro: Logo Pequeno */}
              <div className="flex-initial flex justify-center">
                <button onClick={() => scrollToSection('home')} className="flex items-center hover:opacity-90 transition-opacity">
                  <img 
                    src="/logo_personalizados_da_ro.png" 
                    alt="Personalizados da Rô" 
                    className="h-10 w-auto transition-all duration-500" 
                  />
                </button>
              </div>

              {/* Lado Direito: Últimos 2 links + Botão CTA */}
              <div className="flex-1 flex justify-end items-center gap-8">
                <nav className="flex items-center space-x-8">
                  {navItems.slice(2).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-sm font-semibold transition-colors pb-1 nav-link-underline hover:text-primary ${
                        activeSection === item.id ? 'text-primary nav-link-active' : 'text-muted-foreground'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
                <Button 
                  onClick={openWhatsApp} 
                  size="sm" 
                  className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-md px-6 hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Fazer Orçamento
                </Button>
              </div>
            </div>
          ) : (
            /* Estado Inicial: Logo grande centralizado + links centralizados embaixo com botão à direita */
            <div className="flex flex-col items-center">
              {/* Logo Grande Centralizado */}
              <button onClick={() => scrollToSection('home')} className="mb-4 hover:opacity-90 transition-opacity">
                <img 
                  src="/logo_personalizados_da_ro.png" 
                  alt="Personalizados da Rô" 
                  className="h-24 w-auto transition-all duration-500" 
                />
              </button>
              
              {/* Segunda Linha: Links de Navegação + Botão Absoluto à Direita */}
              <div className="w-full relative flex items-center justify-center py-2">
                <nav className="flex items-center space-x-10">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-sm font-semibold transition-colors pb-1 nav-link-underline hover:text-primary ${
                        activeSection === item.id ? 'text-primary nav-link-active' : 'text-muted-foreground'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <Button 
                    onClick={openWhatsApp} 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-md px-6 hover:scale-105 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Fazer Orçamento
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Layout Mobile */}
        <div className="flex md:hidden items-center justify-between w-full">
          <button onClick={() => scrollToSection('home')} className="flex items-center hover:opacity-90 transition-opacity">
            <img 
              src="/logo_personalizados_da_ro.png" 
              alt="Personalizados da Rô" 
              className={`transition-all duration-500 ease-in-out ${
                isScrolled ? 'h-9 w-auto' : 'h-14 w-auto'
              }`} 
            />
          </button>

          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-6 border-l border-border/40 bg-white/95 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <SheetHeader className="text-left px-0 pt-4 pb-2">
                    <SheetTitle className="text-xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">Navegação</SheetTitle>
                    <SheetDescription>Encontre o topo de bolo ideal.</SheetDescription>
                  </SheetHeader>
                  <nav className="flex flex-col items-start space-y-3 mt-6">
                    {navItems.map((item) => (
                      <SheetTrigger asChild key={item.id}>
                        <button
                          onClick={() => handleScrollAndCloseMenu(item.id)}
                          className={`text-base font-semibold w-full text-left py-2.5 px-4 rounded-xl transition-all hover:bg-primary/10 hover:text-primary ${
                            activeSection === item.id ? 'text-primary bg-primary/5' : 'text-muted-foreground'
                          }`}
                        >
                          {item.label}
                        </button>
                      </SheetTrigger>
                    ))}
                  </nav>
                </div>
                <div className="pb-6">
                  <Button onClick={openWhatsApp} className="bg-primary hover:bg-primary/95 text-white w-full rounded-xl shadow-lg flex items-center justify-center py-6 font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Fazer Orçamento
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </header>
  );
};