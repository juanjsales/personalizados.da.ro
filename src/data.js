// Dicionário histórico para mapear as imagens que já existem no projeto
const fallbackMapping = {
  'topper1': { title: 'Topos Personalizados 3D', category: '3d', description: 'Dê profundidade e magia ao seu bolo com topos 3D cheios de detalhes e camadas.' },
  'topper2': { title: 'Topos para Aniversário', category: 'aniversario', description: 'Personalize com nome e idade, criando uma peça central única para a sua comemoração.' },
  'topper3': { title: 'Topos Infantis e Temáticos', category: 'infantil', description: 'Traga os personagens favoritos da criançada para a festa com topos cheios de cor e alegria.' },
  'topper4': { title: 'Topos para Casamento e Chá', category: 'casamento-cha', description: 'Celebre o amor com topos elegantes e sofisticados, criados para momentos especiais.' },
  'topper5': { title: 'Kits de Mesversário', category: 'kits-festa', description: 'Comemore cada mês do seu bebê com kits temáticos criativos e cheios de afeto.' },
  '05XwpYCPnqvJ': { title: 'Decoração de Festa', category: 'kits-festa', description: 'Decore sua mesa com caixinhas, forminhas e outros itens de papelaria no mesmo tema.' }
};

// Carrega dinamicamente todas as imagens da pasta assets (exclui SVGs automáticos)
const images = import.meta.glob('./assets/*.{jpeg,jpg,png,webp,gif}', { eager: true });

export const topperGallery = Object.entries(images).map(([path, module], index) => {
  const fileName = path.split('/').pop().split('.').shift();
  
  // Se o nome do arquivo seguir o padrão "Nome do Topo_categoria"
  if (fileName.includes('_')) {
    const parts = fileName.split('_');
    const category = parts.pop().toLowerCase().trim(); // Converte para minúsculas e limpa espaços extras
    const rawTitle = parts.join('_'); // Junta o resto de volta se houver múltiplos underscores
    const title = rawTitle.replace(/-/g, ' ').replace(/\+/g, ' '); // Limpa hifens e plus
    
    return {
      id: index + 1,
      image: module.default,
      title: title,
      description: `Lindo modelo de ${title} feito com papelaria especial e acabamento premium.`,
      category: category
    };
  }
  
  // Caso contrário, tenta mapear usando o histórico ou valores padrão
  const fallback = fallbackMapping[fileName] || {
    title: fileName.replace(/-/g, ' '),
    category: '3d',
    description: 'Personalizado de papelaria especial feito sob encomenda com detalhes exclusivos.'
  };
  
  return {
    id: index + 1,
    image: module.default,
    title: fallback.title,
    description: fallback.description,
    category: fallback.category
  };
});

export const testimonials = [
  { name: 'Maria Silva', text: 'O topo ficou impecável! Detalhes perfeitos e a Rô entregou super rápido. Amamos!', rating: 5 },
  { name: 'João Santos', text: 'Qualidade excepcional do material e o design ficou exatamente como pedi. Recomendo!', rating: 5 },
  { name: 'Ana Costa', text: 'O topo deu um show na mesa do bolo. A Personalizados da Rô é referência em papelaria de festa!', rating: 5 }
];