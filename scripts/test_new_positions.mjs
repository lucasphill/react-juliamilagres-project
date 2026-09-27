import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });
const targetDir = 'C:/Users/lucas/.gemini/antigravity/brain/d9a66429-b1e8-4a50-a1dc-1962efe32b6b/scratch';

// We want to test placing Leaf 2 at the bottom (bottom right)
// Let's see:
// What if on right side:
// - Leaf 1: top right corner (stem emerging from top-right corner)
// - Leaf 4 or 3: middle right (stem emerging from right edge)
// - Leaf 2: bottom right (stem emerging from bottom edge / bottom-right corner)
// Let's try layout configurations and screenshot them:

const configs = [
  {
    name: 'layout-A',
    css: `
      /* Leaf 1: top right corner, stem off-screen */
      .fixed-leaf--1 { width: clamp(140px, 19vh, 200px); height: clamp(200px, 27vh, 280px); top: clamp(-80px, -9vh, -40px); right: clamp(-70px, -5vw, -30px); transform: rotate(-14deg); }

      /* Leaf 4: upper-mid right, stem emerging from right edge (flipped horizontally) */
      .fixed-leaf--4 { width: clamp(180px, 24vh, 250px); height: clamp(125px, 17vh, 175px); top: 28vh; right: clamp(-80px, -5vw, -40px); transform: scaleX(-1) rotate(15deg); }

      /* Leaf 3: lower-mid right, stem emerging from right edge */
      .fixed-leaf--3 { width: clamp(70px, 10vh, 100px); height: clamp(155px, 22vh, 230px); top: 52vh; right: clamp(-30px, -2vw, -10px); transform: rotate(-12deg); }

      /* Leaf 2: bottom right, stem emerging from bottom edge! */
      .fixed-leaf--2 { width: clamp(120px, 17vh, 180px); height: clamp(180px, 25vh, 260px); bottom: clamp(-30px, -4vh, -10px); right: clamp(20px, 4vw, 60px); transform: rotate(8deg); }

      /* Left side */
      .fixed-leaf--5 { width: clamp(200px, 28vh, 300px); height: clamp(110px, 15vh, 160px); top: 12vh; left: clamp(-100px, -7vw, -50px); transform: rotate(-16deg); }
      .fixed-leaf--6 { width: clamp(185px, 25vh, 270px); height: clamp(130px, 18vh, 190px); bottom: 10vh; left: clamp(-90px, -6vw, -45px); transform: rotate(13deg); }
    `
  },
  {
    name: 'layout-B',
    css: `
      /* Leaf 1: top right corner */
      .fixed-leaf--1 { width: clamp(140px, 19vh, 200px); height: clamp(200px, 27vh, 280px); top: clamp(-80px, -9vh, -40px); right: clamp(-70px, -5vw, -30px); transform: rotate(-14deg); }

      /* Leaf 3: mid right, tilted so stem is off-screen to the right */
      .fixed-leaf--3 { width: clamp(75px, 11vh, 110px); height: clamp(170px, 24vh, 250px); top: 32vh; right: clamp(-35px, -2.5vw, -15px); transform: rotate(-25deg); }

      /* Leaf 4: lower right, stem from right edge */
      .fixed-leaf--4 { width: clamp(180px, 24vh, 250px); height: clamp(125px, 17vh, 175px); top: 56vh; right: clamp(-70px, -5vw, -35px); transform: scaleX(-1) rotate(10deg); }

      /* Leaf 2: bottom right corner, stem emerging from bottom edge */
      .fixed-leaf--2 { width: clamp(130px, 18vh, 190px); height: clamp(190px, 26vh, 270px); bottom: clamp(-35px, -5vh, -15px); right: clamp(10px, 2vw, 40px); transform: rotate(10deg); }

      /* Left side */
      .fixed-leaf--5 { width: clamp(200px, 28vh, 300px); height: clamp(110px, 15vh, 160px); top: 12vh; left: clamp(-100px, -7vw, -50px); transform: rotate(-16deg); }
      .fixed-leaf--6 { width: clamp(185px, 25vh, 270px); height: clamp(130px, 18vh, 190px); bottom: 10vh; left: clamp(-90px, -6vw, -45px); transform: rotate(13deg); }
    `
  },
  {
    name: 'layout-C',
    css: `
      /* Leaf 1: top right corner */
      .fixed-leaf--1 { width: clamp(150px, 20vh, 220px); height: clamp(210px, 29vh, 300px); top: clamp(-80px, -9vh, -40px); right: clamp(-70px, -5vw, -30px); transform: rotate(-14deg); }

      /* Leaf 4: mid right, stem emerging from right border */
      .fixed-leaf--4 { width: clamp(190px, 26vh, 270px); height: clamp(130px, 18vh, 190px); top: 40vh; right: clamp(-75px, -5vw, -40px); transform: scaleX(-1) rotate(12deg); }

      /* Leaf 2: bottom right, stem emerging straight from the bottom border */
      .fixed-leaf--2 { width: clamp(140px, 19vh, 200px); height: clamp(200px, 27vh, 280px); bottom: clamp(-40px, -5vh, -20px); right: clamp(-40px, -3vw, -10px); transform: rotate(-5deg); }

      /* Leaf 3: moved to left-mid (between 5 and 6), stem emerging from left border! */
      .fixed-leaf--3 { width: clamp(75px, 11vh, 110px); height: clamp(170px, 24vh, 250px); top: 42vh; left: clamp(-25px, -2vw, -10px); transform: rotate(15deg); }

      /* Left side */
      .fixed-leaf--5 { width: clamp(200px, 28vh, 300px); height: clamp(110px, 15vh, 160px); top: 10vh; left: clamp(-100px, -7vw, -50px); transform: rotate(-16deg); }
      .fixed-leaf--6 { width: clamp(185px, 25vh, 270px); height: clamp(130px, 18vh, 190px); bottom: 8vh; left: clamp(-90px, -6vw, -45px); transform: rotate(13deg); }
    `
  }
];

for (const cfg of configs) {
  const p = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto('http://127.0.0.1:5173/');
  await p.addStyleTag({ content: cfg.css });
  await p.waitForTimeout(300);
  await p.screenshot({ path: `${targetDir}/${cfg.name}-desktop-hero.png` });

  await p.evaluate(() => window.scrollTo(0, 700));
  await p.waitForTimeout(200);
  await p.screenshot({ path: `${targetDir}/${cfg.name}-desktop-about.png` });

  await p.close();
}

await browser.close();
console.log('Layout candidate screenshots saved');
