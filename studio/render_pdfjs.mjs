import fs from 'fs';
import path from 'path';
import { createCanvas } from 'canvas';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

async function renderPdfPages(pdfPath, outputDir, prefix) {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const loadingTask = pdfjsLib.getDocument({ data });
  const pdfDoc = await loadingTask.promise;
  console.log(`PDF loaded. Total Pages: ${pdfDoc.numPages}`);

  for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
    const page = await pdfDoc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.5 });

    const canvas = createCanvas(viewport.width, viewport.height);
    const context = canvas.getContext('2d');

    await page.render({
      canvasContext: context,
      viewport: viewport,
    }).promise;

    const outPath = path.join(outputDir, `${prefix}_page_${String(pageNum).padStart(2, '0')}.png`);
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outPath, buffer);
    console.log(`Rendered page ${pageNum} (${buffer.length} bytes) -> ${outPath}`);
  }
}

async function main() {
  const p = 'C:\\Users\\HP\\Downloads\\The_14-Day_Home_Reset_Kit_A4.pdf';
  const out = 'C:\\Users\\HP\\OneDrive\\Desktop\\Sevolf\\deliverables\\pdf_render_test';
  await renderPdfPages(p, out, 'downloaded_a4');
}

main().catch(console.error);
