import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

export function GlassPanel<T extends ElementType = 'div'>({
  as,
  children,
  className = '',
  ...props
}: { as?: T; children: ReactNode; className?: string } & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>) {
  const Component = as ?? 'div'
  return <Component className={`glass-panel ${className}`} {...props}>{children}</Component>
}
