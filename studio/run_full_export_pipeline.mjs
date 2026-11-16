import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const DELIVERABLES_DIR = 'C:\\Users\\HP\\OneDrive\\Desktop\\Sevolf\\deliverables';
const A4_PREVIEW_DIR = path.join(DELIVERABLES_DIR, 'preview_images', 'a4');
const LETTER_PREVIEW_DIR = path.join(DELIVERABLES_DIR, 'preview_images', 'letter');

async function run() {
  console.log('=== Capturing Screenshots and Generating Exports with Generous Timeouts ===');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // 1. Export A4
  console.log('Exporting A4...');
  await page.locator('header button:has-text("A4")').click();
  await page.waitForTimeout(600);
  const [a4Download] = await Promise.all([
    page.waitForEvent('download', { timeout: 120000 }),
    page.locator('header button:has-text("Export PDF")').click(),
  ]);
  const a4Dest = path.join(DELIVERABLES_DIR, 'Home-Reset-Kit-A4.pdf');
  await a4Download.saveAs(a4Dest);
  console.log(`Saved A4 PDF to ${a4Dest}`);

  // 2. Export US Letter
  console.log('Exporting US Letter...');
  await page.locator('header button:has-text("US Letter")').click();
  await page.waitForTimeout(600);
  const [letterDownload] = await Promise.all([
    page.waitForEvent('download', { timeout: 120000 }),
    page.locator('header button:has-text("Export PDF")').click(),
  ]);
  const letterDest = path.join(DELIVERABLES_DIR, 'Home-Reset-Kit-US-Letter.pdf');
  await letterDownload.saveAs(letterDest);
  console.log(`Saved US Letter PDF to ${letterDest}`);

  // 3. Capture Previews for all 22 pages
  console.log('Capturing Previews...');
  await page.locator('header button:has-text("Editor")').click();
  await page.waitForTimeout(400);

  const asideButtons = await page.$$('aside button');
  for (let i = 0; i < asideButtons.length; i++) {
    await asideButtons[i].click();
    await page.waitForTimeout(300);

    const sheet = page.locator(`main div[data-page-number="${i + 1}"]`);
    const pageNumStr = String(i + 1).padStart(2, '0');

    // A4 preview
    await page.locator('header button:has-text("A4")').click();
    await page.waitForTimeout(200);
    await sheet.screenshot({ path: path.join(A4_PREVIEW_DIR, `page_${pageNumStr}.png`) });

    // Letter preview
    await page.locator('header button:has-text("US Letter")').click();
    await page.waitForTimeout(200);
    await sheet.screenshot({ path: path.join(LETTER_PREVIEW_DIR, `page_${pageNumStr}.png`) });
    console.log(`Captured preview images for Page ${i + 1}/22`);
  }

  await browser.close();
  console.log('All exports and screenshots completed.');
}

run().catch(console.error);
