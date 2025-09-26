import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { MessageCircle, Instagram, Heart, Star, Cake, Phone, Mail, MapPin } from 'lucide-react';
import './App.css';

// Import das imagens
import logo from './assets/logo_personalizados_da_ro.png';
import cake1 from './assets/05XwpYCPnqvJ.jpg';
import cake2 from './assets/pvwqMwgFp90y.jpg';
import cake3 from './assets/KRYzzevQhcxo.jpg';
import cake4 from './assets/1haMoyCFDXay.jpg';
import cake5 from './assets/uoe1vNqkYbnJ.jpg';
import cake6 from './assets/7ChSyaRK0961.jpeg';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const cakeGallery = [
    { id: 1, image: cake1, title: 'Bolos Personalizados', description: 'Criações únicas para cada ocasião' },
    { id: 2, image: cake2, title: 'Bolos de Aniversário', description: 'Momentos especiais merecem sabores especiais' },
    { id: 3, image: cake3, title: 'Bolos Coloridos', description: 'Alegria em cada fatia' },
    { id: 4, image: cake4, title: 'Bolos Temáticos', description: 'Seus personagens favoritos em forma de bolo' },
    { id: 5, image: cake5, title: 'Bolos Artesanais', description: 'Feitos com amor e dedicação' },
    { id: 6, image: cake6, title: 'Doces Especiais', description: 'Variedade de sabores irresistíveis' }
  ];

  const testimonials = [
    { name: 'Maria Silva', text: 'O bolo ficou perfeito! Superou todas as expectativas. Recomendo!', rating: 5 },
    { name: 'João Santos', text: 'Qualidade excepcional e atendimento maravilhoso. Voltarei sempre!', rating: 5 },
    { name: 'Ana Costa', text: 'Bolos deliciosos e lindos! A Rô é uma artista da confeitaria.', rating: 5 }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5521997148263?text=Olá! Gostaria de fazer um orçamento para um bolo personalizado.', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Personalizados da Rô" className="h-12 w-auto" />
            </div>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('produtos')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'produtos' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Produtos
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'sobre' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'contato' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Contato
              </button>
            </nav>
            <Button onClick={openWhatsApp} className="whatsapp-button text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-gradient pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <div className="mb-8">
              <img src={logo} alt="Personalizados da Rô" className="h-32 w-auto mx-auto mb-6" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Personalizados do seu jeito
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Criamos bolos únicos e especiais para tornar seus momentos ainda mais doces e memoráveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={openWhatsApp} size="lg" className="whatsapp-button text-white">
                <MessageCircle className="w-5 h-5 mr-2" />
                Faça seu Pedido
              </Button>
              <Button onClick={() => scrollToSection('produtos')} variant="outline" size="lg">
                <Cake className="w-5 h-5 mr-2" />
                Ver Produtos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section id="produtos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossos Produtos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada bolo é uma obra de arte feita especialmente para você, com ingredientes selecionados e muito carinho.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cakeGallery.map((cake) => (
              <Card key={cake.id} className="cake-card overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={cake.image} 
                    alt={cake.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{cake.title}</h3>
                  <p className="text-gray-600 mb-4">{cake.description}</p>
                  <Button onClick={openWhatsApp} className="w-full" variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Sobre a Personalizados da Rô</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-gray-700 mb-6">
                  Com muito amor e dedicação, a Personalizados da Rô nasceu do sonho de criar momentos especiais através de bolos únicos e personalizados.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Cada criação é pensada especialmente para você, combinando sabores irresistíveis com designs únicos que tornam sua celebração ainda mais especial.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="text-sm">
                    <Heart className="w-3 h-3 mr-1" />
                    Feito com Amor
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    <Star className="w-3 h-3 mr-1" />
                    Qualidade Premium
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    <Cake className="w-3 h-3 mr-1" />
                    100% Artesanal
                  </Badge>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">Nossa Missão</h3>
                  <p className="text-gray-600">Criar bolos únicos que transformem momentos especiais em memórias inesquecíveis.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">Nossos Valores</h3>
                  <p className="text-gray-600">Qualidade, personalização, carinho e dedicação em cada detalhe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">O que nossos clientes dizem</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-800">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Entre em Contato</h2>
            <p className="text-lg text-gray-600 mb-12">
              Pronto para criar o bolo dos seus sonhos? Entre em contato conosco!
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <CardContent className="p-0 text-center">
                  <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">WhatsApp</h3>
                  <p className="text-gray-600 mb-4">Fale conosco diretamente pelo WhatsApp</p>
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
                  <p className="text-gray-600 mb-4">Siga-nos e veja nossas criações</p>
                  <Button 
                    onClick={() => window.open('https://instagram.com/personalizados.da.ro/', '_blank')}
                    variant="outline" 
                    className="w-full"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    @personalizados.da.ro
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 p-8 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Horário de Atendimento</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-600">
                <div>
                  <p><strong>Segunda a Sexta:</strong> 9h às 18h</p>
                  <p><strong>Sábado:</strong> 9h às 15h</p>
                </div>
                <div>
                  <p><strong>Domingo:</strong> Fechado</p>
                  <p><strong>Encomendas:</strong> Com 48h de antecedência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <img src={logo} alt="Personalizados da Rô" className="h-16 w-auto mx-auto mb-4 filter brightness-0 invert" />
            <p className="text-gray-400 mb-4">Personalizados do seu jeito</p>
            <div className="flex justify-center space-x-6 mb-4">
              <button 
                onClick={openWhatsApp}
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </button>
              <button 
                onClick={() => window.open('https://instagram.com/personalizados.da.ro/', '_blank')}
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Personalizados da Rô. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

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
