import React from 'react'
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

  const handleScrollAndCloseMenu = (sectionId) => {
    // A Sheet gerencia seu próprio estado de abertura/fechamento, então não precisamos mais do setIsMenuOpen
    scrollToSection(sectionId);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection('home')} className="flex items-center space-x-3">
            <img src="/logo_personalizados_da_ro.png" alt="Personalizados da Rô - Topos de Bolo" className="h-12 w-auto" />
          </button>

          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="text-left">
                  <SheetTitle>Navegação</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col items-start space-y-4 mt-8">
                  {navItems.map((item) => (
                    <SheetTrigger asChild key={item.id}>
                      <button
                        onClick={() => handleScrollAndCloseMenu(item.id)}
                        className={`text-lg font-medium transition-colors hover:text-primary ${
                          activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                        }`}
                      >
                        {item.label}
                      </button>
                    </SheetTrigger>
                  ))}
                  <Button onClick={openWhatsApp} className="whatsapp-button text-white w-full mt-4">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};