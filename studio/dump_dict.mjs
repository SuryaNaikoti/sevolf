import fs from 'fs';
import { PDFDocument, PDFName } from 'pdf-lib';

async function dumpPage1and2() {
  const p = 'C:\\Users\\HP\\Downloads\\The_14-Day_Home_Reset_Kit_A4.pdf';
  const doc = await PDFDocument.load(fs.readFileSync(p));
  const pages = doc.getPages();

  console.log('Page 1 keys in dict:', Array.from(pages[0].node.dict.keys()).map(k => k.asString()));
  console.log('Page 2 keys in dict:', Array.from(pages[1].node.dict.keys()).map(k => k.asString()));

  const res1 = pages[0].node.lookup(PDFName.of('Resources'));
  const xObj1 = res1.lookup(PDFName.of('XObject'));
  console.log('Page 1 XObject keys:', Array.from(xObj1.dict.keys()).map(k => k.asString()));

  const res2 = pages[1].node.lookup(PDFName.of('Resources'));
  const xObj2 = res2.lookup(PDFName.of('XObject'));
  console.log('Page 2 XObject keys:', Array.from(xObj2.dict.keys()).map(k => k.asString()));

  // Compare the actual objects
  const obj1 = xObj1.lookup(PDFName.of('I0'));
  const obj2 = xObj2.lookup(PDFName.of('I0'));
  console.log('Are Page 1 and Page 2 I0 identical reference?', obj1 === obj2);
}

dumpPage1and2().catch(console.error);
