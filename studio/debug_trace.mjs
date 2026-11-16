import { chromium } from 'playwright';

async function checkH2cExecutionTrace() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  page.on('console', msg => console.log('[BROWSER]', msg.text()));

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Trigger export while capturing all events
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('header button:has-text("Export PDF")').click()
  ]);

  console.log('Download initiated:', download.suggestedFilename());
  await browser.close();
}

checkH2cExecutionTrace().catch(console.error);
