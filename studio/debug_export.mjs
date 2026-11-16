import { chromium } from 'playwright';

async function checkAppExport() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  page.on('console', msg => console.log('[LOG]', msg.text()));

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Evaluate how exportStudioToPdf executes inside the browser
  const result = await page.evaluate(async () => {
    // Check elements with id page-sheet-*
    const sheets = document.querySelectorAll('[id^="page-sheet-"]');
    const ids = Array.from(sheets).map(s => s.id);
    return {
      totalSheetsInDom: sheets.length,
      first5Ids: ids.slice(0, 5),
    };
  });

  console.log('DOM Evaluation:', result);
  await browser.close();
}

checkAppExport().catch(console.error);
