import { chromium } from 'playwright';

async function testH2cCanvasOutput() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  const testResults = await page.evaluate(async () => {
    // Access html2canvas
    const el2 = document.getElementById('page-sheet-p-2');
    
    // We can import html2canvas-pro or use what's loaded
    // Or let's see what happens if we change the container style:
    const hiddenContainer = document.querySelector('.no-print.hidden');
    
    // If hiddenContainer has display:none, any child passed to html2canvas creates an empty/fallback canvas or fails!
    return {
      hiddenContainerClass: hiddenContainer.className,
      hiddenContainerComputedDisplay: window.getComputedStyle(hiddenContainer).display,
    };
  });

  console.log('Hidden Container Class & Computed Display:', testResults);
  await browser.close();
}

testH2cCanvasOutput().catch(console.error);
