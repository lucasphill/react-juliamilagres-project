import type { ReactNode } from 'react'
import { ConfigProvider } from 'antd'
import { StyleProvider, createCache } from '@ant-design/cssinjs'
import { theme } from './tokens'
export function SiteProviders({ children, cache }: { children: ReactNode; cache?: ReturnType<typeof createCache> }) {
  return <StyleProvider cache={cache} layer><ConfigProvider theme={theme}>{children}</ConfigProvider></StyleProvider>
}
