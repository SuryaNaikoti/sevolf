import { chromium } from 'playwright';

async function checkIdsInStaging() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  const result = await page.evaluate(() => {
    const staging = document.getElementById('export-staging-container');
    const sheets = staging.querySelectorAll('.page-sheet');
    return Array.from(sheets).map((s, idx) => ({
      index: idx + 1,
      id: s.id,
      dataPageId: s.getAttribute('data-page-id'),
      dataPageNum: s.getAttribute('data-page-number'),
      textSnippet: s.innerText.slice(0, 40).replace(/\n/g, ' '),
    }));
  });

  console.log('Staging sheets:', result);
  await browser.close();
}

checkIdsInStaging().catch(console.error);
