import { sendNewsletterEmail, validateEmail } from '../utils/emailjs-setup.js'
import { createRipple } from '../utils/gsap-animations.js'

export async function initNewsletter() {
  const main = document.getElementById('main-content')
  if (!main) return

  const sectionHTML = `
    <section id="newsletter" class="relative py-24 md:py-32 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1920&h=600&fit=crop&q=80"
             alt="" class="w-full h-full object-cover" loading="lazy">
        <div class="absolute inset-0 bg-eden-950/85 backdrop-blur-sm"></div>
      </div>

      <div class="container relative z-10">
        <div class="max-w-2xl mx-auto text-center" data-gsap="fade-up">
          <p class="text-gold-400 text-sm font-medium tracking-widest uppercase mb-4">Newsletter</p>
          <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight">
            Sé el primero en conocer
          </h2>
          <p class="text-eden-200/70 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Suscríbete para recibir ofertas exclusivas, lanzamientos anticipados y consejos de cuidado personal.
          </p>

          <form id="newsletter-form" class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" novalidate>
            <div class="flex-1 relative">
              <input type="email" id="newsletter-email" placeholder="Tu email"
                     class="input bg-white/10 border-white/20 text-white placeholder-white/40 focus:border-gold-400 focus:ring-gold-400/20 pr-10"
                     required aria-label="Dirección de email">
              <div class="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
            </div>
            <button type="submit" class="btn-gold relative overflow-hidden whitespace-nowrap" id="newsletter-btn">
              <span id="newsletter-btn-text">Suscribirme</span>
              <span id="newsletter-btn-loading" class="hidden">
                <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              </span>
            </button>
          </form>
          <p id="newsletter-message" class="mt-4 text-sm hidden"></p>
          <p class="text-xs text-white/40 mt-6">Sin spam. Puedes darte de baja en cualquier momento.</p>
        </div>
      </div>
    </section>
  `

  main.insertAdjacentHTML('beforeend', sectionHTML)

  const form = main.querySelector('#newsletter-form')
  const emailInput = main.querySelector('#newsletter-email')
  const btn = main.querySelector('#newsletter-btn')
  const btnText = main.querySelector('#newsletter-btn-text')
  const btnLoading = main.querySelector('#newsletter-btn-loading')
  const messageEl = main.querySelector('#newsletter-message')

  createRipple(btn)

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = emailInput.value.trim()

    if (!validateEmail(email)) {
      showMessage('Por favor, ingresa un email válido.', 'error')
      emailInput.focus()
      return
    }

    btn.disabled = true
    btnText.classList.add('hidden')
    btnLoading.classList.remove('hidden')

    try {
      const result = await sendNewsletterEmail(email)
      if (result.success) {
        showMessage('¡Gracias por suscribirte! Revisa tu email.', 'success')
        form.reset()
      } else {
        showMessage('Hubo un error. Intenta de nuevo.', 'error')
      }
    } catch {
      showMessage('Error de conexión. Intenta más tarde.', 'error')
    } finally {
      btn.disabled = false
      btnText.classList.remove('hidden')
      btnLoading.classList.add('hidden')
    }
  })

  function showMessage(text, type) {
    messageEl.textContent = text
    messageEl.className = `mt-4 text-sm transition-all duration-300 ${type === 'success' ? 'text-gold-400' : 'text-red-400'}`
    setTimeout(() => { messageEl.classList.add('hidden') }, 5000)
  }
}