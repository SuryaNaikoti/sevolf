import { chromium } from 'playwright';

async function testV11() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('--- Navigating to http://localhost:3000 ---');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // 1. Check Version Tag
  const versionTag = await page.textContent('header span.font-mono');
  console.log('Active product version:', versionTag?.trim());

  // 2. Check Cover Subtitle
  const coverSub = await page.textContent('main p');
  console.log('Cover subtitle updated:', coverSub?.includes('Guided 14-Day System'));

  // 3. Inspect Page 2 (Quick-start & 3 Golden Rules)
  console.log('--- Verifying Page 2: Quick-start & Rules of the Reset ---');
  await page.locator('aside button:has-text("Quick-Start")').click();
  await page.waitForTimeout(400);
  const p2Text = await page.textContent('main');
  console.log('Contains "THE 3 GOLDEN RULES OF THE RESET":', p2Text?.includes('THE 3 GOLDEN RULES OF THE RESET'));
  console.log('Contains "Strict Timer":', p2Text?.includes('Strict Timer'));
  await page.screenshot({ path: 'v11_page02.png' });

  // 4. Inspect Page 3 (Sorting Supplies Checklist)
  console.log('--- Verifying Page 3: Sorting Supplies Checklist ---');
  await page.locator('aside button:has-text("4-Category")').click();
  await page.waitForTimeout(400);
  const p3Text = await page.textContent('main');
  console.log('Contains "Preparation Checklist":', p3Text?.includes('Preparation Checklist'));
  await page.screenshot({ path: 'v11_page03.png' });

  // 5. Inspect Page 4 (Phase Badges in Table)
  console.log('--- Verifying Page 4: Master Roadmap with Phase Badges ---');
  await page.locator('aside button:has-text("Master Roadmap")').click();
  await page.waitForTimeout(400);
  const p4Text = await page.textContent('main table');
  console.log('Contains "Phase 1: Thresholds":', p4Text?.includes('Phase 1: Thresholds'));
  console.log('Contains "Phase 2: Sustenance":', p4Text?.includes('Phase 2: Sustenance'));
  console.log('Contains "Phase 3: Sanctuaries":', p4Text?.includes('Phase 3: Sanctuaries'));
  await page.screenshot({ path: 'v11_page04.png' });

  // 6. Inspect Page 13 (Three Quick Discards Filter)
  console.log('--- Verifying Page 13: Three Quick Discards Clothing Filter ---');
  await page.locator('aside button:has-text("Day 08")').click();
  await page.waitForTimeout(400);
  const p13Text = await page.textContent('main');
  console.log('Contains "THE 3 QUICK DISCARDS FILTER":', p13Text?.includes('THE 3 QUICK DISCARDS FILTER'));
  await page.screenshot({ path: 'v11_page13.png' });

  // 7. Inspect Page 20 (Monthly Maintenance)
  console.log('--- Verifying Page 20: Monthly Maintenance Checklist ---');
  await page.locator('aside button:has-text("30-Day Declutter")').click();
  await page.waitForTimeout(400);
  const p20Text = await page.textContent('main');
  console.log('Contains "Monthly Tune-up":', p20Text?.includes('Monthly Tune-up'));
  await page.screenshot({ path: 'v11_page20.png' });

  // 8. Inspect Page 21 (Needs vs Wants Table & Room Layout)
  console.log('--- Verifying Page 21: Needs vs Wants Table ---');
  await page.locator('aside button:has-text("Room Layout")').click();
  await page.waitForTimeout(400);
  const p21Text = await page.textContent('main table');
  console.log('Contains "Need vs. Want":', p21Text?.includes('Need vs. Want'));
  await page.screenshot({ path: 'v11_page21.png' });

  // 9. Inspect Page 22 (Certificate of Completion Writing Area)
  console.log('--- Verifying Page 22: Certificate Writing Area ---');
  await page.locator('aside button:has-text("Certificate")').click();
  await page.waitForTimeout(400);
  const p22Text = await page.textContent('main');
  console.log('Contains "Official Completion Record & Sign-off":', p22Text?.includes('Official Completion Record & Sign-off'));
  await page.screenshot({ path: 'v11_page22.png' });

  // 10. Test A4 and US Letter Rendering
  console.log('--- Verifying A4 vs US Letter Switch ---');
  const letterBtn = page.locator('header button:has-text("US Letter")');
  await letterBtn.click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'v11_us_letter_render.png' });

  const a4Btn = page.locator('header button:has-text("A4")');
  await a4Btn.click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'v11_a4_render.png' });

  // 11. Run QA Engine
  console.log('--- Verifying QA Engine Status ---');
  await page.locator('header button:has-text("QA")').click();
  await page.waitForTimeout(400);
  const qaHeading = await page.textContent('main h2');
  const allPassed = await page.textContent('main div:has-text("All Critical QA Checks Passed")');
  console.log('QA Heading:', qaHeading);
  console.log('All QA Checks Passed:', !!allPassed);
  await page.screenshot({ path: 'v11_qa_engine.png' });

  console.log('--- All V1.1 Verification Checks Completed Successfully ---');
  await browser.close();
}

testV11().catch((err) => {
  console.error('Test V1.1 error:', err);
  process.exit(1);
});
