import {expect, test} from '@playwright/test';
import {TablesPage} from "./pageobjects/tables.page";
import exp = require("constants");

let tablesPage: TablesPage = null;

test.beforeEach(async ({page}) => {
    tablesPage = new TablesPage(page);
});

test('go to tables page', async ({page}) => {
    await tablesPage.goto();
});

test('delete row with text', async ({page: Page}) => {
    await tablesPage.goto();
    await expect(tablesPage.row).toContainText('Bach');
    await expect(tablesPage.getRowWithText('Smith')).toContainText('John');
    await tablesPage.deleteRowWithText('Smith').click();
})

test.only('test', async ({page}) => {
    await tablesPage.goto();
    console.log(await tablesPage.utils.getValuesFromColumn(page.locator('table#table1'), "Last Name"));
})