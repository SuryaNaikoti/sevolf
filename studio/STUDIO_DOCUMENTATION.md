# SELVOF Digital Product Studio

An internal digital-product production studio for **SELVOF** designed to author, customize, validate, and export premium print-ready digital planners, checklists, worksheets, and lifestyle workbooks.

---

## 1. Tech Stack & Architecture

- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS with custom editorial design tokens
- **Typography**: Google Fonts — Cormorant Garamond (editorial serif headings) & Plus Jakarta Sans (clean, high-legibility body)
- **Icons**: Lucide React
- **Export Engine**: `jsPDF` + `html2canvas` for high-resolution vector and print page capture (300 DPI equivalent)

---

## 2. Core Modules Implemented

### 1. Product Workspace
- Title, subtitle, description, and category management.
- Dynamic paper dimensions: **A4 (210 × 297 mm)** and **US Letter (8.5 × 11 in)**.
- Version control history tracking with timestamped notes.

### 2. Page Editor & Inspector
- Individual page navigation and metadata control (eyebrows, running headers, running footers).
- Component block builder supporting:
  - Editorial cover headers
  - Section titles with category tags
  - Blockquotes with author credentials
  - Interactive checklists with toggleable states
  - Fillable prompt boxes & dashed handwriting guide lines
  - 14-day tracking grids
  - Categorized two-column sorting lists
  - Clean data tables with monospace accents
  - Notes & ruled writing areas

### 3. SELVOF Visual Design System
- **Ivory background**: `#FAF8F5`
- **Muted Sage accents**: `#8A9A86` / `#EBF0EA` / `#586855`
- **Charcoal typography**: `#232321` / `#575753`
- **Subtle borders**: `#E5DFD6`
- Symmetrical 20mm print margins and outer hairline frame.

### 4. Export & Print Engine
- One-click PDF generation for both A4 and US Letter formats.
- Native browser print mode with page-break CSS controls (`@media print`).
- Real-time compilation progress feedback bar.

### 5. Quality Assurance (QA) Engine
- Automated verification of the 22-page master kit requirement.
- Sequential page numbering check and duplicate detection.
- Component density checks to prevent vertical print margin overflow.

---

## 3. Initial Template: The 14-Day Home Reset Kit (22 Pages)

1. **Page 01**: Master Cover
2. **Page 02**: Philosophy of Intentional Space & Reset Intention
3. **Page 03**: The 4-Category Sort Protocol
4. **Page 04**: 14-Day Master Roadmap Overview
5. **Page 05**: Habit Tracker & Mid-Point Progress Check
6. **Page 06**: Day 01 — Entryway & Landing Strip
7. **Page 07**: Day 02 — Living Room Surfaces & Media
8. **Page 08**: Day 03 — Bookshelves & Paper Archive
9. **Page 09**: Day 04 — Kitchen Countertops & Prep Zones
10. **Page 10**: Day 05 — Pantry & Dry Goods Inventory
11. **Page 11**: Day 06 — Refrigerator & Freezer Deep Reset
12. **Page 12**: Day 07 — Cookware, Utensils & Under-Sink Cabinet
13. **Page 13**: Day 08 — Primary Wardrobe: The Edit
14. **Page 14**: Day 09 — Wardrobe Drawers & Vertical Folding
15. **Page 15**: Day 10 — Nightstands & Bedside Sanctuary
16. **Page 16**: Day 11 — Bathroom Vanity & Skincare Audit
17. **Page 17**: Day 12 — Shower, Towels & Linen Closet
18. **Page 18**: Day 13 — Home Office & Tech Cable Clutter
19. **Page 19**: Day 14 — Whole-Home Polish & Walkthrough
20. **Page 20**: 30-Day Declutter Maintenance Protocol
21. **Page 21**: Notes, Space Layout Ideas & Project Queue
22. **Page 22**: Official Certificate of Completion & Closing Manifesto

---

## 4. Running the Studio Locally

```bash
cd studio
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
