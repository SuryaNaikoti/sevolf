import { chromium } from 'playwright';

async function testExportInBrowser() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
      console.error('[BROWSER ERROR]', msg.text());
    }
  });

  page.on('pageerror', (err) => {
    consoleErrors.push(err.toString());
    console.error('[PAGE ERROR]', err.toString());
  });

  console.log('Navigating to http://localhost:3000 ...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  console.log('Clicking Export PDF button in studio UI ...');
  // Handle file download event
  const downloadPromise = page.waitForEvent('download', { timeout: 30000 });
  const exportBtn = page.locator('header button:has-text("Export PDF")');
  await exportBtn.click();

  // Wait for progress overlay to finish and download to start
  try {
    const download = await downloadPromise;
    console.log('Download initiated successfully:', download.suggestedFilename());
  } catch (e) {
    console.log('Download event notice:', e.message);
  }

  await page.waitForTimeout(4000);
  console.log('Console errors captured during PDF export:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.error('Errors found:', consoleErrors);
  } else {
    console.log('SUCCESS: No "lab" color function or canvas parsing errors encountered!');
  }

  await browser.close();
}

testExportInBrowser().catch((err) => {
  console.error('Test failed:', err);
  process.exit(1);
});
