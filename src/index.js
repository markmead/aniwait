export default function () {
  const elements = [...document.querySelectorAll('[data-aniwait]')]

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const element = entry.target
      const elementAnimations = element.getAnimations({ subtree: true })
      const hasAnimations = elementAnimations.length > 0

      if (entry.intersectionRatio > 0) {
        if (hasAnimations) {
          elementAnimations.forEach((animation) => animation.play())
        }

        if (element.dataset.aniwait === 'once') {
          observer.unobserve(element)
        }
      }

      if (entry.intersectionRatio === 0 && hasAnimations) {
        elementAnimations.forEach((animation) => animation.pause())
      }
    })
  })

  elements.forEach((element) => observer.observe(element))
}
