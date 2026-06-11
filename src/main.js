import './styles/main.css'
import { initLenis } from './scripts/utils/lenis-setup.js'
import { initGSAP } from './scripts/utils/gsap-animations.js'
import { initAOS } from './scripts/utils/aos-setup.js'
import { initEmailJS } from './scripts/utils/emailjs-setup.js'
import { initNavbar } from './scripts/components/Navbar.js'
import { initHero } from './scripts/components/Hero.js'
import { initBenefits } from './scripts/components/Benefits.js'
import { initProductsGallery } from './scripts/components/ProductsGallery.js'
import { initTestimonials } from './scripts/components/Testimonials.js'
import { initHowItWorks } from './scripts/components/HowItWorks.js'
import { initFAQ } from './scripts/components/FAQ.js'
import { initNewsletter } from './scripts/components/Newsletter.js'
import { initFooter } from './scripts/components/Footer.js'
import { initScrollProgress } from './scripts/utils/scroll-progress.js'

async function bootstrap() {
  initLenis()
  initGSAP()
  initAOS()
  initEmailJS()
  initScrollProgress()

  await initNavbar()
  await initHero()
  await initBenefits()
  await initProductsGallery()
  await initTestimonials()
  await initHowItWorks()
  await initFAQ()
  await initNewsletter()
  await initFooter()

  document.documentElement.classList.add('loaded')
}

bootstrap()