import { chromium } from 'playwright';

async function verifyStorefrontUI() {
  const browser = await chromium.launch({ headless: true });
  
  // Desktop
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000/store', { waitUntil: 'networkidle' });

  // Open checkout modal
  await page.locator('button:has-text("Get Your Home Reset Kit")').first().click();
  await page.waitForTimeout(400);

  // Enter invalid email to verify validation
  await page.fill('input[type="email"]', 'bad-email');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(300);

  // Enter valid email
  await page.fill('input[type="email"]', 'customer@selvof.com');
  await page.screenshot({ path: '../deliverables/phase2_desktop_checkout_ready.png' });
  console.log('Saved phase2_desktop_checkout_ready.png');

  // Mobile
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
  await mobilePage.goto('http://localhost:3000/store', { waitUntil: 'networkidle' });
  await mobilePage.locator('button:has-text("Get Kit • ₹299")').first().click();
  await mobilePage.waitForTimeout(400);
  await mobilePage.fill('input[type="email"]', 'mobile.customer@selvof.com');
  await mobilePage.screenshot({ path: '../deliverables/phase2_mobile_checkout_ready.png' });
  console.log('Saved phase2_mobile_checkout_ready.png');

  await browser.close();
}

verifyStorefrontUI().catch(err => console.error(err));
