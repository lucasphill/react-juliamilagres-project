import { chromium } from '@playwright/test';
import path from 'node:path';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1000, height: 900 } });
await page.goto('file:///' + path.resolve('C:/Users/lucas/.gemini/antigravity/brain/d9a66429-b1e8-4a50-a1dc-1962efe32b6b/scratch/leaf_preview.html').replace(/\\/g, '/'));
await page.screenshot({ path: 'C:/Users/lucas/.gemini/antigravity/brain/d9a66429-b1e8-4a50-a1dc-1962efe32b6b/scratch/leaves_overview.png', fullPage: true });
await browser.close();
console.log('leaves_overview.png saved');
