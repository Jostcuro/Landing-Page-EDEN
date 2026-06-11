export function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress')
  if (!progressBar) return

  let ticking = false

  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? scrollTop / docHeight : 0
    progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`
    ticking = false
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateProgress)
      ticking = true
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', updateProgress, { passive: true })

  updateProgress()

  return () => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', updateProgress)
  }
}