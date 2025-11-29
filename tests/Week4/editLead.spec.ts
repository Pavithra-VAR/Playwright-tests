// Assignment: Edit a Lead 

import { test, chromium } from "@playwright/test";
test ('Edit a Lead', async () => {

const browser = await chromium.launch ({channel:"msedge", headless:false});
const context = await browser.newContext();
const page = await context.newPage();

await page.goto('http://leaftaps.com/opentaps/control/main');
await page.locator(`#username`).fill('Demosalesmanager');
await page.locator(`#password`).fill(`crmsfa`);
await page.locator(`.decorativeSubmit`).click();
await page.locator(`#label a[href*='crmsfa']`).click();
await page.locator(`a[href*='leadsMain']`).click();
await page.locator(`a[href*='findLeads']`).click();
await page.locator(`(//div//input[@name="firstName"])[3]`).fill('Pavithra');
await page.locator(`//button[contains(text(),"Find Leads")]`).click();
await page.locator(`(//a[contains(text(),'Pavithra')])[2]`).click();
await page.locator(`a[href*='updateLeadForm']`).click();
await page.locator(`#updateLeadForm_companyName`).fill('New Comp');
await page.locator(`#updateLeadForm_annualRevenue`).fill('9876')
await page.locator(`#updateLeadForm_departmentName`).fill('QA dept')
await page.locator(`#updateLeadForm_description`).fill(`Updated the details`)
await page.locator(`input[value='Update']`).click();
await page.waitForTimeout(3000);

const title = await page.title();
console.log("Page title after update:", title);
})
//fetching values and assertions are yet to be discussed

   