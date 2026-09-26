const { chromium } = require('@playwright/test')

async function main() {
  const browser = await chromium.launch({ headless: true })
  try {
    for (const mobile of [false, true]) {
      const page = await browser.newPage({
        viewport: { width: mobile ? 375 : 1440, height: 800 },
        isMobile: mobile,
        hasTouch: mobile,
      })
      await page.goto('http://127.0.0.1:4173/')
      const button = page.getByRole('link', { name: 'Agende uma consulta' })
      const colors = async () => button.evaluate((node) => {
        const style = getComputedStyle(node)
        const text = getComputedStyle(node.querySelector('span'))
        return { background: style.backgroundColor, color: style.color, textColor: text.color, hover: node.matches(':hover') }
      })
      console.log(mobile ? 'mobile before' : 'desktop before', await colors())
      if (mobile) {
        await button.tap()
        console.log('mobile after tap', await colors())
      }
      await page.close()
    }
  } finally {
    await browser.close()
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
