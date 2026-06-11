import AOS from 'aos'
import 'aos/dist/aos.css'

export function initAOS() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    mirror: false,
    offset: 80,
    delay: 0,
    anchorPlacement: 'top-bottom',
    disable: prefersReduced ? 'mobile' : false,
    startEvent: 'DOMContentLoaded',
  })

  if (!prefersReduced) {
    document.addEventListener('lenis:scroll', () => AOS.refresh())
  }

  window.AOS = AOS
  return AOS
}