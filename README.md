# EDEN - Landing Page Premium

Landing page moderna para lociones artesanales premium. Estilo minimalista/lujo con animaciones avanzadas.

## Stack

| Tecnologia | Version | Uso |
|---|---|---|
| Vite | 8.x | Bundler + dev server |
| Tailwind CSS | 4.x | Utility-first CSS |
| GSAP | 3.x | Animaciones avanzadas + ScrollTrigger |
| AOS | 2.x | Scroll reveal animations |
| Swiper.js | 12.x | Carruseles |
| Lenis | 1.x | Smooth scroll |

## Inicio Rapido

```bash
# Instalar dependencias
npm install

# Desarrollo (localhost:3000)
npm run dev

# Build produccion
npm run build

# Preview del build
npm run preview
```

## Estructura

```
src/
├── main.js                    # Bootstrap del proyecto
├── styles/main.css            # Tailwind v4 + design system
├── data/products.js           # Datos mock (productos, testimonios, FAQ)
└── scripts/
    ├── components/            # 9 componentes modulares
    │   ├── Navbar.js          # Flotante, hide on scroll, mobile menu
    │   ├── Hero.js            # Full-screen + parallax + headline stagger
    │   ├── Benefits.js        # 4 cards con iconos + hover lift
    │   ├── ProductsGallery.js # Swiper.js carousel + toast
    │   ├── Testimonials.js    # Swiper autoplay + estrellas
    │   ├── HowItWorks.js      # 4 pasos + ScrollTrigger
    │   ├── FAQ.js             # Accordion GSAP + keyboard accessible
    │   ├── Newsletter.js      # Validacion email + simulacion envio
    │   └── Footer.js          # Sitemap + redes + back-to-top
    └── utils/                 # Configuraciones globales
        ├── gsap-animations.js # GSAP helpers + ScrollTrigger
        ├── lenis-setup.js     # Smooth scroll
        ├── aos-setup.js       # AOS config
        └── scroll-progress.js # Barra de progreso
```

## Design System

Paleta de colores definida en `src/styles/main.css` via `@theme`:

- **eden-50 a eden-950**: Tonos de marron/caramelo (50=claro, 950=oscuro)
- **gold-400 a gold-600**: Acento dorado para CTAs y highlights
- **font-display**: Playfair Display (titulos elegantes)
- **font-body**: Inter (cuerpo legible)

## Deploy

El proyecto se despliega automaticamente a GitHub Pages via GitHub Actions al hacer push a `main`.

URL: `https://jostcuro.github.io/Landing-Page-EDEN/`

## Licencia

ISC