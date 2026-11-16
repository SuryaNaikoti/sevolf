import { PDFDocument, PDFName } from 'pdf-lib';
import fs from 'fs';

async function checkPageContentsInstructions() {
  const file = 'C:\\Users\\HP\\OneDrive\\Desktop\\Sevolf\\deliverables\\Home-Reset-Kit-A4.pdf';
  const doc = await PDFDocument.load(fs.readFileSync(file));
  const pages = doc.getPages();

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const contents = page.node.lookup(PDFName.of('Contents'));
    const text = Buffer.from(contents.contents).toString('utf-8');
    console.log(`Page ${i + 1} stream text: ${text.replace(/\r?\n/g, ' ')}`);
  }
}

checkPageContentsInstructions().catch(console.error);
