import { expect, test } from '@playwright/test'

test('rodapé reúne identidade, navegação e contato', async ({ page }) => {
  await page.goto('/')
  const footer = page.locator('.site-footer')
  await expect(footer.locator('.footer-logo img')).toHaveAttribute('src', /icon\.svg|image\/svg\+xml/)
  await expect(footer.locator('.footer-logo img')).toHaveCSS('filter', 'brightness(0) invert(1)')
  await expect(footer.getByText('Julia Milagres', { exact: true })).toBeVisible()
  await expect(footer.getByText('Psicóloga clínica', { exact: true })).toBeVisible()
  await expect(footer.getByText('CRP-04 / 87783', { exact: true })).toBeVisible()
  await expect(footer.locator('.footer-nav a')).toHaveCount(5)
  await expect(footer.getByRole('link', { name: 'WhatsApp' })).toHaveAttribute('href', 'https://wa.me/5531995509080')
  await expect(footer.getByRole('link', { name: 'Instagram' })).toHaveAttribute('href', 'https://www.instagram.com/juliaamilagres.psi')
  await expect(footer.locator('.footer-social-link')).toHaveCount(2)
  await expect(footer.getByText('+55 31 99550-9080')).toHaveCount(0)
  await expect(footer.getByText('Este site oferece informações institucionais e não substitui atendimento profissional ou serviço de emergência.')).toBeVisible()
  await expect(footer.getByText('© 2026 Julia Milagres. Todos os direitos reservados.')).toBeVisible()
  await expect(footer.getByRole('link', { name: 'Desenvolvido por: Lucas Phill Soares Correa Pinto' })).toHaveAttribute('href', 'https://www.linkedin.com/in/lucasphillscp/')
})

test('ícone fica acima da identidade no terço esquerdo do rodapé desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')
  const positions = await page.evaluate(() => {
    const footer = document.querySelector('.footer-inner')!.getBoundingClientRect()
    const icon = document.querySelector('.footer-logo img')!.getBoundingClientRect()
    const identity = document.querySelector('.footer-identity')!.getBoundingClientRect()
    return {
      above: icon.bottom < identity.top,
      sameCenter: Math.abs(icon.left + icon.width / 2 - identity.left - identity.width / 2) < 2,
      leftThird: icon.left + icon.width / 2 < footer.left + footer.width / 3,
    }
  })
  expect(positions).toEqual({ above: true, sameCenter: true, leftThird: true })
})
