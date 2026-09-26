import { MenuOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useEffect, useRef, useState } from 'react'
import type { SectionDefinition } from '../models/site'
import symbol from '../assets/icon.svg'
import baloon from '../assets/baloon.svg'
import { useSectionNavigation } from './useSectionNavigation'

export function SiteHeader({ sections }: { sections: SectionDefinition[] }) {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const navigate = useSectionNavigation()
  const hoverEnabled = () => matchMedia('(min-width: 620px) and (max-width: 1119px) and (hover: hover) and (pointer: fine)').matches
  const cancelHoverClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = null
  }
  const scheduleHoverClose = () => {
    if (!hoverEnabled()) return
    cancelHoverClose()
    closeTimer.current = setTimeout(() => setOpen(false), 180)
  }

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  useEffect(() => {
    const desktop = matchMedia('(min-width: 1120px)')
    const close = () => desktop.matches && setOpen(false)
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    desktop.addEventListener('change', close)
    addEventListener('keydown', escape)
    return () => {
      desktop.removeEventListener('change', close)
      removeEventListener('keydown', escape)
    }
  }, [open])

  const links = sections.map((section) => (
    <a key={section.id} href={`#${section.id}`} onClick={(event) => {
      setOpen(false)
      navigate(event)
    }}>{section.navLabel}</a>
  ))

  return <>
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <header className="site-header glass-panel" onPointerEnter={cancelHoverClose} onPointerLeave={scheduleHoverClose}>
      <a className="brand-mark" href="#inicio" onClick={navigate} aria-label="Júlia Milagres — voltar ao início">
        <picture className="brand-mark__picture">
          <source media="(max-width: 859px)" srcSet={baloon} type="image/svg+xml" />
          <img src={symbol} alt="" width="64" height="48" />
        </picture>
        <span><strong>Júlia Milagres</strong><small>Psicóloga Clínica<br />Integrativa</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Navegação principal">{links}</nav>
      <Button ref={buttonRef} className="menu-button" type="text" icon={<MenuOutlined />} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onPointerEnter={() => { if (hoverEnabled()) setOpen(true) }} onClick={() => setOpen((value) => !value)} />
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação móvel" aria-hidden={!open} inert={!open} data-open={open} onPointerEnter={cancelHoverClose}>{links}</nav>
    </header>
  </>
}
