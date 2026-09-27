import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });
const targetDir = 'C:/Users/lucas/.gemini/antigravity/brain/d9a66429-b1e8-4a50-a1dc-1962efe32b6b/scratch';

for (const { name, width, height } of [
  { name: 'sections-desktop', width: 1440, height: 900 },
  { name: 'sections-mobile', width: 390, height: 844 },
]) {
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto('http://127.0.0.1:5173/');
  await page.waitForTimeout(500);

  for (const id of ['como-funciona', 'agende-consulta', 'perguntas-frequentes']) {
    const el = page.locator(`#${id}`);
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(150);
    await page.screenshot({ path: `${targetDir}/${name}-${id}.png` });
  }

  const footer = page.locator('.site-footer');
  await footer.scrollIntoViewIfNeeded();
  await page.waitForTimeout(150);
  await page.screenshot({ path: `${targetDir}/${name}-footer.png` });

  await page.close();
}

await browser.close();
console.log('Section screenshots captured');
