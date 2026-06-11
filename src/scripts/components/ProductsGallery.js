import Swiper from 'swiper'
import { Navigation, Pagination, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { products } from '../../data/products.js'
import { createHoverLift, createRipple } from '../utils/gsap-animations.js'

export async function initProductsGallery() {
  const main = document.getElementById('main-content')
  if (!main) return

  const slidesHTML = products.map(p => `
    <div class="swiper-slide">
      <div class="card group" data-gsap="scale-in">
        <div class="relative aspect-square overflow-hidden bg-eden-100">
          <img src="${p.image}" alt="${p.name} - loción EDEN" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy">
          ${p.badge ? `<span class="absolute top-4 left-4 px-3 py-1 bg-eden-900 text-eden-50 text-xs font-medium rounded-full">${p.badge}</span>` : ''}
        </div>
        <div class="p-6">
          <p class="text-xs text-gold-500 font-medium tracking-wider uppercase mb-1">${p.category}</p>
          <h3 class="font-display text-xl font-medium text-eden-900 mb-2">${p.name}</h3>
          <p class="text-eden-600 text-sm leading-relaxed mb-4 line-clamp-2">${p.description}</p>
          <div class="flex items-center justify-between">
            <p class="font-display text-xl font-medium text-eden-900">$${p.price.toFixed(2)}</p>
            <button class="btn-primary text-sm py-2 px-5 relative overflow-hidden add-to-cart-btn" data-product-id="${p.id}">
              Añadir
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('')

  const sectionHTML = `
    <section id="productos" class="section">
      <div class="container">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6" data-gsap="fade-up">
          <div>
            <p class="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">Nuestra Colección</p>
            <h2 class="section-title">Encuentra tu fragancia</h2>
            <p class="section-subtitle">Cada loción está cuidadosamente formulada con ingredientes naturales para ofrecer una experiencia sensorial única.</p>
          </div>
          <div class="flex gap-3">
            <button class="swiper-btn-prev w-12 h-12 rounded-full border border-eden-300 flex items-center justify-center text-eden-600 hover:bg-eden-900 hover:text-white hover:border-eden-900 transition-all" aria-label="Anterior">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button class="swiper-btn-next w-12 h-12 rounded-full border border-eden-300 flex items-center justify-center text-eden-600 hover:bg-eden-900 hover:text-white hover:border-eden-900 transition-all" aria-label="Siguiente">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        <div class="swiper products-swiper pb-16" data-gsap="fade-up">
          <div class="swiper-wrapper">
            ${slidesHTML}
          </div>
          <div class="swiper-pagination mt-8"></div>
        </div>
      </div>
    </section>
  `

  main.insertAdjacentHTML('beforeend', sectionHTML)

  new Swiper('.products-swiper', {
    modules: [Navigation, Pagination, FreeMode],
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: { enabled: true, momentum: true },
    navigation: { nextEl: '.swiper-btn-next', prevEl: '.swiper-btn-prev' },
    pagination: { el: '.swiper-pagination', clickable: true, dynamicBullets: true },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 24 },
      1024: { slidesPerView: 3, spaceBetween: 28 }
    }
  })

  main.querySelectorAll('.products-swiper .card').forEach(card => createHoverLift(card))
  main.querySelectorAll('.add-to-cart-btn').forEach(btn => createRipple(btn))

  main.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = this.dataset.productId
      const product = products.find(p => p.id === parseInt(id))
      if (product) showToast(`${product.name} añadido al carrito`)
    })
  })
}

function showToast(message) {
  const container = document.getElementById('toast-container')
  if (!container) return
  const toast = document.createElement('div')
  toast.className = 'pointer-events-auto px-5 py-3 bg-eden-900 text-white text-sm font-medium rounded-lg shadow-xl shadow-eden-900/20 animate-slide-up flex items-center gap-2'
  toast.innerHTML = `<svg class="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>${message}`
  container.appendChild(toast)
  setTimeout(() => {
    toast.classList.add('animate-fade-in', 'opacity-0', 'transition-opacity', 'duration-300')
    setTimeout(() => toast.remove(), 300)
  }, 2500)
}