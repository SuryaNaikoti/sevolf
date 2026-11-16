import { chromium } from 'playwright';

async function checkActualExportCanvases() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Evaluate capturing page 1 vs page 2 with html2canvas-pro
  const res = await page.evaluate(async () => {
    // Check if html2canvas is accessible or test DOM
    const el1 = document.getElementById('page-sheet-p-1');
    const el2 = document.getElementById('page-sheet-p-2');

    return {
      el1Scroll: { w: el1.scrollWidth, h: el1.scrollHeight, clientH: el1.clientHeight },
      el2Scroll: { w: el2.scrollWidth, h: el2.scrollHeight, clientH: el2.clientHeight },
      el1ParentDisplay: window.getComputedStyle(el1.parentElement).display,
      el2ParentDisplay: window.getComputedStyle(el2.parentElement).display,
    };
  });

  console.log('DOM Element Diagnostics:', res);
  await browser.close();
}

checkActualExportCanvases().catch(console.error);
