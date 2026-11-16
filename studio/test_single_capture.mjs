import { chromium } from 'playwright';

async function testSingleCapture() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  page.on('console', msg => console.log('[LOG]', msg.text()));

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Evaluate calling exportStudioToPdf and checking if each element gets passed
  const captureData = await page.evaluate(async () => {
    const staging = document.getElementById('export-staging-container');
    const el1 = staging.querySelector('[data-page-id="p-1"]');
    const el2 = staging.querySelector('[data-page-id="p-2"]');

    // Inspect if html2canvas has an issue with elements inside position:fixed or if element itself is being resolved correctly
    const q1 = staging.querySelector('[data-page-id="p-1"]');
    const q2 = staging.querySelector('[data-page-id="p-2"]');

    return {
      q1Text: q1.innerText.slice(0, 30),
      q2Text: q2.innerText.slice(0, 30),
      isSameElement: q1 === q2
    };
  });

  console.log('Capture test:', captureData);
  await browser.close();
}

testSingleCapture().catch(console.error);
