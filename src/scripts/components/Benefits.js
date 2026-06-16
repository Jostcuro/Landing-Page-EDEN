import { benefits } from '../../data/products.js'
import { createHoverLift } from '../utils/gsap-animations.js'

export async function initBenefits() {
  const main = document.getElementById('main-content')
  if (!main) return

  const cardsHTML = benefits.map((b, i) => `
    <div class="card group p-8 text-center" data-aos="fade-up" data-aos-delay="${i * 100}">
      <div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-eden-100 text-eden-700 flex items-center justify-center transition-all duration-500 group-hover:bg-gold-400 group-hover:text-eden-950 group-hover:shadow-lg group-hover:shadow-gold-400/20">
        ${b.icon}
      </div>
      <h3 class="font-display text-xl font-medium text-eden-900 mb-3">${b.title}</h3>
      <p class="text-eden-600 leading-relaxed text-sm">${b.description}</p>
    </div>
  `).join('')

  const sectionHTML = `
    <section id="beneficios" class="section bg-white">
      <div class="container">
        <div class="text-center mb-14" data-gsap="fade-up">
          <p class="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">Por qué elegirnos</p>
          <h2 class="section-title">El cuidado que tu piel merece</h2>
          <p class="section-subtitle mx-auto">Creemos en la belleza natural. Cada loción está diseñada para nutrir, proteger y consentir tu piel con los mejores ingredientes de la naturaleza.</p>
        </div>
        <div class="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-4 lg:gap-6">
          ${cardsHTML}
        </div>
      </div>
    </section>
  `

  main.insertAdjacentHTML('beforeend', sectionHTML)

  main.querySelectorAll('#beneficios .card').forEach(card => createHoverLift(card))
}