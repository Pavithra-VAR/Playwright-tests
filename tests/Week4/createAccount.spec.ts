// Assignment:Create a new Account

import { test, chromium } from "@playwright/test";
test ('Create a new Account', async () => {

const browser = await chromium.launch ({channel:"msedge", headless:false});
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://login.salesforce.com/ ');
await page.getByLabel('Username').fill('');
await page.getByLabel('Password').fill('Arundanica@3');
// 4. Click Login 
await page.locator(`#Login`).click();
})


   