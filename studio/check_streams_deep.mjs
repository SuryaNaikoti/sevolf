import { PDFDocument, PDFName, PDFRawStream } from 'pdf-lib';
import fs from 'fs';

async function checkPdfImageStreams() {
  const p = 'C:\\Users\\HP\\Downloads\\The_14-Day_Home_Reset_Kit_A4.pdf';
  const doc = await PDFDocument.load(fs.readFileSync(p));
  const pages = doc.getPages();

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const resources = page.node.lookup(PDFName.of('Resources'));
    const xObject = resources ? resources.lookup(PDFName.of('XObject')) : null;
    let details = [];
    if (xObject) {
      for (const key of xObject.keys()) {
        const stream = xObject.lookup(key);
        const dict = stream.dict;
        const length = dict.get(PDFName.of('Length')).asNumber();
        const width = dict.get(PDFName.of('Width')).asNumber();
        const height = dict.get(PDFName.of('Height')).asNumber();
        details.push(`${key.asString()}: ${width}x${height} (${length} bytes)`);
      }
    }
    console.log(`Page ${i + 1}: ${details.join(' | ')}`);
  }
}
checkPdfImageStreams().catch(console.error);
