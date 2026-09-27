import { chromium } from '@playwright/test';
import path from 'node:path';
import fs from 'node:fs';

const orig = fs.readFileSync('src/assets/folhas/4.svg', 'base64');
const inv = fs.readFileSync('C:/Users/lucas/.gemini/antigravity/brain/d9a66429-b1e8-4a50-a1dc-1962efe32b6b/scratch/test_4_inverted.svg', 'base64');

const html = `
<!DOCTYPE html>
<html>
<body style="display:flex;gap:40px;padding:40px;background:#f0f4f0;font-family:sans-serif;">
  <div style="background:white;padding:20px;border-radius:8px;">
    <h2>Original 4.svg</h2>
    <img src="data:image/svg+xml;base64,${orig}" style="width:400px;border:1px solid #ddd;" />
  </div>
  <div style="background:white;padding:20px;border-radius:8px;">
    <h2>Inverted (Flipped Horizontally)</h2>
    <img src="data:image/svg+xml;base64,${inv}" style="width:400px;border:1px solid #ddd;" />
  </div>
</body>
</html>
`;

fs.writeFileSync('C:/Users/lucas/.gemini/antigravity/brain/d9a66429-b1e8-4a50-a1dc-1962efe32b6b/scratch/compare_4.html', html);

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1000, height: 600 } });
await page.goto('file:///' + path.resolve('C:/Users/lucas/.gemini/antigravity/brain/d9a66429-b1e8-4a50-a1dc-1962efe32b6b/scratch/compare_4.html').replace(/\\/g, '/'));
await page.screenshot({ path: 'C:/Users/lucas/.gemini/antigravity/brain/d9a66429-b1e8-4a50-a1dc-1962efe32b6b/scratch/compare_4.png' });
await browser.close();
console.log('compare_4.png written');
