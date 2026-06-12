export const products = [
  {
    id: 1,
    name: 'Aurora',
    category: 'Cuerpo',
    description: 'Fragancia floral con notas de jazmín y rosa blanca. Hidratación profunda con vitamina E.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop',
    badge: 'Bestseller'
  },
  {
    id: 2,
    name: 'Noctis',
    category: 'Cuerpo',
    description: 'Fragancia amaderada con sándalo y vainilla. Nutrición intensa para piel seca.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop',
    badge: 'Nuevo'
  },
  {
    id: 3,
    name: 'Serena',
    category: 'Manos',
    description: 'Fragancia cítrica con bergamota y limón. Absorción rápida sin sensación grasa.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=600&h=600&fit=crop',
    badge: null
  },
  {
    id: 4,
    name: 'Luna',
    category: 'Rostro',
    description: 'Fragancia suave de peonía. Fórmula ligera para el cuidado diario del rostro.',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&h=600&fit=crop',
    badge: 'Premium'
  },
  {
    id: 5,
    name: 'Solara',
    category: 'Cuerpo',
    description: 'Fragancia tropical con coco y flor de hibisco. Protección y brillo natural.',
    price: 36.99,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop',
    badge: null
  },
  {
    id: 6,
    name: 'Mistica',
    category: 'Cuerpo',
    description: 'Fragancia especiada con cardamomo y cedro. Reparación nocturna avanzada.',
    price: 42.99,
    image: 'https://images.unsplash.com/photo-1585232004423-244e0e6904e3?w=600&h=600&fit=crop',
    badge: 'Edición Limitada'
  }
]

export const testimonials = [
  {
    id: 1,
    name: 'María González',
    role: 'Cliente desde 2023',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
    text: 'La loción Aurora es mi favorita. El aroma dura todo el día y mi piel se siente increíblemente suave. Ya no puedo usar otra marca.',
    location: 'Madrid, España'
  },
  {
    id: 2,
    name: 'Carlos Ruiz',
    role: 'Cliente desde 2024',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
    text: 'Compré Noctis como regalo y terminé usando yo mismo. La textura es perfecta, no deja residuos y el aroma es sofisticado.',
    location: 'Buenos Aires, Argentina'
  },
  {
    id: 3,
    name: 'Ana Martínez',
    role: 'Cliente desde 2023',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 5,
    text: 'Probé Serena y Luna. Ambas son excelentes. Me encanta que son ingredientes naturales y el empaque es reciclable.',
    location: 'Ciudad de México, México'
  },
  {
    id: 4,
    name: 'Diego Herrera',
    role: 'Cliente desde 2024',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    rating: 4,
    text: 'Excelente relación calidad-precio. La loción Solara huele increíble y la piel queda hidratada por horas.',
    location: 'Bogotá, Colombia'
  },
  {
    id: 5,
    name: 'Lucía Fernández',
    role: 'Cliente desde 2022',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    rating: 5,
    text: 'Soy alérgica a muchas lociones y EDEN fue la primera que no me causó irritación. La recomiendo al 100%.',
    location: 'Lima, Perú'
  }
]

export const benefits = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/></svg>`,
    title: 'Ingredientes Naturales',
    description: 'Fórmulas con aceites esenciales y extractos botánicos. Sin parabenos, siliconas ni sulfatos.'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/></svg>`,
    title: 'Hidratación 48h',
    description: 'Tecnología de liberación prolongada que mantiene tu piel suave y nutrida durante todo el día.'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.21.243-2.363.684-3.395"/></svg>`,
    title: 'Envío Gratis',
    description: 'Envío gratuito en pedidos superiores a $50. Entrega en 2-5 días hábiles a todo el país.'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182"/></svg>`,
    title: 'Devolución Garantizada',
    description: '30 días de garantía. Si no estás satisfecho, te devolvemos tu dinero sin preguntas.'
  }
]

export const howItWorks = [
  {
    step: 1,
    title: 'Explora',
    description: 'Navega por nuestra colección y descubre la fragancia perfecta para ti.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg>`
  },
  {
    step: 2,
    title: 'Selecciona',
    description: 'Elige tu loción favorita y personaliza tu pedido con el tamaño que prefieras.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/></svg>`
  },
  {
    step: 3,
    title: 'Recibe',
    description: 'Recibe tu pedido en la puerta de tu casa con empaque premium y eco-friendly.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75m-7.5-3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/></svg>`
  },
  {
    step: 4,
    title: 'Disfruta',
    description: 'Transforma tu rutina diaria en un ritual de bienestar y cuidado personal.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/></svg>`
  }
]

export const faq = [
  {
    question: '¿Cuánto duran las lociones EDEN?',
    answer: 'Nuestras lociones están formuladas con tecnología de liberación prolongada. El aroma puede durar entre 8 y 12 horas dependiendo de la fragancia y tu tipo de piel. La hidratación dura hasta 48 horas gracias a nuestros ingredientes naturales.'
  },
  {
    question: '¿Son adecuadas para piel sensible?',
    answer: 'Sí, todas nuestras lociones son hipoalergénicas y dermatológicamente testeadas. No contienen parabenos, sulfatos, siliconas ni fragancias sintéticas agresivas. Son seguras para todo tipo de piel, incluida la piel sensible.'
  },
  {
    question: '¿Cuál es la política de devoluciones?',
    answer: 'Ofrecemos 30 días de garantía de satisfacción. Si no estás complacido con tu compra, puedes devolver el producto sin abrir en su empaque original para obtener un reembolso completo. El envío de devolución corre por nuestra cuenta.'
  },
  {
    question: '¿Qué ingredientes utilizan?',
    answer: 'Utilizamos aceites naturales como argán, coco y jojoba, combinados con extractos botánicos de jazmín, rosa, sándalo y lavanda. Nuestras fórmulas están libres de crueldad animal y son 100% veganas.'
  },
  {
    question: '¿Cuánto tarda el envío?',
    answer: 'El envío estándar tarda entre 2 y 5 días hábiles. Ofrecemos envío gratuito en pedidos superiores a $50. También contamos con envío express (1-2 días) con un costo adicional de $8.'
  },
  {
    question: '¿Puedo comprar para regalo?',
    answer: '¡Por supuesto! Ofrecemos empaques de regalo premium con un costo adicional de $5. También puedes incluir una tarjeta personalizada con un mensaje. Todos nuestros productos llegan listos para sorprender.'
  }
]