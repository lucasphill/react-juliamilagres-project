import { expect, test } from '@playwright/test'

test('exibe os três passos literais do documento', async ({ page }) => {
  await page.goto('/#como-funciona')
  await expect(page.getByText('01.', { exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Primeiro contato:' })).toBeVisible()
  await expect(page.getByText(/Você pode iniciar nossa conversa através do canal de contato disponível/)).toBeVisible()
  await expect(page.getByText('02.', { exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Conversa inicial:' })).toBeVisible()
  await expect(page.getByText('03.', { exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Seu processo:' })).toBeVisible()
  await expect(page.getByText(/Uma vez iniciado, o processo terapêutico será construído em conjunto/)).toBeVisible()
})

test('exibe a chamada de agendamento com contato por WhatsApp', async ({ page }) => {
  await page.goto('/#agende-consulta')
  await expect(page.getByRole('heading', { name: 'Seu primeiro passo pode ser uma conversa.' })).toBeVisible()
  await expect(page.getByText(/Pronto\(a\) para dar o primeiro passo em direção ao seu bem-estar/)).toBeVisible()
  await expect(page.getByRole('link', { name: 'Entre em contato via WhatsApp' })).toHaveAttribute('href', 'https://wa.me/5531995509080')
})
