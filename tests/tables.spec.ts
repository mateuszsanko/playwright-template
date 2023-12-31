import {expect, test} from '@playwright/test';
import {TablesPage} from "./pageobjects/tables.page";
import {getRowWithText, deleteRowWithText, getColumnNumber, getValuesFromColumn, sortBy} from "../utils/tables";

let tablesPage: TablesPage = null;

test.beforeEach(async ({page}) => {
    tablesPage = new TablesPage(page);
});

test('go to tables page', async ({page}) => {
    await tablesPage.goto();
});

test('delete row with text', async ({page}) => {
    await tablesPage.goto();
    await expect(tablesPage.row).toContainText('Bach');
    await expect(getRowWithText(page, page.locator('table#table1'), 'Smith')).toContainText('John');
    await deleteRowWithText(page, page.locator('table#table1'), 'Smith').click();
})

test('sort by last name', async ({page}) => {
    await tablesPage.goto();
    const columnNumber = await getColumnNumber(page.locator('table#table1'), 'Last Name');
    const lastNames = await getValuesFromColumn(page.locator("table#table1"), 'Last Name');
    await sortBy(page.locator('table#table1'), columnNumber);
    const sortedLastNames = await getValuesFromColumn(page.locator("table#table1"), 'Last Name');
    expect(sortedLastNames).toEqual(lastNames.sort());
})

test('test', async ({page}) => {
    await tablesPage.goto();
    console.log(await getValuesFromColumn(page.locator('table#table1'), "Last Name"));
})