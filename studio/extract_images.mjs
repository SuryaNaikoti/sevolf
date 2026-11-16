import fs from 'fs';
import { PDFDocument, PDFName, PDFRawStream } from 'pdf-lib';

async function extractStreams() {
  const p = 'C:\\Users\\HP\\Downloads\\The_14-Day_Home_Reset_Kit_A4.pdf';
  const doc = await PDFDocument.load(fs.readFileSync(p));
  const pages = doc.getPages();

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const resources = page.node.lookup(PDFName.of('Resources'));
    const xObject = resources ? resources.lookup(PDFName.of('XObject')) : null;
    let details = [];
    if (xObject) {
      for (const key of xObject.dict.keys()) {
        const stream = xObject.lookup(key);
        const bytes = stream.contents;
        details.push(`${key.asString()}: ${bytes.length} bytes`);
        if (i < 3) {
          fs.writeFileSync(`extracted_p${i + 1}_${key.asString().replace('/', '')}.jpg`, bytes);
        }
      }
    }
    console.log(`Page ${i + 1}: ${details.join(' | ')}`);
  }
}

extractStreams().catch(console.error);
