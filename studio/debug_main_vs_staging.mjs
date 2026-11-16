import { chromium } from 'playwright';

async function checkIndividualCanvases() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Evaluate html2canvas on staging element 1 vs element 2
  const evalOut = await page.evaluate(async () => {
    // In page.tsx or exportEngine, let's see what element html2canvas renders
    const staging = document.getElementById('export-staging-container');
    const el1 = staging.querySelector('[data-page-id="p-1"]');
    const el2 = staging.querySelector('[data-page-id="p-2"]');
    
    // Check if html2canvas clones the whole document
    // If the whole document has another element with data-page-id="p-1" in <main>!
    const inMain = document.querySelector('main [data-page-id="p-1"]');
    return {
      el1IsMain: inMain === el1,
      inMainExists: !!inMain,
    };
  });

  console.log('Main vs Staging:', evalOut);
  await browser.close();
}

checkIndividualCanvases().catch(console.error);
