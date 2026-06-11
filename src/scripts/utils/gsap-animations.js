import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initGSAP() {
  gsap.config({ nullTargetWarn: false, trialWarn: false })

  gsap.set('[data-gsap]', { opacity: 0 })

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    gsap.globalTimeline.timeScale(0)
    document.querySelectorAll('[data-gsap]').forEach(el => gsap.set(el, { opacity: 1 }))
    return
  }

  gsap.utils.toArray('[data-gsap="fade-up"]').forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        duration: 0.8, ease: 'power3.out',
        delay: i * 0.08,
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
      }
    )
  })

  gsap.utils.toArray('[data-gsap="fade-in"]').forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6, ease: 'power2.out',
        delay: i * 0.06,
        scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' }
      }
    )
  })

  gsap.utils.toArray('[data-gsap="scale-in"]').forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, scale: 0.92 },
      {
        opacity: 1, scale: 1,
        duration: 0.7, ease: 'back.out(1.5)',
        delay: i * 0.1,
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
      }
    )
  })

  gsap.utils.toArray('[data-gsap="slide-left"]').forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, x: -60 },
      {
        opacity: 1, x: 0,
        duration: 1, ease: 'power3.out',
        delay: i * 0.1,
        scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none reverse' }
      }
    )
  })

  gsap.utils.toArray('[data-gsap="slide-right"]').forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, x: 60 },
      {
        opacity: 1, x: 0,
        duration: 1, ease: 'power3.out',
        delay: i * 0.1,
        scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none reverse' }
      }
    )
  })
}

export function createHoverLift(element, options = {}) {
  const { y = -8, scale = 1.02, duration = 0.3, ease = 'power2.out' } = options
  let tween
  element.addEventListener('mouseenter', () => {
    tween = gsap.to(element, { y, scale, duration, ease, overwrite: true })
  })
  element.addEventListener('mouseleave', () => {
    gsap.to(element, { y: 0, scale: 1, duration, ease, overwrite: true })
  })
  return () => { element.removeEventListener('mouseenter', tween); element.removeEventListener('mouseleave', tween) }
}

export function createRipple(element) {
  element.addEventListener('click', (e) => {
    const rect = element.getBoundingClientRect()
    const ripple = document.createElement('span')
    ripple.className = 'absolute rounded-full bg-white/30 pointer-events-none animate-ripple'
    const size = Math.max(rect.width, rect.height)
    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`
    element.appendChild(ripple)
    setTimeout(() => ripple.remove(), 600)
  })
}

export function animateCounter(element, target, duration = 2000) {
  gsap.fromTo({ value: 0 }, { value: target }, {
    duration: duration / 1000,
    ease: 'power2.out',
    onUpdate: function() { element.textContent = Math.round(this.targets()[0].value) }
  })
}