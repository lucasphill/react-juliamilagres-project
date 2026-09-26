import { expect, test } from '@playwright/test'

test('rodapé reúne identidade, navegação e contato', async ({ page }) => {
  await page.goto('/')
  const footer = page.locator('.site-footer')
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
