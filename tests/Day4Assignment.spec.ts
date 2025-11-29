import { chromium, test, webkit } from "@playwright/test";

test(`launch two separate browser instances using Playwright`,async ()=>{

   const browser = await chromium.launch({channel:"msedge"});
   const browserContext = await browser.newContext();
   const page = await browserContext.newPage();
    await page.goto(`https://www.redbus.in`);
    //we must use const to use the variables storing title and url
    console.log(page.title());
    console.log(page.url());

    const browser1 = await webkit.launch();
   const browserContext1 = await browser1.newContext();
   const page1 = await browserContext1.newPage();
    await page1.goto(`https://www.flipkart.com/`);
    await page.waitForTimeout(3000);
   const title2= page1.title();
   const url2= page1.url();
    console.log(title2);
    console.log(url2);

})