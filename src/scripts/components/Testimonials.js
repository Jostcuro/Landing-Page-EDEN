import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { testimonials } from '../../data/products.js'

function renderStars(rating) {
  return Array.from({ length: 5 }, (_, i) =>
    i < rating
      ? `<svg class="w-4 h-4 text-gold-400 fill-gold-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`
      : `<svg class="w-4 h-4 text-eden-300" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-width="1.5" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`
  ).join('')
}

export async function initTestimonials() {
  const main = document.getElementById('main-content')
  if (!main) return

  const slidesHTML = testimonials.map(t => `
    <div class="swiper-slide h-auto">
      <div class="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
        <div class="flex items-center gap-4 mb-5">
          <img src="${t.avatar}" alt="Foto de ${t.name}" class="w-14 h-14 rounded-full object-cover ring-2 ring-eden-100" loading="lazy">
          <div>
            <h4 class="font-display font-medium text-eden-900">${t.name}</h4>
            <p class="text-xs text-eden-500">${t.location}</p>
          </div>
        </div>
        <div class="flex gap-0.5 mb-4">${renderStars(t.rating)}</div>
        <blockquote class="text-eden-700 leading-relaxed flex-1 text-sm italic">
          <svg class="w-8 h-8 text-gold-300/50 mb-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <p>${t.text}</p>
        </blockquote>
        <p class="text-xs text-eden-400 mt-4">${t.role}</p>
      </div>
    </div>
  `).join('')

  const sectionHTML = `
    <section id="testimonios" class="section bg-white">
      <div class="container">
        <div class="text-center mb-14" data-gsap="fade-up">
          <p class="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">Testimonios</p>
          <h2 class="section-title">Lo que dicen nuestros clientes</h2>
          <p class="section-subtitle mx-auto">Miles de personas ya confían en EDEN para el cuidado diario de su piel.</p>
        </div>
        <div class="swiper testimonials-swiper pb-4" data-gsap="fade-up">
          <div class="swiper-wrapper">
            ${slidesHTML}
          </div>
        </div>
      </div>
    </section>
  `

  main.insertAdjacentHTML('beforeend', sectionHTML)

  new Swiper('.testimonials-swiper', {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 24,
    autoplay: { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  })
}