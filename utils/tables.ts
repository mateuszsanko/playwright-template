import {Locator, Page} from "@playwright/test";

export class TableUtils {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getValuesFromColumn(tableLocator: Locator, columnName: string) {
        const rows = await tableLocator.locator("tbody tr").all();
        const columnNumber = await this.getColumnNumber(tableLocator, columnName);
        const stringValues: string[] = [];

        for (let i = 0; i < rows.length; i++) {
            stringValues.push(await rows[i].locator("td").nth(columnNumber).textContent());
        }
        return stringValues;
    }

    async getColumnNumber(tableLocator: Locator, columnName: string): Promise<number> {
        const columnNames = await tableLocator.locator('thead tr th').allTextContents();
        return columnNames.indexOf(columnName);
    }

    getRowWithText(tableLocator: Locator, text: string) {
        return tableLocator.locator('tr',
            {has: this.page.locator(`text="${text}"`)});
    }

    deleteRowWithText(tableLocator: Locator, text: string) {
        return this.getRowWithText(tableLocator, text).getByText('delete');
    }

    async sortBy(tableLocator: Locator, columnNumber: number) {
        await tableLocator
            .locator('thead th').nth(columnNumber).click();
    }
}