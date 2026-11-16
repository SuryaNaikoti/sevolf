import { chromium } from 'playwright';
import fs from 'fs';

async function checkAppExportImages() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Evaluate each element inside hidden container
  const evalResults = await page.evaluate(async () => {
    const results = [];
    // Import html2canvas from window or run simple inspection
    for (let i = 1; i <= 22; i++) {
      const el = document.getElementById(`page-sheet-p-${i}`);
      if (!el) {
        results.push({ pageNum: i, found: false });
        continue;
      }
      // Check text content inside
      const text = el.innerText || el.textContent;
      const rect = el.getBoundingClientRect();
      const parent = el.parentElement;
      const parentStyle = window.getComputedStyle(parent);
      results.push({
        pageNum: i,
        found: true,
        textLen: text.trim().length,
        rectWidth: rect.width,
        rectHeight: rect.height,
        parentDisplay: parentStyle.display,
        scrollWidth: el.scrollWidth,
        scrollHeight: el.scrollHeight,
      });
    }
    return results;
  });

  console.log('Inspection of hidden elements:');
  console.log(evalResults.slice(0, 5));
  console.log(evalResults.slice(20));

  await browser.close();
}

checkAppExportImages().catch(console.error);
