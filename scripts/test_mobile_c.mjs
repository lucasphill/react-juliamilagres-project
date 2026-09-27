import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });
const targetDir = 'C:/Users/lucas/.gemini/antigravity/brain/d9a66429-b1e8-4a50-a1dc-1962efe32b6b/scratch';

const mobileCss = `
  /* Leaf 1: top right corner */
  .fixed-leaf--1 { width: clamp(160px, 23vh, 230px); height: clamp(225px, 32vh, 326px); top: clamp(-90px, -10vh, -50px); right: clamp(-85px, -9vh, -45px); transform: rotate(-14deg); }

  /* Leaf 4: mid right, stem emerging from right border */
  .fixed-leaf--4 { width: clamp(190px, 27vh, 260px); height: clamp(130px, 19vh, 180px); top: 38vh; right: clamp(-80px, -9vh, -45px); transform: scaleX(-1) rotate(12deg); }

  /* Leaf 2: bottom right, stem emerging straight from bottom edge */
  .fixed-leaf--2 { width: clamp(140px, 20vh, 200px); height: clamp(200px, 28vh, 280px); bottom: clamp(-35px, -5vh, -15px); right: clamp(-30px, -4vh, -10px); transform: rotate(-5deg); }

  /* Leaf 3: mid left, stem emerging from left border */
  .fixed-leaf--3 { width: clamp(80px, 12vh, 115px); height: clamp(180px, 26vh, 260px); top: 38vh; left: clamp(-30px, -4vh, -15px); transform: rotate(15deg); }

  /* Leaf 5: top left */
  .fixed-leaf--5 { width: clamp(200px, 29vh, 270px); height: clamp(110px, 16vh, 150px); top: 10vh; left: clamp(-85px, -9vh, -45px); transform: rotate(-16deg); }

  /* Leaf 6: bottom left */
  .fixed-leaf--6 { width: clamp(200px, 29vh, 270px); height: clamp(140px, 20vh, 190px); bottom: 10vh; left: clamp(-85px, -9vh, -45px); transform: rotate(13deg); }
`;

for (const { width, height, name } of [
  { width: 390, height: 844, name: 'layout-C-mobile-390' },
  { width: 360, height: 780, name: 'layout-C-mobile-360' }
]) {
  const p = await browser.newPage({ viewport: { width, height } });
  await p.goto('http://127.0.0.1:5173/');
  await p.addStyleTag({ content: mobileCss });
  await p.waitForTimeout(300);
  await p.screenshot({ path: `${targetDir}/${name}-hero.png` });

  await p.evaluate(() => window.scrollTo(0, 700));
  await p.waitForTimeout(200);
  await p.screenshot({ path: `${targetDir}/${name}-about.png` });

  await p.close();
}

await browser.close();
console.log('Mobile screenshots saved');
