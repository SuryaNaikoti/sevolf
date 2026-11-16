import { chromium } from 'playwright';

async function testH2cRenderData() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  page.on('console', msg => console.log('[LOG]', msg.text()));

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  const result = await page.evaluate(async () => {
    const staging = document.getElementById('export-staging-container');
    const el1 = staging.querySelector('[data-page-id="p-1"]');
    const el2 = staging.querySelector('[data-page-id="p-2"]');

    // Check computed styles of staging and el1, el2
    const sStyle = window.getComputedStyle(staging);
    const el1Style = window.getComputedStyle(el1);
    const el2Style = window.getComputedStyle(el2);

    return {
      staging: {
        position: sStyle.position,
        left: sStyle.left,
        top: sStyle.top,
        width: sStyle.width,
        opacity: sStyle.opacity,
        visibility: sStyle.visibility,
        display: sStyle.display,
      },
      el1: {
        display: el1Style.display,
        visibility: el1Style.visibility,
        width: el1Style.width,
        height: el1Style.height,
        offsetWidth: el1.offsetWidth,
        offsetHeight: el1.offsetHeight,
      },
      el2: {
        display: el2Style.display,
        visibility: el2Style.visibility,
        width: el2Style.width,
        height: el2Style.height,
        offsetWidth: el2.offsetWidth,
        offsetHeight: el2.offsetHeight,
      }
    };
  });

  console.log('Styles & Offsets:', result);
  await browser.close();
}

testH2cRenderData().catch(console.error);
