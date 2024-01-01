import {Locator} from "@playwright/test";

export class TableUtils {

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
}
