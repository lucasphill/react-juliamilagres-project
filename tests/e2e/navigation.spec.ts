import { expect, test } from '@playwright/test'

test('menu móvel navega, fecha e move o foco', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const menu = page.locator('.menu-button')
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

test('navegação troca para menu antes de os links quebrarem', async ({ page }) => {
  await page.setViewportSize({ width: 1119, height: 800 })
  await page.goto('/')
  await expect(page.getByRole('button', { name: 'Abrir menu' })).toBeVisible()
  await expect(page.getByRole('navigation', { name: 'Navegação principal' })).toBeHidden()

  await page.setViewportSize({ width: 1120, height: 800 })
  await expect(page.getByRole('navigation', { name: 'Navegação principal' })).toBeVisible()
  await expect(page.locator('.menu-button')).toBeHidden()
  const layout = await page.evaluate(() => {
    const brand = document.querySelector('.brand-mark')!.getBoundingClientRect()
    const nav = document.querySelector('.desktop-nav')!.getBoundingClientRect()
    const links = [...document.querySelectorAll('.desktop-nav a')]
    return {
      gap: nav.left - brand.right,
      oneLine: links.every((link) => getComputedStyle(link).whiteSpace === 'nowrap'),
    }
  })
  expect(layout.gap).toBeGreaterThanOrEqual(12)
  expect(layout.oneLine).toBe(true)
})

test('menu intermediário abre com hover e fecha ao sair', async ({ page }) => {
  await page.setViewportSize({ width: 1000, height: 800 })
  await page.goto('/')
  const menu = page.locator('.menu-button')
  const navigation = page.getByRole('navigation', { name: 'Navegação móvel' })
  await menu.hover()
  await expect(menu).toHaveAttribute('aria-expanded', 'true')
  await navigation.hover()
  await expect(navigation).toBeVisible()
  await page.mouse.move(10, 400)
  await expect(menu).toHaveAttribute('aria-expanded', 'false')
  await expect(navigation).toBeHidden()
})
