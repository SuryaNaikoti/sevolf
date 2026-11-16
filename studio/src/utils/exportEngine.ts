import jsPDF from 'jspdf';
import html2canvas from 'html2canvas-pro';
import { StudioProduct, PageFormat } from '@/types/studio';

export interface ExportOptions {
  format: PageFormat;
  includeCover: boolean;
  onProgress?: (progress: number, statusText: string) => void;
}

export async function exportStudioToPdf(
  product: StudioProduct,
  options: ExportOptions
): Promise<Blob> {
  const isA4 = options.format === 'a4';

  // Standard PDF dimensions in mm
  const pageWidth = isA4 ? 210 : 215.9;
  const pageHeight = isA4 ? 297 : 279.4;

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: isA4 ? 'a4' : 'letter',
    compress: true,
  });

  const filteredPages = product.pages.filter(
    (page) => options.includeCover || !page.isCover
  );

  const total = filteredPages.length;

  // Staging container where all 22 page DOM nodes live
  const stagingContainer = document.getElementById('export-staging-container');

  for (let i = 0; i < total; i++) {
    const page = filteredPages[i];
    options.onProgress?.(
      Math.round(((i + 1) / total) * 100),
      `Rendering Page ${i + 1} of ${total}: ${page.title}`
    );

    // Look for the specific page element strictly in the staging container
    let element: HTMLElement | null = null;
    if (stagingContainer) {
      element = stagingContainer.querySelector(`[data-page-id="${page.id}"]`);
    }
    if (!element) {
      element = document.querySelector(`main [data-page-id="${page.id}"]`);
    }

    if (element) {
      await document.fonts?.ready;

      // Exact pixel dimensions for A4 / Letter at 96 DPI
      const targetWidth = isA4 ? 794 : 816;
      const targetHeight = isA4 ? 1123 : 1056;

      // Create an isolated temporary off-screen rendering container
      // This guarantees html2canvas only clones and renders THIS individual page!
      const tempWrapper = document.createElement('div');
      tempWrapper.style.position = 'fixed';
      tempWrapper.style.left = '0px';
      tempWrapper.style.top = '0px';
      tempWrapper.style.width = isA4 ? '210mm' : '8.5in';
      tempWrapper.style.height = isA4 ? '297mm' : '11in';
      tempWrapper.style.zIndex = '-99999';
      tempWrapper.style.backgroundColor = '#FAF8F5';
      tempWrapper.style.overflow = 'hidden';

      const clonedPage = element.cloneNode(true) as HTMLElement;
      tempWrapper.appendChild(clonedPage);
      document.body.appendChild(tempWrapper);

      const canvas = await html2canvas(clonedPage, {
        scale: 2.0,
        useCORS: true,
        backgroundColor: '#FAF8F5',
        logging: false,
        width: targetWidth,
        height: targetHeight,
        windowWidth: targetWidth,
        windowHeight: targetHeight,
      });

      // Remove temp container from body
      document.body.removeChild(tempWrapper);

      const imgData = canvas.toDataURL('image/jpeg', 0.95);

      if (i > 0) {
        pdf.addPage(isA4 ? 'a4' : 'letter', 'portrait');
      }

      pdf.addImage(imgData, 'JPEG', 0, 0, pageWidth, pageHeight, undefined, 'FAST');
    }
  }

  // Set standard PDF document properties
  pdf.setProperties({
    title: product.title,
    subject: product.subtitle,
    author: 'SELVOF Digital Product Studio',
    keywords: 'SELVOF, Planner, Workbook, Reset Kit, Lifestyle',
    creator: 'SELVOF Studio Export Engine v1.3',
  });

  return pdf.output('blob');
}

export function downloadPdfBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
