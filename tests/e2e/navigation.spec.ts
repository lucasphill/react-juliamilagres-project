import { expect, test } from '@playwright/test'

test('menu móvel navega, fecha e move o foco', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const menu = page.getByRole('button', { name: 'Abrir menu' })
  await menu.click()
  await expect(menu).toHaveAttribute('aria-expanded', 'true')
  await page.getByRole('navigation', { name: 'Navegação móvel' }).getByRole('link', { name: 'Sobre mim' }).click()
  await expect(page).toHaveURL(/#sobre-mim$/)
  await expect(page.locator('#sobre-mim')).toBeFocused()
  await expect(page.getByRole('navigation', { name: 'Navegação móvel' })).toBeHidden()
})

test('Escape fecha o menu e devolve o foco', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const menu = page.getByRole('button', { name: 'Abrir menu' })
  await menu.click()
  await page.keyboard.press('Escape')
  await expect(menu).toBeFocused()
  await expect(menu).toHaveAttribute('aria-expanded', 'false')
})

test('hash direto expõe a seção sem encobrir o título', async ({ page }) => {
  await page.goto('/#perguntas-frequentes')
  await expect(page.locator('#perguntas-frequentes')).toBeFocused()
  const box = await page.getByRole('heading', { name: /talvez você/i }).boundingBox()
  expect(box?.y ?? 0).toBeGreaterThan(75)
})
