const fs = require('fs')
const { chromium } = require('@playwright/test')

async function main() {
  const browser = await chromium.launch({ headless: true })
  try {
    const page = await browser.newPage({
      viewport: { width: 410, height: 700 },
      deviceScaleFactor: 2,
    })
    const html = fs.readFileSync('work/mobile-bottom-navbar-preview.html', 'utf8')
    await page.setContent(html)
    await page.locator('.jm-bottom i').evaluateAll((elements) => {
      const glyphs = ['⌂', '♙', '♡', '◯']
      elements.forEach((element, index) => {
        element.textContent = glyphs[index]
        element.style.fontSize = '24px'
        element.style.fontStyle = 'normal'
        element.style.lineHeight = '21px'
      })
    })
    await page.screenshot({ path: 'work/mobile-bottom-navbar-preview.png', fullPage: true })
  } finally {
    await browser.close()
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
