import { chromium } from 'playwright';

async function checkHiddenDimensions() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  const info = await page.evaluate(() => {
    const hiddenContainer = document.querySelector('.no-print.hidden');
    const isHidden = hiddenContainer ? window.getComputedStyle(hiddenContainer).display : 'null';
    
    // Check page-sheet-p-2
    const el2 = document.getElementById('page-sheet-p-2');
    const el2Rect = el2 ? el2.getBoundingClientRect() : null;
    const el2Style = el2 ? window.getComputedStyle(el2).display : 'null';

    return {
      hiddenContainerDisplay: isHidden,
      el2Rect,
      el2Style,
    };
  });

  console.log('Hidden Elements Diagnostic:', info);
  await browser.close();
}

checkHiddenDimensions().catch(console.error);
