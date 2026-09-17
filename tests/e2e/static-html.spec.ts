import { expect, test } from '@playwright/test'

test('resposta inicial contém conteúdo, FAQs e metadados de prévia', async ({ request }) => {
  const response = await request.get('/')
  const html = await response.text()
  expect(response.ok()).toBe(true)
  expect(html).toContain('Um espaço para')
  expect(html).toContain('Como dar o primeiro passo?')
  expect(html).toContain('data-antd-ssr')
  expect(html).toContain('noindex, nofollow')
  expect(html).not.toContain('<!--app-html-->')
})

test('conteúdo essencial permanece legível sem JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false })
  const page = await context.newPage()
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(page.getByText(/Você poderá usar o canal indicado/)).toBeVisible()
  await context.close()
})

test('hidrata sem alertas do React', async ({ page }) => {
  const errors: string[] = []
  page.on('console', (message) => message.type() === 'error' && errors.push(message.text()))
  await page.goto('/')
  await page.waitForLoadState('networkidle')
  expect(errors.filter((message) => /hydration|did not match|server rendered/i.test(message))).toEqual([])
})
