import { chromium } from 'playwright';

async function checkH2cCall() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  page.on('console', msg => console.log('[LOG]', msg.text()));

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Test what html2canvas produces on element with opacity: 0 or left: -9999px
  const result = await page.evaluate(async () => {
    const staging = document.getElementById('export-staging-container');
    const el2 = staging.querySelector('[data-page-id="p-2"]');
    
    // In html2canvas, elements with opacity: 0 are rendered as TRANSPARENT or BLANK!
    // And elements with left: -9999px might be outside canvas clipping!
    const rect = el2.getBoundingClientRect();
    return {
      el2BoundingRect: rect,
      opacity: window.getComputedStyle(staging).opacity,
    };
  });

  console.log('Result:', result);
  await browser.close();
}

checkH2cCall().catch(console.error);
