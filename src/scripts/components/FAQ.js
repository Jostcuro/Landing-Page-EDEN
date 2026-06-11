import { faq } from '../../data/products.js'
import { gsap } from 'gsap'

export async function initFAQ() {
  const main = document.getElementById('main-content')
  if (!main) return

  const itemsHTML = faq.map((item, i) => `
    <div class="faq-item border-b border-eden-200 last:border-0" data-gsap="fade-up" data-aos="fade-up" data-aos-delay="${i * 80}">
      <button class="faq-toggle w-full flex items-center justify-between py-6 text-left group" aria-expanded="false" aria-controls="faq-answer-${i}">
        <span class="font-display text-lg font-medium text-eden-900 group-hover:text-gold-600 transition-colors pr-4">${item.question}</span>
        <span class="flex-shrink-0 w-10 h-10 rounded-full bg-eden-100 flex items-center justify-center text-eden-600 transition-all duration-300 group-hover:bg-gold-400 group-hover:text-eden-950">
          <svg class="faq-icon w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
        </span>
      </button>
      <div id="faq-answer-${i}" class="faq-answer overflow-hidden" role="region" aria-labelledby="faq-heading-${i}" style="height: 0;">
        <p class="pb-6 text-eden-600 leading-relaxed text-sm pr-14">${item.answer}</p>
      </div>
    </div>
  `).join('')

  const sectionHTML = `
    <section id="faq" class="section bg-white">
      <div class="container max-w-3xl">
        <div class="text-center mb-14" data-gsap="fade-up">
          <p class="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">Preguntas frecuentes</p>
          <h2 class="section-title">¿Tienes dudas?</h2>
          <p class="section-subtitle mx-auto">Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios.</p>
        </div>
        <div class="divide-y divide-eden-200 rounded-2xl bg-eden-50/50 p-6 md:p-10">
          ${itemsHTML}
        </div>
      </div>
    </section>
  `

  main.insertAdjacentHTML('beforeend', sectionHTML)

  main.querySelectorAll('.faq-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const item = toggle.closest('.faq-item')
      const answer = item.querySelector('.faq-answer')
      const icon = toggle.querySelector('.faq-icon')
      const isOpen = toggle.getAttribute('aria-expanded') === 'true'

      main.querySelectorAll('.faq-toggle').forEach(otherToggle => {
        if (otherToggle !== toggle) {
          const otherItem = otherToggle.closest('.faq-item')
          const otherAnswer = otherItem.querySelector('.faq-answer')
          const otherIcon = otherToggle.querySelector('.faq-icon')
          otherToggle.setAttribute('aria-expanded', 'false')
          gsap.to(otherAnswer, { height: 0, duration: 0.3, ease: 'power2.inOut' })
          gsap.to(otherIcon, { rotation: 0, duration: 0.3 })
        }
      })

      if (isOpen) {
        toggle.setAttribute('aria-expanded', 'false')
        gsap.to(answer, { height: 0, duration: 0.3, ease: 'power2.inOut' })
        gsap.to(icon, { rotation: 0, duration: 0.3 })
      } else {
        toggle.setAttribute('aria-expanded', 'true')
        gsap.to(answer, { height: 'auto', duration: 0.4, ease: 'power2.out' })
        gsap.to(icon, { rotation: 45, duration: 0.3 })
      }
    })

    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        toggle.click()
      }
    })
  })
}