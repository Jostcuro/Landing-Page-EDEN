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
      <div class="container h-full flex items-center justify-between px-4 md:px-6">
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
          <button class="md:hidden p-2 text-eden-700 hover:text-eden-900 transition-colors" aria-label="Menú" id="mobile-menu-btn" aria-expanded="false" aria-controls="mobile-menu-overlay">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </nav>

    <div class="fixed inset-0 z-[50] bg-eden-950 hidden" id="mobile-menu-overlay" aria-modal="true" role="dialog" aria-label="Menú de navegación">
      <div class="flex min-h-screen items-center justify-center px-6 py-20">
        <button class="absolute top-5 right-5 w-12 h-12 flex items-center justify-center rounded-full bg-eden-800/50 text-eden-300 hover:text-white hover:bg-eden-700/50 transition-all" id="mobile-menu-close" aria-label="Cerrar menú">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <div class="flex flex-col items-center gap-8">
          ${NAV_LINKS.map((link, i) => `
            <a href="${link.href}" class="mobile-nav-link text-3xl md:text-4xl font-display font-medium text-white hover:text-gold-400 transition-colors opacity-0" data-index="${i}">${link.label}</a>
          `).join('')}
          <div class="flex flex-col items-center gap-4 mt-6 pt-8 border-t border-eden-700/50 w-48 opacity-0 mobile-nav-link" data-index="${NAV_LINKS.length}">
            <button class="w-full py-3 text-base font-medium text-eden-300 hover:text-white transition-colors" aria-label="Iniciar sesión">Iniciar sesión</button>
            <button class="w-full py-3 text-base font-medium text-eden-950 bg-gold-400 rounded-lg hover:bg-gold-500 transition-colors" aria-label="Ver carrito">Carrito (0)</button>
          </div>
        </div>
      </div>
    </div>
  `

  const mobileBtn = header.querySelector('#mobile-menu-btn')
  const mobileMenu = header.querySelector('#mobile-menu-overlay')
  const mobileClose = header.querySelector('#mobile-menu-close')
  let isOpen = false
  let menuTimeline = null

  function openMenu() {
    if (isOpen) return
    isOpen = true
    document.body.style.overflow = 'hidden'
    mobileMenu.classList.remove('hidden')

    menuTimeline = gsap.timeline()
    menuTimeline.fromTo(mobileMenu, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' })
    menuTimeline.fromTo(
      mobileMenu.querySelectorAll('.mobile-nav-link'),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', stagger: 0.08 },
      '-=0.1'
    )

    mobileBtn.setAttribute('aria-expanded', 'true')
  }

  function closeMenu() {
    if (!isOpen) return
    isOpen = false
    document.body.style.overflow = ''

    if (menuTimeline) menuTimeline.kill()

    gsap.to(mobileMenu.querySelectorAll('.mobile-nav-link'), {
      opacity: 0, y: -10, duration: 0.2, ease: 'power2.in', stagger: 0.03
    })
    gsap.to(mobileMenu, {
      opacity: 0, duration: 0.3, delay: 0.1, ease: 'power2.in',
      onComplete: () => {
        mobileMenu.classList.add('hidden')
        gsap.set(mobileMenu.querySelectorAll('.mobile-nav-link'), { opacity: 0, y: 0 })
      }
    })

    mobileBtn.setAttribute('aria-expanded', 'false')
  }

  mobileBtn?.addEventListener('click', () => {
    isOpen ? closeMenu() : openMenu()
  })

  mobileClose?.addEventListener('click', closeMenu)

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu)
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closeMenu()
  })

  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) closeMenu()
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
