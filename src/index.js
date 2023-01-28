export default function () {
  const elements = [...document.querySelectorAll('[data-aniwait]')]

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('aniwait-visible')

        if (entry.target.dataset.aniwait === 'once') {
          observer.unobserve(entry.target)
        }
      }

      if (entry.intersectionRatio === 0) {
        if (entry.target.classList.contains('aniwait-visible')) {
          entry.target.classList.remove('aniwait-visible')
        }
      }
    })
  })

  elements.forEach((element) => observer.observe(element))
}
