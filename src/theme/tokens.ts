import type { ThemeConfig } from 'antd'
export const theme: ThemeConfig = {
  token: { colorPrimary: '#0d5668', colorText: '#243d43', colorBgContainer: '#fbfaf7', borderRadius: 24, fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 16, controlHeight: 48 },
  components: { Button: { primaryShadow: 'none', fontWeight: 500 }, Collapse: { headerBg: 'transparent', contentBg: 'transparent', headerPadding: '24px 0', contentPadding: '0 0 24px' } },
}
