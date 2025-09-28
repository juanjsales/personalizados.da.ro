import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { MessageCircle, Instagram, Heart, Star, Trophy, Phone, Mail, MapPin, Sparkles } from 'lucide-react'; // Trocado Cake por Trophy e Sparkles
import './App.css';

// Import das imagens (Mantenha ou substitua por imagens de TOPOS DE BOLO)
import logo from './assets/logo_personalizados_da_ro.png';
import topper1 from './assets/05XwpYCPnqvJ.jpg'; // Exemplo de topo temático
import topper2 from './assets/pvwqMwgFp90y.jpg'; // Exemplo de topo de aniversário
import topper3 from './assets/KRYzzevQhcxo.jpg'; // Exemplo de topo infantil
import topper4 from './assets/1haMoyCFDXay.jpg'; // Exemplo de topo em camadas
import topper5 from './assets/uoe1vNqkYbnJ.jpg'; // Exemplo de topo de mesversário
import topper6 from './assets/7ChSyaRK0961.jpeg'; // Exemplo de decoração de festa

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Dados alterados para Topos de Bolo
  const topperGallery = [
    { id: 1, image: topper1, title: 'Topos Personalizados 3D', description: 'O toque final perfeito para o seu bolo!' },
    { id: 2, image: topper2, title: 'Topos para Aniversário', description: 'Celebre com o nome e idade em destaque.' },
    { id: 3, image: topper3, title: 'Topos Infantis e Temáticos', description: 'Os personagens favoritos em scrap festa.' },
    { id: 4, image: topper4, title: 'Topos de Casamento e Chá', description: 'Elegância e sofisticação em papelaria fina.' },
    { id: 5, image: topper5, title: 'Kits de Mesversário', description: 'Acompanhe o crescimento do bebê com criatividade.' },
    { id: 6, image: topper6, title: 'Scrap Festa e Caixas', description: 'Complementos de papelaria para a decoração da mesa.' }
  ];

  const testimonials = [
    { name: 'Maria Silva', text: 'O topo ficou impecável! Detalhes perfeitos e a Rô entregou super rápido. Amamos!', rating: 5 },
    { name: 'João Santos', text: 'Qualidade excepcional do material e o design ficou exatamente como pedi. Recomendo!', rating: 5 },
    { name: 'Ana Costa', text: 'O topo deu um show na mesa do bolo. A Personalizados da Rô é referência em scrap festa!', rating: 5 }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
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
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Personalizados da Rô - Topos de Bolo" className="h-12 w-auto" />
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
                Topos e Scrap
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

      {/* Hero Section - Alterado o foco para Topos de Bolo */}
      <section id="home" className="hero-gradient pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <div className="mb-8">
              <img src={logo} alt="Personalizados da Rô - Topos de Bolo" className="h-32 w-auto mx-auto mb-6" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Topos de Bolo e Scrap Festa
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Criamos o **topo de bolo perfeito** para cada tema, garantindo que sua festa seja única e inesquecível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={openWhatsApp} size="lg" className="whatsapp-button text-white">
                <MessageCircle className="w-5 h-5 mr-2" />
                Orçar meu Topo
              </Button>
              <Button onClick={() => scrollToSection('produtos')} variant="outline" size="lg">
                <Sparkles className="w-5 h-5 mr-2" />
                Ver Galeria
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Section - Alterado para Topos e Scrap */}
      <section id="produtos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossos Topos e Decorações</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada peça é feita com papelaria especial, garantindo um visual sofisticado e memorável.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topperGallery.map((topper) => (
              <Card key={topper.id} className="cake-card overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={topper.image} 
                    alt={topper.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{topper.title}</h3>
                  <p className="text-gray-600 mb-4">{topper.description}</p>
                  <Button onClick={openWhatsApp} className="w-full" variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Pedir meu Topo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Section - Alterado para Topos de Bolo */}
      <section id="sobre" className="py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Nossa Paixão por Papelaria</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-gray-700 mb-6">
                  A Personalizados da Rô nasceu para transformar ideias em **topos de bolo e artigos de scrap festa** cheios de charme e personalidade.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Utilizamos materiais de alta qualidade e técnicas precisas para criar decorações que realmente se destacam na sua celebração.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="text-sm">
                    <Heart className="w-3 h-3 mr-1" />
                    Feito sob Encomenda
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    <Star className="w-3 h-3 mr-1" />
                    Papelaria Premium
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    <Trophy className="w-3 h-3 mr-1" />
                    Design Exclusivo
                  </Badge>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">Nossa Missão</h3>
                  <p className="text-gray-600">Criar topos e decorações de papel que traduzam a essência de cada celebração.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">Nossos Valores</h3>
                  <p className="text-gray-600">Criatividade, pontualidade, qualidade e carinho em cada recorte.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">A satisfação dos nossos clientes</h2>
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
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Informações Importantes</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-600">
                <div>
                  <p><strong>Segunda a Sexta:</strong> 9h às 18h</p>
                  <p><strong>Sábado:</strong> 9h às 15h</p>
                </div>
                <div>
                  <p><strong>Domingo:</strong> Fechado</p>
                  <p><strong>Encomendas:</strong> Com 5 dias úteis de antecedência</p> {/* Aumentei o prazo, comum para personalizados */}
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
            <img src={logo} alt="Personalizados da Rô - Topos de Bolo" className="h-16 w-auto mx-auto mb-4 filter brightness-0 invert" />
            <p className="text-gray-400 mb-4">Topos e Scrap Festa do seu jeito</p>
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
