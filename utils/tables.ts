import {Locator, Page} from "@playwright/test";


export async function getValuesFromColumn(tableLocator: Locator, columnName: string) {
    const rows = await tableLocator.locator("tbody tr").all();
    const columnNumber = await getColumnNumber(tableLocator, columnName);
    const stringValues: string[] = [];

    for (let i = 0; i < rows.length; i++) {
        stringValues.push(await rows[i].locator("td").nth(columnNumber).textContent());
    }
    return stringValues;
}

export async function getColumnNumber(tableLocator: Locator, columnName: string): Promise<number> {
    const columnNames = await tableLocator.locator('thead tr th').allTextContents();
    return columnNames.indexOf(columnName);
}

export function getRowWithText(page: Page, tableLocator: Locator, text: string) {
    return tableLocator.locator('tr',
        {has: page.locator(`text="${text}"`)});
}

export function deleteRowWithText(page: Page, tableLocator: Locator, text: string) {
    return getRowWithText(page, tableLocator, text).getByText('delete');
}

export async function sortBy(tableLocator: Locator, columnNumber: number) {
    await tableLocator
        .locator('thead th').nth(columnNumber).click();
}
