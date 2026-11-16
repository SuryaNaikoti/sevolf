import { PDFDocument } from 'pdf-lib';
import fs from 'fs';

async function checkDownloads() {
  const p1 = 'C:\\Users\\HP\\Downloads\\The_14-Day_Home_Reset_Kit_A4.pdf';
  if (fs.existsSync(p1)) {
    const bytes = fs.readFileSync(p1);
    const doc = await PDFDocument.load(bytes);
    console.log(`Downloads A4 Page Count: ${doc.getPageCount()}`);
  }
}
checkDownloads().catch(console.error);
