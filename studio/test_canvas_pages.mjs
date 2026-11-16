import { chromium } from 'playwright';
import { PDFDocument } from 'pdf-lib';

async function testExportCanvas() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  page.on('console', msg => console.log('[BROWSER]', msg.text()));

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('header button:has-text("Export PDF")').click()
  ]);

  const downloadPath = await download.path();
  const pdfBytes = await download.createReadStream();
  // Read all bytes
  const chunks = [];
  for await (const chunk of pdfBytes) {
    chunks.push(chunk);
  }
  const buffer = Buffer.concat(chunks);
  const pdfDoc = await PDFDocument.load(buffer);
  console.log(`Exported PDF Page Count: ${pdfDoc.getPageCount()}`);
  
  // Inspect each page image size
  const pages = pdfDoc.getPages();
  for (let i = 0; i < pages.length; i++) {
    console.log(`PDF Page ${i + 1} size:`, pages[i].getSize());
  }

  await browser.close();
}

testExportCanvas().catch(console.error);
