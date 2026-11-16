import { PDFDocument, PDFName } from 'pdf-lib';
import fs from 'fs';

async function checkWhyDuplicate() {
  const file = 'C:\\Users\\HP\\OneDrive\\Desktop\\Sevolf\\deliverables\\Home-Reset-Kit-A4.pdf';
  const doc = await PDFDocument.load(fs.readFileSync(file));
  const pages = doc.getPages();

  console.log('Total pages:', pages.length);
  for (let i = 0; i < 5; i++) {
    const page = pages[i];
    const resources = page.node.lookup(PDFName.of('Resources'));
    const xObject = resources ? resources.lookup(PDFName.of('XObject')) : null;
    const contents = page.node.lookup(PDFName.of('Contents'));
    console.log(`Page ${i + 1}: Contents stream length:`, contents ? contents.contents.length : 'null');
    if (xObject) {
      for (const k of xObject.dict.keys()) {
        const stream = xObject.lookup(k);
        console.log(`  XObject ${k.asString()} length:`, stream.contents ? stream.contents.length : 'null');
      }
    }
  }
}

checkWhyDuplicate().catch(console.error);
