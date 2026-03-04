// Mobile menu toggle
const nav = document.querySelector('header nav')
const toggleBtn = document.querySelector('.menu-toggle')
const hamIcon = toggleBtn?.querySelector('.ham')

if (nav && toggleBtn && hamIcon) {
  const mqDesktop = window.matchMedia('(min-width: 768px)')

  function closeMenu() {
    nav.classList.remove('is-open')
    hamIcon.classList.remove('active')
  }

  toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('is-open')
    hamIcon.classList.toggle('active')
  })

  // When entering desktop, always close mobile menu state
  mqDesktop.addEventListener('change', () => {
    if (mqDesktop.matches) closeMenu()
  })
}
