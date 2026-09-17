import { expect, test } from '@playwright/test'

test('prévia não cria link de agendamento fictício', async ({ page }) => {
  await page.goto('/#agende-consulta')
  await expect(page.getByRole('status')).toContainText('Canal em breve disponível')
  await expect(page.locator('#agende-consulta a')).toHaveCount(0)
  await expect(page.locator('#agende-consulta')).not.toContainText(/confirmad[oa]|reservad[oa]/i)
})

test('perguntas abrem por teclado e preservam respostas no DOM', async ({ page }) => {
  await page.goto('/#perguntas-frequentes')
  const trigger = page.getByRole('button', { name: 'Como dar o primeiro passo?' })
  await trigger.focus()
  await page.keyboard.press('Enter')
  await expect(trigger).toHaveAttribute('aria-expanded', 'true')
  await expect(page.getByText(/Você poderá usar o canal indicado/)).toBeVisible()
  expect(await page.locator('.ant-collapse-content-box').count()).toBeGreaterThanOrEqual(5)
})
