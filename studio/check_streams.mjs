import { PDFDocument } from 'pdf-lib';
import fs from 'fs';

async function checkStreams() {
  const file = 'C:\\Users\\HP\\OneDrive\\Desktop\\Sevolf\\deliverables\\Home-Reset-Kit-A4.pdf';
  const doc = await PDFDocument.load(fs.readFileSync(file));
  const pages = doc.getPages();
  console.log(`Total Pages: ${pages.length}`);

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const { width, height } = page.getSize();
    console.log(`Page ${i + 1}: ${width} x ${height}, node keys: ${Object.keys(page.node)}`);
  }
}
checkStreams().catch(console.error);
