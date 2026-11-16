import { StudioProduct, QAValidationResult } from '@/types/studio';

export function runProductQA(product: StudioProduct): QAValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  let blocksCount = 0;
  let checklistsCount = 0;
  let writingPromptsCount = 0;

  const totalPages = product.pages.length;

  if (totalPages !== 22) {
    warnings.push(`Current template has ${totalPages} pages. SELVOF specification designates standard 22-page master kit.`);
  }

  // Check unique page numbers and sequential order
  const pageNumbers = product.pages.map((p) => p.pageNumber);
  const duplicates = pageNumbers.filter((item, index) => pageNumbers.indexOf(item) !== index);
  if (duplicates.length > 0) {
    errors.push(`Duplicate page numbers found: ${duplicates.join(', ')}`);
  }

  product.pages.forEach((p, idx) => {
    if (!p.title || p.title.trim() === '') {
      warnings.push(`Page #${p.pageNumber || idx + 1} has an empty title.`);
    }

    if (!p.blocks || p.blocks.length === 0) {
      warnings.push(`Page #${p.pageNumber} has zero content blocks.`);
    }

    p.blocks.forEach((b) => {
      blocksCount++;
      if (b.type === 'checklist') checklistsCount++;
      if (b.type === 'prompt-box' || b.type === 'note-lines') writingPromptsCount++;

      // Check density to prevent page overflow
      if (b.type === 'checklist' && b.data.items?.length > 7) {
        warnings.push(`Page #${p.pageNumber} checklist has ${b.data.items.length} items; may cause vertical crowding on print margin.`);
      }
    });
  });

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    pageStats: {
      totalPages,
      blocksCount,
      checklistsCount,
      writingPromptsCount,
    },
  };
}
