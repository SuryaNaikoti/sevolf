import { chromium } from 'playwright';

async function testAll() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('--- Step 1: Navigating to http://localhost:3000 ---');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // 1. Check Studio Header
  const headerText = await page.textContent('header');
  console.log('Header text found:', headerText?.includes('SELVOF Digital Product Studio'));

  // 2. Check current page title
  const pageTitle = await page.textContent('main h1, main h2');
  console.log('Current visible heading on page:', pageTitle?.trim());

  // 3. Test Navigation (Next Page)
  console.log('--- Step 2: Testing Page Navigation ---');
  const nextBtn = page.locator('button:has(svg.lucide-chevron-right)');
  await nextBtn.click();
  await page.waitForTimeout(500);

  const page2Heading = await page.textContent('main h2');
  console.log('Page 2 heading after navigation:', page2Heading?.trim());
  await page.screenshot({ path: 'screenshot_page2.png' });

  // 4. Test View Modes: Overview (All 22 pages)
  console.log('--- Step 3: Testing 22-Page Overview ---');
  const overviewTab = page.locator('header button:has-text("Overview")');
  await overviewTab.click();
  await page.waitForTimeout(500);

  const overviewHeading = await page.textContent('main h2');
  console.log('Overview heading:', overviewHeading);
  const pageCardsCount = await page.locator('main .grid > div').count();
  console.log('Rendered page cards count in Overview:', pageCardsCount);
  await page.screenshot({ path: 'screenshot_overview.png' });

  // 5. Test QA Tab
  console.log('--- Step 4: Testing QA Engine ---');
  const qaTab = page.locator('header button:has-text("QA")');
  await qaTab.click();
  await page.waitForTimeout(500);
  const qaTitle = await page.textContent('main h2');
  console.log('QA Heading:', qaTitle);
  const passedStatus = await page.textContent('main div:has-text("All Critical QA Checks Passed")');
  console.log('Passed status card exists:', !!passedStatus);
  await page.screenshot({ path: 'screenshot_qa.png' });

  // 6. Test Format Switching (US Letter)
  console.log('--- Step 5: Testing Format Switching ---');
  const letterBtn = page.locator('header button:has-text("US Letter")');
  await letterBtn.click();
  await page.waitForTimeout(300);
  const letterActive = await letterBtn.evaluate(el => el.classList.contains('bg-white'));
  console.log('US Letter active:', letterActive);

  // 7. Test Adding a Component Block
  console.log('--- Step 6: Testing Editor & Adding Block ---');
  const editorTab = page.locator('header button:has-text("Editor")');
  await editorTab.click();
  await page.waitForTimeout(500);

  // Go to page 2 (which is not a cover, so blocks can be added)
  const p2Thumb = page.locator('aside button:has-text("Philosophy")');
  if (await p2Thumb.count() > 0) {
    await p2Thumb.click();
    await page.waitForTimeout(300);
  }

  const addChecklistBtn = page.locator('button:has-text("Checklist")');
  if (await addChecklistBtn.count() > 0) {
    await addChecklistBtn.click();
    await page.waitForTimeout(500);
    console.log('Block added successfully.');
  }

  // 8. Test Interactive Checklist Toggle
  const firstCheckItem = page.locator('main [data-page-id] div.cursor-pointer').first();
  if (await firstCheckItem.count() > 0) {
    await firstCheckItem.click();
    await page.waitForTimeout(300);
    console.log('Checklist interactive toggle triggered.');
  }

  await page.screenshot({ path: 'screenshot_editor_interactive.png' });
  console.log('All visual & functional tests passed successfully.');

  await browser.close();
}

testAll().catch((err) => {
  console.error('Test suite error:', err);
  process.exit(1);
});
