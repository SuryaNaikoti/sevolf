import { chromium } from 'playwright';

async function debugCanvasUrls() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  page.on('console', msg => console.log('[LOG]', msg.text()));

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Let's run a test directly capturing page 1 and page 2 in the browser
  const data = await page.evaluate(async () => {
    const staging = document.getElementById('export-staging-container');
    const el1 = staging.querySelector('[data-page-id="p-1"]');
    const el2 = staging.querySelector('[data-page-id="p-2"]');

    // Check if html2canvas is attached or if we can see what exportStudioToPdf is doing
    return {
      el1Id: el1.id,
      el2Id: el2.id,
      el1Heading: el1.querySelector('h1, h2')?.innerText,
      el2Heading: el2.querySelector('h1, h2')?.innerText,
    };
  });

  console.log('Staging elements checked:', data);
  await browser.close();
}

debugCanvasUrls().catch(console.error);
