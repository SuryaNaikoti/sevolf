import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

async function renderPdfWithBrowser(pdfPath, outputDir, prefix) {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Load PDF directly using file:// URL or pdfjs viewer
  const fileUrl = 'file:///' + pdfPath.replace(/\\/g, '/');
  console.log(`Opening ${fileUrl} ...`);
  await page.goto(fileUrl);
  await page.waitForTimeout(2000);

  // Chrome's built-in PDF viewer renders pages into embed / shadow DOM
  // Let's take full screenshot or page screenshots
  await page.screenshot({ path: path.join(outputDir, `${prefix}_view.png`) });
  console.log(`Captured view: ${prefix}_view.png`);

  await browser.close();
}

async function run() {
  const a4Pdf = 'C:\\Users\\HP\\Downloads\\The_14-Day_Home_Reset_Kit_A4.pdf';
  const outDir = 'C:\\Users\\HP\\OneDrive\\Desktop\\Sevolf\\deliverables\\pdf_render_test';
  await renderPdfWithBrowser(a4Pdf, outDir, 'downloaded_a4');
}

run().catch(console.error);
