import { PDFDocument, PDFName } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const DELIVERABLES_DIR = 'C:\\Users\\HP\\OneDrive\\Desktop\\Sevolf\\deliverables';

async function performStrictValidation() {
  console.log('=== STRICT 22-PAGE PDF VALIDATION ===\n');

  const files = [
    { name: 'A4', path: path.join(DELIVERABLES_DIR, 'Home-Reset-Kit-A4.pdf'), expectedW: 595.28, expectedH: 841.89 },
    { name: 'US Letter', path: path.join(DELIVERABLES_DIR, 'Home-Reset-Kit-US-Letter.pdf'), expectedW: 612, expectedH: 792 },
  ];

  for (const file of files) {
    console.log(`Checking ${file.name} PDF (${file.path})...`);
    const bytes = fs.readFileSync(file.path);
    const doc = await PDFDocument.load(bytes);
    const pages = doc.getPages();
    const totalPages = pages.length;

    console.log(`- Page Count: ${totalPages} (Expected: 22)`);
    if (totalPages !== 22) {
      throw new Error(`CRITICAL FAIL: ${file.name} page count is ${totalPages}, expected 22`);
    }

    const pageDrawCommands = [];

    for (let i = 0; i < totalPages; i++) {
      const page = pages[i];
      const { width, height } = page.getSize();
      const contents = page.node.lookup(PDFName.of('Contents'));
      const uncompressed = zlib.inflateSync(contents.contents).toString('utf-8');
      
      // Match the Do command (e.g. /I0 Do, /I1 Do ...)
      const match = uncompressed.match(/\/I(\d+)\s+Do/);
      const drawnImageIndex = match ? parseInt(match[1], 10) : null;

      // Extract image byte length from Resources
      const resources = page.node.lookup(PDFName.of('Resources'));
      const xObject = resources ? resources.lookup(PDFName.of('XObject')) : null;
      let drawnImageBytes = 0;
      if (xObject && match) {
        const stream = xObject.lookup(PDFName.of(`I${match[1]}`));
        drawnImageBytes = stream ? stream.contents.length : 0;
      }

      pageDrawCommands.push({
        pageIndex: i + 1,
        width,
        height,
        drawnImageName: match ? `/I${match[1]}` : 'none',
        drawnImageBytes,
      });
    }

    // Check unique image indices drawn per page
    const drawnImages = pageDrawCommands.map(p => p.drawnImageName);
    const uniqueDrawnImages = new Set(drawnImages);

    console.log(`- Dimensions check on all pages: ${pageDrawCommands.every(p => Math.abs(p.width - file.expectedW) < 1 && Math.abs(p.height - file.expectedH) < 1) ? 'PASS' : 'FAIL'}`);
    console.log(`- Unique image content per page: ${uniqueDrawnImages.size === 22 ? 'PASS (All 22 unique images drawn)' : `FAIL (${uniqueDrawnImages.size}/22 unique images)`}`);
    console.log(`- Non-empty page content: ${pageDrawCommands.every(p => p.drawnImageBytes > 50000) ? 'PASS (All pages contain rich graphics)' : 'FAIL'}`);
    console.log(`- File Size: ${(bytes.length / 1024 / 1024).toFixed(2)} MB\n`);
  }
}

performStrictValidation().catch(console.error);
