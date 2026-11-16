export type PageFormat = 'a4' | 'letter';

export interface PageBlock {
  id: string;
  type: 
    | 'header'
    | 'quote'
    | 'section-title'
    | 'paragraph'
    | 'checklist'
    | 'prompt-box'
    | 'tracker-grid'
    | 'two-column-list'
    | 'table'
    | 'divider'
    | 'note-lines'
    | 'stats-row'
    | 'cover'
    // V1.2.0 & V1.2.1 Visual Components
    | 'three-rules-cards'
    | 'four-sort-cards'
    | 'visual-roadmap-timeline'
    | 'daily-action-panel'
    | 'room-planning-worksheet'
    | 'instructional-diagram';
  data: Record<string, any>;
}

export interface StudioPage {
  id: string;
  pageNumber: number;
  title: string;
  category?: string;
  headerText?: string;
  footerText?: string;
  blocks: PageBlock[];
  notes?: string;
  isCover?: boolean;
}

export interface ProductVersion {
  id: string;
  version: string;
  savedAt: string;
  note: string;
}

export interface StudioProduct {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  format: PageFormat;
  version: string;
  createdAt: string;
  updatedAt: string;
  pages: StudioPage[];
  versionsHistory: ProductVersion[];
}

export interface QAValidationResult {
  valid: boolean;
  warnings: string[];
  errors: string[];
  pageStats: {
    totalPages: number;
    blocksCount: number;
    checklistsCount: number;
    writingPromptsCount: number;
  };
}
