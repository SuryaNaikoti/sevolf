import { chromium } from 'playwright';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

const DELIVERABLES_DIR = 'C:\\Users\\HP\\OneDrive\\Desktop\\Sevolf\\deliverables';
const A4_PREVIEW_DIR = path.join(DELIVERABLES_DIR, 'preview_images', 'a4');
const LETTER_PREVIEW_DIR = path.join(DELIVERABLES_DIR, 'preview_images', 'letter');

async function exportAndInspect() {
  console.log('--- Initializing Playwright PDF Generator ---');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to Studio
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Get total page count from DOM
  const pageItems = await page.$$('aside button');
  const totalPages = pageItems.length;
  console.log(`Detected ${totalPages} pages in studio.`);

  // 1. GENERATE A4 PAGES & SCREENSHOTS
  console.log('\n=== Generating A4 Deliverable & Page Previews ===');
  // Ensure A4 is selected
  await page.locator('header button:has-text("A4")').click();
  await page.waitForTimeout(400);

  // Switch to single editor view
  await page.locator('header button:has-text("Editor")').click();
  await page.waitForTimeout(300);

  const a4PdfDoc = await PDFDocument.create();

  for (let i = 0; i < totalPages; i++) {
    // Click page in sidebar
    await pageItems[i].click();
    await page.waitForTimeout(300);

    const sheet = page.locator(`main div[data-page-number="${i + 1}"]`);
    const pageNumStr = String(i + 1).padStart(2, '0');
    const imagePath = path.join(A4_PREVIEW_DIR, `page_${pageNumStr}.png`);

    // Capture crisp PNG preview of the sheet
    const pngBuffer = await sheet.screenshot({ path: imagePath, scale: 'device' });
    console.log(`A4 Page ${i + 1}/22 rendered -> ${imagePath}`);

    // Embed into PDFDoc (A4 standard: 595.28 x 841.89 points)
    const pngImage = await a4PdfDoc.embedPng(pngBuffer);
    const pdfPage = a4PdfDoc.addPage([595.28, 841.89]);
    pdfPage.drawImage(pngImage, {
      x: 0,
      y: 0,
      width: 595.28,
      height: 841.89,
    });
  }

  const a4PdfBytes = await a4PdfDoc.save();
  const a4PdfPath = path.join(DELIVERABLES_DIR, 'Home-Reset-Kit-A4.pdf');
  fs.writeFileSync(a4PdfPath, a4PdfBytes);
  console.log(`Saved A4 Master PDF: ${a4PdfPath} (${(a4PdfBytes.length / 1024 / 1024).toFixed(2)} MB)`);

  // 2. GENERATE US LETTER PAGES & SCREENSHOTS
  console.log('\n=== Generating US Letter Deliverable & Page Previews ===');
  // Select US Letter in header
  await page.locator('header button:has-text("US Letter")').click();
  await page.waitForTimeout(400);

  const letterPdfDoc = await PDFDocument.create();

  for (let i = 0; i < totalPages; i++) {
    await pageItems[i].click();
    await page.waitForTimeout(300);

    const sheet = page.locator(`main div[data-page-number="${i + 1}"]`);
    const pageNumStr = String(i + 1).padStart(2, '0');
    const imagePath = path.join(LETTER_PREVIEW_DIR, `page_${pageNumStr}.png`);

    const pngBuffer = await sheet.screenshot({ path: imagePath, scale: 'device' });
    console.log(`US Letter Page ${i + 1}/22 rendered -> ${imagePath}`);

    // Embed into PDFDoc (US Letter: 612 x 792 points)
    const pngImage = await letterPdfDoc.embedPng(pngBuffer);
    const pdfPage = letterPdfDoc.addPage([612, 792]);
    pdfPage.drawImage(pngImage, {
      x: 0,
      y: 0,
      width: 612,
      height: 792,
    });
  }

  const letterPdfBytes = await letterPdfDoc.save();
  const letterPdfPath = path.join(DELIVERABLES_DIR, 'Home-Reset-Kit-US-Letter.pdf');
  fs.writeFileSync(letterPdfPath, letterPdfBytes);
  console.log(`Saved US Letter Master PDF: ${letterPdfPath} (${(letterPdfBytes.length / 1024 / 1024).toFixed(2)} MB)`);

  // Copy Cover Image and 2 Featured Previews to Deliverables root
  fs.copyFileSync(
    path.join(A4_PREVIEW_DIR, 'page_01.png'),
    path.join(DELIVERABLES_DIR, 'product_cover.png')
  );
  fs.copyFileSync(
    path.join(A4_PREVIEW_DIR, 'page_04.png'),
    path.join(DELIVERABLES_DIR, 'product_preview_roadmap.png')
  );
  fs.copyFileSync(
    path.join(A4_PREVIEW_DIR, 'page_06.png'),
    path.join(DELIVERABLES_DIR, 'product_preview_daily_page.png')
  );

  console.log('\nDeliverables and high-res preview assets created successfully.');
  await browser.close();
}

exportAndInspect().catch((err) => {
  console.error('Error during PDF production:', err);
  process.exit(1);
});
