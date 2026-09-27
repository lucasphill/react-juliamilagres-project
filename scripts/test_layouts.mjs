import { chromium } from '@playwright/test';
import fs from 'node:fs';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

// Let's test a layout directly by injecting CSS or rendering
const leaf1 = fs.readFileSync('src/assets/folhas/1.svg', 'utf8');
const leaf2 = fs.readFileSync('src/assets/folhas/2.svg', 'utf8');
const leaf3 = fs.readFileSync('src/assets/folhas/3.svg', 'utf8');
const leaf4 = fs.readFileSync('src/assets/folhas/4.svg', 'utf8');
const leaf5 = fs.readFileSync('src/assets/folhas/5.svg', 'utf8');
const leaf6 = fs.readFileSync('src/assets/folhas/6.svg', 'utf8');

console.log('Testing layout possibilities...');
await browser.close();
