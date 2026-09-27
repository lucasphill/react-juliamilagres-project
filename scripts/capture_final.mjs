import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });
const targetDir = 'C:/Users/lucas/.gemini/antigravity/brain/d9a66429-b1e8-4a50-a1dc-1962efe32b6b/scratch';

for (const { name, width, height } of [
  { name: 'final-desktop-1440', width: 1440, height: 900 },
  { name: 'final-desktop-1024', width: 1024, height: 768 },
  { name: 'final-mobile-390', width: 390, height: 844 },
  { name: 'final-mobile-360', width: 360, height: 780 },
]) {
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto('http://127.0.0.1:5173/');
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${targetDir}/${name}-hero.png` });

  await page.evaluate(() => window.scrollTo(0, 700));
  await page.waitForTimeout(200);
  await page.screenshot({ path: `${targetDir}/${name}-about.png` });

  await page.close();
}

await browser.close();
console.log('Final screenshots saved');
