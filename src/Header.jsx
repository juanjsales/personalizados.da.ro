import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import { MessageCircle, Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { id: 'home', label: 'Início' },
  { id: 'produtos', label: 'Nossos Topos' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'contato', label: 'Contato' },
];

export const Header = ({ activeSection, scrollToSection, openWhatsApp }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollAndCloseMenu = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
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

          <Button onClick={openWhatsApp} className="whatsapp-button text-white hidden md:flex">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>

          <div className="md:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollAndCloseMenu(item.id)}
                className={`text-lg font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button onClick={openWhatsApp} className="whatsapp-button text-white w-3/4">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};