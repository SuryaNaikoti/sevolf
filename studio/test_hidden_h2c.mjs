import { chromium } from 'playwright';

async function testHtml2canvasOnHidden() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  const result = await page.evaluate(async () => {
    // Dynamically test html2canvas on p-1 vs p-2
    const el1 = document.getElementById('page-sheet-p-1');
    const el2 = document.getElementById('page-sheet-p-2');

    return {
      el1Text: el1 ? el1.innerText.slice(0, 50) : null,
      el2Text: el2 ? el2.innerText.slice(0, 50) : null,
      el2OffsetWidth: el2 ? el2.offsetWidth : null,
      el2ClientWidth: el2 ? el2.clientWidth : null,
      el2ScrollWidth: el2 ? el2.scrollWidth : null,
    };
  });

  console.log('Result:', result);
  await browser.close();
}

testHtml2canvasOnHidden().catch(console.error);
