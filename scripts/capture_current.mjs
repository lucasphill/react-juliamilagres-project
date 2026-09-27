import { chromium } from '@playwright/test';
import path from 'node:path';

const browser = await chromium.launch({ headless: true });
const targetDir = 'C:/Users/lucas/.gemini/antigravity/brain/d9a66429-b1e8-4a50-a1dc-1962efe32b6b/scratch';

for (const { name, width, height } of [
  { name: 'current-desktop-1440', width: 1440, height: 900 },
  { name: 'current-desktop-1024', width: 1024, height: 768 },
  { name: 'current-mobile-390', width: 390, height: 844 },
]) {
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto('http://127.0.0.1:5173/');
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${targetDir}/${name}-hero.png` });
  await page.evaluate(() => window.scrollTo(0, 700));
  await page.waitForTimeout(200);
  await page.screenshot({ path: `${targetDir}/${name}-about.png` });
  await page.close();
}

await browser.close();
console.log('Screenshots captured successfully');
