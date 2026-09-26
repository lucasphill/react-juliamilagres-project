import { expect, test } from '@playwright/test'

test('oferece contato pelo WhatsApp informado', async ({ page }) => {
  await page.goto('/#agende-consulta')
  const contact = page.getByRole('link', { name: 'Entre em contato via WhatsApp' })
  await expect(contact).toHaveAttribute('href', 'https://wa.me/5531995509080')
  await expect(contact).toHaveAttribute('target', '_blank')
  await expect(contact).toHaveCSS('background-color', 'rgb(37, 211, 102)')
  await expect(contact).toHaveCSS('color', 'rgb(7, 94, 84)')
  await expect(contact).toHaveCSS('justify-content', 'center')
  const heroButton = page.getByRole('link', { name: 'Agende uma consulta' })
  await expect(heroButton).toHaveCSS('background-color', 'rgb(37, 211, 102)')
  await expect(heroButton).toHaveCSS('justify-content', 'center')
})

test('perguntas abrem por teclado e preservam respostas no DOM', async ({ page }) => {
  await page.goto('/#perguntas-frequentes')
  const trigger = page.getByRole('button', { name: 'Como posso dar o primeiro passo?' })
  await trigger.focus()
  await page.keyboard.press('Enter')
  await expect(trigger).toHaveAttribute('aria-expanded', 'true')
  await expect(page.getByText(/O primeiro passo é sempre o mais importante/)).toBeVisible()
  expect(await page.locator('.ant-collapse-header').count()).toBe(9)
})
