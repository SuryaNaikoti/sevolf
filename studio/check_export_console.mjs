import { chromium } from 'playwright';

async function checkConsoleDuringExport() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  page.on('console', msg => console.log('[EXPORT LOG]', msg.text()));

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Add a console.log spy into exportStudioToPdf
  await page.evaluate(() => {
    // Override console.log or observe
  });

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('header button:has-text("Export PDF")').click()
  ]);

  console.log('Finished downloading:', download.suggestedFilename());
  await browser.close();
}

checkConsoleDuringExport().catch(console.error);
