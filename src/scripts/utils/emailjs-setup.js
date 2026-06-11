import emailjs from '@emailjs/browser'

const EMAILJS_CONFIG = {
  serviceId: 'service_eden_landing',
  templateId: 'template_newsletter',
  publicKey: 'YOUR_PUBLIC_KEY_HERE'
}

export function initEmailJS() {
  emailjs.init(EMAILJS_CONFIG.publicKey)
  window.EmailJS = { ...EMAILJS_CONFIG, send: emailjs.send }
  return emailjs
}

export async function sendNewsletterEmail(email) {
  if (!window.EmailJS) return { success: false, error: 'EmailJS not initialized' }

  try {
    const response = await window.EmailJS.send(
      window.EmailJS.serviceId,
      window.EmailJS.templateId,
      { email, timestamp: new Date().toISOString() },
      window.EmailJS.publicKey
    )
    return { success: true, response }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return { success: false, error: error.text || 'Error al enviar' }
  }
}

export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}