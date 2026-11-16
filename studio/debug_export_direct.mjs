import { chromium } from 'playwright';

async function testExportDirect() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  page.on('console', msg => console.log('[BROWSER CONSOLE]', msg.text()));

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Evaluate the export function and check the returned canvas or dataUrls
  const testData = await page.evaluate(async () => {
    // Look at exportStudioToPdf
    const staging = document.getElementById('export-staging-container');
    const el1 = staging.querySelector('[data-page-id="p-1"]');
    const el2 = staging.querySelector('[data-page-id="p-2"]');
    
    // Check if html2canvas is on window or importable
    // Let's see what happens if we querySelector in document
    const q1 = document.querySelector('[data-page-id="p-1"]');
    const q2 = document.querySelector('[data-page-id="p-2"]');
    
    return {
      el1IsMain: q1.closest('main') !== null,
      el2IsMain: q2.closest('main') !== null,
    };
  });

  console.log('Result:', testData);
  await browser.close();
}

testExportDirect().catch(console.error);
