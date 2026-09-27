import { type CSSProperties, useEffect, useRef } from 'react'
import leaf1 from '../assets/folhas/1.svg'
import leaf2 from '../assets/folhas/2.svg'
import leaf3 from '../assets/folhas/3.svg'
import leaf4 from '../assets/folhas/4.svg'
import leaf5 from '../assets/folhas/5.svg'
import leaf6 from '../assets/folhas/6.svg'

const leaves = [
  { id: 1, side: 'right', source: leaf1, depth: 0.6 },
  { id: 2, side: 'right', source: leaf2, depth: 1.0 },
  { id: 3, side: 'left', source: leaf3, depth: 0.4 },
  { id: 4, side: 'right', source: leaf4, depth: 0.8 },
  { id: 5, side: 'left', source: leaf5, depth: 0.5 },
  { id: 6, side: 'left', source: leaf6, depth: 0.7 },
] as const

const MAX_SHIFT = 24 // px max displacement

export function FixedLeafBackground() {
  const refs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const isMobile = window.matchMedia('(max-width: 619px)').matches
    let rafId = 0

    const applyShift = (normX: number, normY: number) => {
      for (let i = 0; i < leaves.length; i++) {
        const el = refs.current[i]
        if (!el) continue
        const d = leaves[i].depth
        const x = normX * MAX_SHIFT * d
        const y = normY * MAX_SHIFT * d
        el.style.translate = `${x}px ${y}px`
      }
    }

    if (isMobile) {
      const onScroll = () => {
        rafId = requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight
          const normY = maxScroll > 0 ? (scrollY / maxScroll) * 2 - 1 : 0
          applyShift(0, normY)
        })
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(rafId) }
    } else {
      const onMouseMove = (e: MouseEvent) => {
        rafId = requestAnimationFrame(() => {
          const normX = (e.clientX / window.innerWidth) * 2 - 1
          const normY = (e.clientY / window.innerHeight) * 2 - 1
          applyShift(-normX, -normY)
        })
      }
      window.addEventListener('mousemove', onMouseMove, { passive: true })
      return () => { window.removeEventListener('mousemove', onMouseMove); cancelAnimationFrame(rafId) }
    }
  }, [])

  return <div className="fixed-leaf-background" aria-hidden="true">
    {leaves.map(({ id, side, source }, i) => <span
      key={id}
      ref={el => { refs.current[i] = el }}
      className={`fixed-leaf fixed-leaf--${id} fixed-leaf--${side}`}
      style={{ maskImage: `url("${source}")`, WebkitMaskImage: `url("${source}")` } satisfies CSSProperties}
    />)}
  </div>
}
