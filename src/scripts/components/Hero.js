import { gsap } from 'gsap'
import { createRipple } from '../utils/gsap-animations.js'

export async function initHero() {
  const main = document.getElementById('main-content')
  if (!main) return

  const heroHTML = `
    <section id="hero" class="relative min-h-screen flex items-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1920&h=1080&fit=crop&q=80"
             alt="Lociones EDEN sobre superficie de mármol"
             class="w-full h-full object-cover"
             loading="eager">
        <div class="absolute inset-0 bg-gradient-to-r from-eden-950/80 via-eden-950/50 to-transparent"></div>
      </div>

      <div class="container relative z-10 py-32 md:py-40">
        <div class="max-w-2xl">
          <p class="inline-flex items-center gap-2 text-gold-400 text-sm font-medium tracking-widest uppercase mb-6" data-gsap="fade-up">
            <span class="w-8 h-px bg-gold-400"></span>
            Artesanía Premium
          </p>

          <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] tracking-tight mb-6" data-gsap="fade-up">
            Tu piel merece
            <span class="block text-gold-400 italic">algo extraordinary</span>
          </h1>

          <p class="text-lg md:text-xl text-eden-200/80 max-w-lg mb-10 leading-relaxed" data-gsap="fade-up">
            Descubre lociones artesanales con ingredientes naturales que transforman tu rutina en un ritual de bienestar.
          </p>

          <div class="flex flex-col sm:flex-row gap-4" data-gsap="fade-up">
            <a href="#productos" class="btn-gold relative overflow-hidden">
              Descubrir Colección
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
            <a href="#como-funciona" class="btn border-white/30 text-white hover:bg-white/10">
              Cómo Funciona
            </a>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mt-12 sm:mt-14" data-gsap="fade-up">
            <div>
              <p class="font-display text-3xl font-medium text-white">50K+</p>
              <p class="text-sm text-eden-300/70 mt-1">Clientes felices</p>
            </div>
            <div class="w-px h-12 bg-white/20"></div>
            <div>
              <p class="font-display text-3xl font-medium text-white">4.9</p>
              <p class="text-sm text-eden-300/70 mt-1">Calificación media</p>
            </div>
            <div class="w-px h-12 bg-white/20"></div>
            <div>
              <p class="font-display text-3xl font-medium text-white">100%</p>
              <p class="text-sm text-eden-300/70 mt-1">Natural</p>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#beneficios" class="text-white/60 hover:text-white transition-colors" aria-label="Scroll down">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
        </a>
      </div>
    </section>
  `

  main.insertAdjacentHTML('afterbegin', heroHTML)

  const heroBtns = document.querySelectorAll('#hero .btn, #hero .btn-gold')
  heroBtns.forEach(btn => createRipple(btn))

  const headline = document.querySelector('#hero h1')
  if (headline) {
    gsap.fromTo(headline.children,
      { opacity: 0, y: 60, rotateX: -15 },
      { opacity: 1, y: 0, rotateX: 0, duration: 1.2, ease: 'power4.out', stagger: 0.15, delay: 0.3 }
    )
  }
}