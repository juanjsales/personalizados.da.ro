import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import './App.css';

import { Header } from './Header';
import { Hero } from './Hero';
import { Products } from './Products';
import { About } from './About';
import { Testimonials } from './Testimonials';
import { Contact } from './Contact';
import { Footer } from './Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' } // Ativa quando a seção está no meio da tela
    );

    const sections = ['home', 'produtos', 'sobre', 'contato'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.unobserve(el);
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5521997148263?text=Olá! Gostaria de fazer um orçamento para topos de bolo personalizados.', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} openWhatsApp={openWhatsApp} />

      <main>
        <Hero openWhatsApp={openWhatsApp} scrollToSection={scrollToSection} />
        <Products openWhatsApp={openWhatsApp} />
        <About />
        <Testimonials />
        <Contact openWhatsApp={openWhatsApp} />
      </main>

      <Footer openWhatsApp={openWhatsApp} />

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={openWhatsApp}
          className="whatsapp-button text-white rounded-full w-14 h-14 shadow-lg"
          size="lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default App;
