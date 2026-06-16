import { howItWorks } from '../../data/products.js'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export async function initHowItWorks() {
  const main = document.getElementById('main-content')
  if (!main) return

  const stepsHTML = howItWorks.map((s, i) => `
    <div class="relative flex flex-col items-center text-center group" data-aos="fade-up" data-aos-delay="${i * 150}">
      <div class="relative z-10 w-20 h-20 rounded-2xl bg-eden-100 text-eden-700 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-gold-400 group-hover:text-eden-950 group-hover:shadow-xl group-hover:shadow-gold-400/20 group-hover:scale-110">
        ${s.icon}
        <span class="absolute -top-2 -right-2 w-7 h-7 bg-gold-500 text-eden-950 text-xs font-bold rounded-full flex items-center justify-center shadow-md">${s.step}</span>
      </div>
      <h3 class="font-display text-xl font-medium text-eden-900 mb-2">${s.title}</h3>
      <p class="text-eden-600 text-sm leading-relaxed max-w-[220px]">${s.description}</p>
      ${i < howItWorks.length - 1 ? `
        <div class="hidden lg:block absolute top-10 left-[calc(50%+50px)] w-[calc(100%-100px)] h-px">
          <div class="w-full h-full bg-gradient-to-r from-eden-300 to-eden-200 relative">
            <svg class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-eden-300" fill="currentColor" viewBox="0 0 12 12"><path d="M0 0l6 6-6 6z"/></svg>
          </div>
        </div>
      ` : ''}
    </div>
  `).join('')

  const sectionHTML = `
    <section id="como-funciona" class="section">
      <div class="container">
        <div class="text-center mb-14" data-gsap="fade-up">
          <p class="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">Cómo funciona</p>
          <h2 class="section-title">Fácil como contar hasta 4</h2>
          <p class="section-subtitle mx-auto">Obtener tu loción favorita es un proceso simple y disfrutable de principio a fin.</p>
        </div>
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-6 max-w-4xl mx-auto">
          ${stepsHTML}
        </div>
      </div>
    </section>
  `

  main.insertAdjacentHTML('beforeend', sectionHTML)

  gsap.utils.toArray('#como-funciona .group').forEach((step, i) => {
    gsap.fromTo(step.querySelector('.relative.z-10'),
      { scale: 0.8, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)', delay: i * 0.15,
        scrollTrigger: { trigger: step, start: 'top 85%', toggleActions: 'play none none reverse' }
      }
    )
  })
}