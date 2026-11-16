import { PDFDocument, PDFName } from 'pdf-lib';
import fs from 'fs';

async function checkPdfImageContent() {
  const p = 'C:\\Users\\HP\\Downloads\\The_14-Day_Home_Reset_Kit_A4.pdf';
  const doc = await PDFDocument.load(fs.readFileSync(p));
  const pages = doc.getPages();
  console.log(`Checking ${pages.length} pages in Downloaded PDF...`);

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const resources = page.node.lookup(PDFName.of('Resources'));
    const xObject = resources ? resources.lookup(PDFName.of('XObject')) : null;
    let imageNames = [];
    if (xObject) {
      imageNames = xObject.keys().map(k => k.asString());
    }
    console.log(`Page ${i + 1}: ${imageNames.length} image(s) -> ${imageNames.join(', ')}`);
  }
}
checkPdfImageContent().catch(console.error);
