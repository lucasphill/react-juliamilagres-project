import { MenuOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useEffect, useRef, useState } from 'react'
import type { SectionDefinition } from '../models/site'
import symbol from '../assets/icon.png'
import { useSectionNavigation } from './useSectionNavigation'

export function SiteHeader({ sections }: { sections: SectionDefinition[] }) {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const navigate = useSectionNavigation()

  useEffect(() => {
    const desktop = matchMedia('(min-width: 860px)')
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
    <header className="site-header glass-panel">
      <a className="brand-mark" href="#inicio" onClick={navigate} aria-label="Julia Milagres — voltar ao início">
        <img src={symbol} alt="" width="64" height="48" />
        <span><strong>Julia Milagres</strong><small>Psicóloga clínica</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Navegação principal">{links}</nav>
      <Button ref={buttonRef} className="menu-button" type="text" icon={<MenuOutlined />} aria-expanded={open} aria-controls="mobile-navigation" aria-label="Abrir menu" onClick={() => setOpen((value) => !value)} />
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação móvel" hidden={!open}>{links}</nav>
    </header>
  </>
}
