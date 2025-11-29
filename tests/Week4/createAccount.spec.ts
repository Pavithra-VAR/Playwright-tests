// Assignment:Create a new Account

import { test, chromium } from "@playwright/test";
test ('Create a new Account', async () => {

const browser = await chromium.launch ({channel:"msedge", headless:false});
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://login.salesforce.com/ ');
await page.locator(`#username`).fill('pavithra.ri792461@agentforce.com');
await page.locator(`#password`).fill('Shr@van@123#');
await page.locator(`#Login`).click();
})


   