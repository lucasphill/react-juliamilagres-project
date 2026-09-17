import { expect, test } from '@playwright/test'

test('apresenta nome, profissão e conteúdo institucional no celular', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1, name: /um espaço para se ouvir/i })).toBeVisible()
  await expect(page.getByText('Psicologia clínica', { exact: true }).first()).toBeVisible()
  await expect(page.getByRole('heading', { name: /escuta atenta/i })).toBeVisible()
  await expect(page.getByRole('heading', { name: /caminho construído/i })).toBeVisible()
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)
  expect(overflow).toBe(false)
})

test('identificação textual permanece mesmo sem carregar a logo', async ({ page }) => {
  await page.route(/\/assets\/(logo|icon)-.*\.png$/, (route) => route.abort())
  await page.goto('/')
  await expect(page.getByText('Julia Milagres', { exact: true }).first()).toBeVisible()
  await expect(page.getByText('Psicóloga clínica', { exact: true }).first()).toBeVisible()
})
