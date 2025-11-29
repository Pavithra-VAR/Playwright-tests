import { chromium, test} from "@playwright/test";

test(`Create a Lead`,async ()=>{

   const browser = await chromium.launch({channel:"chrome"});
   const browserContext = await browser.newContext();
   const page = await browserContext.newPage();
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`#username`).fill(`Demosalesmanager`);
    await page.locator(`#password`).fill(`crmsfa`);
    await page.locator(`.decorativeSubmit`).click();
    await page.locator(`#button`).click();
    await page.waitForTimeout(3000);
    await page.locator(`//a[.='Leads']`).click();
    await page.locator(`//a[.='Create Lead']`).click();
    await page.locator(`#createLeadForm_companyName`).fill('TestLeaf')
    await page.locator(`#createLeadForm_firstName`).fill('Pavithra')
    await page.locator(`#createLeadForm_lastName`).fill('lastName')
    await page.locator(`#createLeadForm_personalTitle`).fill('Creating Lead')
    await page.locator(`#createLeadForm_generalProfTitle`).fill('Title')
    await page.locator(`#createLeadForm_departmentName`).fill('QA department')
    await page.locator(`#createLeadForm_annualRevenue`).fill('10000')
    await page.locator(`#createLeadForm_primaryPhoneNumber`).fill('1234567890')
    await page.locator(`.smallSubmit`).click();

})