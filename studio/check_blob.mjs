import { chromium } from 'playwright';

async function checkPdfBlobCreation() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  page.on('console', msg => console.log('[LOG]', msg.text()));

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Hook into html2canvas or inspect the actual generated image data URLs
  const imgLengths = await page.evaluate(async () => {
    // In our exportStudioToPdf function, let's see what happens if we capture each
    const staging = document.getElementById('export-staging-container');
    const sheets = staging.querySelectorAll('.page-sheet');
    const results = [];
    for (const s of sheets) {
      results.push({
        id: s.id,
        pageId: s.getAttribute('data-page-id'),
        hasChildren: s.children.length,
      });
    }
    return results;
  });

  console.log('Sheets in staging:', imgLengths.length);
  console.log('Sample:', imgLengths.slice(0, 3));
  await browser.close();
}

checkPdfBlobCreation().catch(console.error);
