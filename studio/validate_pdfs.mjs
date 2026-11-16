import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

const DELIVERABLES_DIR = 'C:\\Users\\HP\\OneDrive\\Desktop\\Sevolf\\deliverables';

async function validatePdfs() {
  console.log('=== PDF Technical & Form Inspection ===');

  // Check A4
  const a4Bytes = fs.readFileSync(path.join(DELIVERABLES_DIR, 'Home-Reset-Kit-A4.pdf'));
  const a4Doc = await PDFDocument.load(a4Bytes);
  const a4Pages = a4Doc.getPages();
  const a4Form = a4Doc.getForm();
  const a4Fields = a4Form.getFields();

  console.log(`\n[A4 PDF Validation]`);
  console.log(`- Page Count: ${a4Pages.length} (Expected: 22)`);
  const a4Size = a4Pages[0].getSize();
  console.log(`- Dimensions (points): ${a4Size.width} x ${a4Size.height} (Standard A4: 595.28 x 841.89)`);
  console.log(`- AcroForm Interactive Fields Count: ${a4Fields.length}`);

  // Check US Letter
  const letterBytes = fs.readFileSync(path.join(DELIVERABLES_DIR, 'Home-Reset-Kit-US-Letter.pdf'));
  const letterDoc = await PDFDocument.load(letterBytes);
  const letterPages = letterDoc.getPages();
  const letterForm = letterDoc.getForm();
  const letterFields = letterForm.getFields();

  console.log(`\n[US Letter PDF Validation]`);
  console.log(`- Page Count: ${letterPages.length} (Expected: 22)`);
  const letterSize = letterPages[0].getSize();
  console.log(`- Dimensions (points): ${letterSize.width} x ${letterSize.height} (Standard US Letter: 612 x 792)`);
  console.log(`- AcroForm Interactive Fields Count: ${letterFields.length}`);
}

validatePdfs().catch(console.error);
