# AGENTS.md - Guia para Agentes de Desarrollo

## Comandos

```bash
npm run dev       # Desarrollo local (localhost:3000)
npm run build     # Build de produccion
npm run preview   # Preview del build
```

## Arquitectura

- **Entry point**: `src/main.js` - orquesta inicializacion
- **Estilos**: `src/styles/main.css` - Tailwind v4 via `@theme` (no tailwind.config.js)
- **Datos**: `src/data/products.js` - todos los datos mock en un solo archivo
- **Componentes**: `src/scripts/components/` - cada archivo inserta su HTML via `insertAdjacentHTML`
- **Utilidades**: `src/scripts/utils/` - GSAP, Lenis, AOS, scroll progress

## Flujo de Inicializacion

```
1. initLenis()         → smooth scroll
2. initScrollProgress() → barra de progreso
3. initNavbar()        → inserta header
4. initHero()          → inserta hero
5-12. Resto de componentes → insertan sus secciones
13. initGSAP()         → activa animaciones (DESPUES del HTML)
14. initAOS()          → activa scroll reveals
```

## Convenciones

### CSS (Tailwind v4)
- Colores: `--color-{name}-{shade}` en `@theme {}`
- Fuentes: `--font-{name}` en `@theme {}`
- Componentes: clases en `@layer components {}`
- Animaciones: `@keyframes` + `@theme` para utilities

### Componentes
- Cada componente exporta `async function init{Name}()`
- Inserta HTML via `main.insertAdjacentHTML()`
- Usa `data-gsap` para animaciones GSAP
- Usa `data-aos` para animaciones AOS (no mezclar ambos en el mismo elemento)

### Datos
- Todo en `src/data/products.js`
- Productos: `{ id, name, category, description, price, image, badge }`
- Testimonios: `{ id, name, role, avatar, rating, text, location }`

## Dependencias Clave

| Paquete | Proposito |
|---|---|
| `gsap` + `ScrollTrigger` | Animaciones profesionales |
| `aos` | Scroll reveal simples |
| `swiper` | Carruseles |
| `lenis` | Smooth scroll |
| `@tailwindcss/vite` | CSS processing |

## Archivos Criticos

- `vite.config.js` - `base: '/Landing-Page-EDEN/'` (ruta de GitHub Pages)
- `src/styles/main.css` - design system completo
- `src/data/products.js` - todos los datos del sitio

## Errores Comunes

1. **Elementos invisibles**: Si `data-gsap` y `data-aos` estan en el mismo elemento, conflicto. Usar solo uno.
2. **GSAP no anima**: Verificar que `initGSAP()` se ejecuta DESPUES de insertar HTML.
3. **Lenis no refresca AOS**: Verificar que `window.lenis.on('scroll', ...)` esta configurado.
4. **Swiper no funciona**: Verificar que CSS de Swiper se importa (`swiper/css`).