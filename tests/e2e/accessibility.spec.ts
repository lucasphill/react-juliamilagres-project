import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

for (const width of [320, 390, 768, 1024, 1440]) {
  test(`sem overflow em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true)
  })
}

test('sem violações automáticas sérias e conteúdo disponível com movimento reduzido', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze()
  expect(results.violations.filter((violation) => ['serious', 'critical'].includes(violation.impact ?? ''))).toEqual([])
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(page.getByRole('heading', { name: /perguntando/i })).toBeVisible()
})
