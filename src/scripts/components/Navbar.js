import { gsap } from 'gsap'
import { createHoverLift } from '../utils/gsap-animations.js'

const NAV_LINKS = [
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#productos', label: 'Productos' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#faq', label: 'FAQ' },
]

export async function initNavbar() {
  const header = document.getElementById('navbar')
  if (!header) return

  header.innerHTML = `
    <nav class="relative h-16 md:h-20 glass transition-all duration-300" role="navigation" aria-label="Navegación principal">
      <div class="container h-full flex items-center justify-between">
        <a href="#" class="font-display text-xl md:text-2xl font-medium text-eden-900 tracking-tight z-10" aria-label="EDEN - Inicio">
          EDEN
        </a>

        <div class="hidden md:flex items-center gap-10">
          ${NAV_LINKS.map(link => `
            <a href="${link.href}" class="text-sm font-medium text-eden-700 hover:text-eden-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-gold-500 hover:after:w-full transition-all duration-300" data-gsap="fade-in">${link.label}</a>
          `).join('')}
        </div>

        <div class="flex items-center gap-4">
          <button class="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-eden-700 hover:text-eden-900 transition-colors" aria-label="Iniciar sesión">
            Iniciar sesión
          </button>
          <button class="relative p-2 text-eden-700 hover:text-eden-900 transition-colors" aria-label="Carrito de compras">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            <span class="absolute -top-1 -right-1 w-4 h-4 bg-gold-500 text-eden-50 text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
          </button>
          <button class="md:hidden p-2 text-eden-700" aria-label="Menú" id="mobile-menu-btn" aria-expanded="false" aria-controls="mobile-menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>

      <div class="md:hidden hidden overflow-hidden transition-all duration-300 ease-in-out" id="mobile-menu" aria-label="Menú móvil">
        <div class="py-6 px-4 space-y-4 border-t border-eden-200">
          ${NAV_LINKS.map(link => `
            <a href="${link.href}" class="block px-4 py-3 text-base font-medium text-eden-700 hover:text-eden-900 hover:bg-eden-100 rounded-lg transition-colors">${link.label}</a>
          `).join('')}
          <div class="pt-4 flex flex-col gap-3">
            <button class="px-4 py-3 text-base font-medium text-eden-700" aria-label="Iniciar sesión">Iniciar sesión</button>
            <button class="px-4 py-3 text-base font-medium text-eden-900 bg-gold-400 rounded-lg" aria-label="Ver carrito">Carrito (0)</button>
          </div>
        </div>
      </div>
    </nav>
  `

  const mobileBtn = header.querySelector('#mobile-menu-btn')
  const mobileMenu = header.querySelector('#mobile-menu')
  let isOpen = false

  mobileBtn?.addEventListener('click', () => {
    isOpen = !isOpen
    mobileMenu.classList.toggle('hidden')
    gsap.fromTo(mobileMenu,
      { opacity: 0, height: 0 },
      { opacity: 1, height: 'auto', duration: 0.3, ease: 'power2.out' }
    )
    mobileBtn.setAttribute('aria-expanded', String(isOpen))
  })

  header.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      isOpen = false
      mobileMenu.classList.add('hidden')
      mobileBtn?.setAttribute('aria-expanded', 'false')
    })
  })

  let lastScroll = 0
  const navEl = header.querySelector('nav')
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY
    if (navEl) {
      if (currentScroll > 100) {
        navEl.classList.add('bg-white/95', 'shadow-sm')
      } else {
        navEl.classList.remove('bg-white/95', 'shadow-sm')
      }
    }
    if (currentScroll > lastScroll && currentScroll > 200) {
      gsap.to(header, { y: '-100%', duration: 0.3, ease: 'power2.inOut' })
    } else {
      gsap.to(header, { y: 0, duration: 0.3, ease: 'power2.inOut' })
    }
    lastScroll = currentScroll
  }, { passive: true })

  header.querySelectorAll('a, button').forEach(el => createHoverLift(el, { y: -2, scale: 1 }))

  return header
}