import { PDFDocument, PDFName } from 'pdf-lib';
import fs from 'fs';
import zlib from 'zlib';

async function checkDecompressed() {
  const file = 'C:\\Users\\HP\\OneDrive\\Desktop\\Sevolf\\deliverables\\Home-Reset-Kit-A4.pdf';
  const doc = await PDFDocument.load(fs.readFileSync(file));
  const pages = doc.getPages();

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const contents = page.node.lookup(PDFName.of('Contents'));
    const uncompressed = zlib.inflateSync(contents.contents);
    console.log(`Page ${i + 1} operators: ${uncompressed.toString('utf-8').trim()}`);
  }
}

checkDecompressed().catch(console.error);
