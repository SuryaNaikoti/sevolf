import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const consoleLogs = [];
  const errors = [];

  page.on('console', (msg) => {
    const text = `[CONSOLE ${msg.type().toUpperCase()}] ${msg.text()}`;
    consoleLogs.push(text);
    console.log(text);
  });

  page.on('pageerror', (err) => {
    const text = `[PAGE ERROR] ${err.toString()}`;
    errors.push(text);
    console.error(text);
  });

  console.log('Navigating to http://localhost:3000 ...');
  try {
    const response = await page.goto('http://localhost:3000', {
      waitUntil: 'networkidle',
      timeout: 15000,
    });
    console.log(`HTTP Status: ${response?.status()}`);
  } catch (e) {
    console.log(`Navigation error or timeout: ${e}`);
  }

  // Check DOM
  const title = await page.title();
  console.log('Page Title:', title);

  const bodyHtml = await page.evaluate(() => document.body.innerHTML);
  console.log('Body InnerHTML length:', bodyHtml.length);
  console.log('Body preview:', bodyHtml.slice(0, 300));

  await page.screenshot({ path: 'screenshot_test.png', fullPage: true });
  console.log('Screenshot saved to screenshot_test.png');

  await browser.close();
}

run().catch((err) => {
  console.error('Test script failed:', err);
  process.exit(1);
});
