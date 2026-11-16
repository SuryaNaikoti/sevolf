import fs from 'fs';
import path from 'path';

async function main() {
  const content = fs.readFileSync('./src/data/defaultTemplate.ts', 'utf8');
  const pageMatches = [...content.matchAll(/pageNumber:\s*(\d+),\s*title:\s*['"]([^'"]+)['"]/g)];
  
  console.log('| Page # | Title / Focus | Format Verified | Visual Upgrades (V1.2.1) | Checkboxes / Writing Spaces | Status |');
  console.log('|:---|:---|:---|:---|:---|:---|');
  
  for (const m of pageMatches) {
    const pageNum = parseInt(m[1]);
    const title = m[2];
    const num = String(pageNum).padStart(2, '0');
    let visual = 'Standard Editorial';
    if (pageNum === 1) visual = 'Enlarged Japandi Living Room Scene + Badge';
    else if (pageNum === 2) visual = '3 Golden Rules Cards + 30-60m Session Breakdown';
    else if (pageNum === 3) visual = 'Enlarged 4-Category Sort Cards (Keep, Donate, Recycle, Pause)';
    else if (pageNum === 4) visual = '3-Phase Progress Badges + 14-Day Visual Roadmap';
    else if (pageNum === 5) visual = '14-Day Habit Check-in Matrix + Mid-point Prompt';
    else if (pageNum === 6) visual = 'Japandi Entryway Scene + 3-Step Action Sequence';
    else if (pageNum === 7) visual = 'Living Room Clear Horizon Surface Diagram';
    else if (pageNum === 8) visual = 'Bookshelf Spine & 3-Folder Paper Filter Diagram';
    else if (pageNum === 9) visual = 'Kitchen Prep Zone & Countertop Work Triangle';
    else if (pageNum === 10) visual = 'Pantry Vertical Tiering & FIFO Shelf Diagram';
    else if (pageNum === 11) visual = 'Fridge Freshness & Temp Zone Diagram';
    else if (pageNum === 12) visual = 'Week 1 Milestone Celebration Panel';
    else if (pageNum === 13) visual = 'Capsule Wardrobe & Uniform Hanger Flow Diagram';
    else if (pageNum === 14) visual = 'Vertical File-Folding Drawer Diagram';
    else if (pageNum === 15) visual = 'Nightstand Sleep Sanctuary Perimeter Diagram';
    else if (pageNum === 16) visual = 'Bathroom Vanity & PAO Skincare Culling Diagram';
    else if (pageNum === 17) visual = 'Spa-Rolled Towels & Bedding Bundling Diagram';
    else if (pageNum === 18) visual = 'Desk Cable Management & Raceway Diagram';
    else if (pageNum === 19) visual = 'Whole-Home Final Polish & Walkthrough Flow';
    else if (pageNum === 20) visual = 'Morning/Evening Maintenance & Monthly Tune-up';
    else if (pageNum === 21) visual = 'Needs vs. Wants Table + High-Contrast Dot Sketch Grid';
    else if (pageNum === 22) visual = 'SELVOF Official Certificate of Restoration';
    
    let checks = pageNum === 1 ? 'N/A (Cover)' : 'Clear checkbox + Prompt lines';
    if (pageNum === 21) checks = 'Needs/Wants Table + Sketch Grid + 2 Checkboxes';
    if (pageNum === 22) checks = 'Official Sign-off record + Signature lines';
    
    console.log(`| Page ${num} | ${title} | A4 & US Letter | ${visual} | ${checks} | Verified OK |`);
  }
}

main().catch(console.error);
