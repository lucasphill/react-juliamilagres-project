import { useCallback, useEffect } from 'react'
import type { MouseEvent } from 'react'

function motionReduced() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function focusSection(hash: string, updateHistory = false) {
  const id = decodeURIComponent(hash.replace(/^#/, ''))
  if (!id) return false
  const target = document.getElementById(id)
  if (!target) return false
  if (updateHistory) history.pushState(null, '', `#${id}`)
  target.focus({ preventScroll: true })
  target.scrollIntoView({ behavior: motionReduced() ? 'auto' : 'smooth', block: 'start' })
  return true
}

export function useSectionNavigation() {
  useEffect(() => {
    const navigate = () => focusSection(location.hash)
    if (location.hash) requestAnimationFrame(navigate)
    addEventListener('popstate', navigate)
    addEventListener('hashchange', navigate)
    return () => {
      removeEventListener('popstate', navigate)
      removeEventListener('hashchange', navigate)
    }
  }, [])

  return useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    const hash = event.currentTarget.hash
    if (!hash) return
    event.preventDefault()
    focusSection(hash, location.hash !== hash)
  }, [])
}
