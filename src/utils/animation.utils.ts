export const scrambleText = (element: HTMLElement, duration: number = 1, newText?: string): Promise<void> => {
  return new Promise((resolve) => {
    const chars = '01*23456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const finalText = newText || element.textContent || ''
    const start = Date.now()

    const animate = () => {
      const progress = Math.min((Date.now() - start) / (duration * 1000), 1)
      const revealedCount = Math.floor(finalText.length * progress)

      element.textContent =
        finalText.slice(0, revealedCount) +
        Array(finalText.length - revealedCount)
          .fill(0)
          .map(() => chars[(Math.random() * chars.length) | 0])
          .join('')

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        element.textContent = finalText
        resolve()
      }
    }

    animate()
  })
}
