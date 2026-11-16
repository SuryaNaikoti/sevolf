import { chromium } from 'playwright';

async function checkH2cExecution() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Simulate what exportStudioToPdf is doing inside browser
  const canvasResults = await page.evaluate(async () => {
    // Check elements
    const staging = document.getElementById('export-staging-container');
    const el1 = staging.querySelector('[data-page-id="p-1"]');
    const el2 = staging.querySelector('[data-page-id="p-2"]');
    const el3 = staging.querySelector('[data-page-id="p-3"]');

    // Run window.html2canvas if available, or test how it gets captured
    return {
      el1Found: !!el1,
      el2Found: !!el2,
      el3Found: !!el3,
      el1HtmlLen: el1 ? el1.innerHTML.length : 0,
      el2HtmlLen: el2 ? el2.innerHTML.length : 0,
      el3HtmlLen: el3 ? el3.innerHTML.length : 0,
    };
  });

  console.log('Canvas Results:', canvasResults);
  await browser.close();
}

checkH2cExecution().catch(console.error);
