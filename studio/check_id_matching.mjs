import { chromium } from 'playwright';

async function checkIdMatching() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  const ids = await page.evaluate(() => {
    const list = [];
    for (let i = 1; i <= 22; i++) {
      const match = document.getElementById(`page-sheet-p-${i}`);
      list.push({
        requestedId: `page-sheet-p-${i}`,
        found: !!match,
        parentDisplay: match ? window.getComputedStyle(match.parentElement).display : null,
        isCover: match ? match.classList.contains('isCover') || match.innerText.includes('EDITION NO. 04') : false,
      });
    }
    return list;
  });

  console.log('ID Match Details:');
  console.log(ids.slice(0, 4));
  await browser.close();
}

checkIdMatching().catch(console.error);
