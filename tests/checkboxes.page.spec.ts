import {expect, test} from '@playwright/test';
import {CheckboxesPage} from "./pageobjects/checkboxes.page";

let checkboxesPage: CheckboxesPage = null;

test.beforeEach(async ({page}) => {
    checkboxesPage = new CheckboxesPage(page);
});

test('go to checkbox page', async ({page}) => {
    await checkboxesPage.goto();
    await expect(checkboxesPage.header).toHaveText(checkboxesPage.HEADER_TEXT);
});

test('check first checkbox', async ({page}) => {
    await checkboxesPage.goto();
    await checkboxesPage.checkbox1.check();
    await expect(checkboxesPage.checkbox1).toBeChecked();
    await expect(checkboxesPage.checkbox2).toBeChecked();
    await expect(checkboxesPage.footerComponent.footer).toHaveText('Powered by Elemental Selenium')
});