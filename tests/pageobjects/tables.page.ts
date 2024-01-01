import {BasePage} from "./base.page";
import {PageInterface} from "../../utils/structures";
import {Locator, Page} from "@playwright/test";
import {TableUtils} from "../../utils/tables";

export class TablesPage extends BasePage implements PageInterface {

    readonly HEADER_TEXT: string;
    readonly url: string;
    readonly row: Locator;
    readonly rowsTable1: Locator;
    readonly utils: TableUtils;

    constructor(page: Page) {
        super(page);
        this.HEADER_TEXT = 'Data Tables';
        this.url = '/tables';
        this.row = this.page.locator('table#table1 tbody tr',
            {has: this.page.locator(`text="Frank"`)});
        this.rowsTable1 = this.page.locator('table#table1 tbody tr');
        this.utils = new TableUtils();
    }

    getRowWithText(text: string) {
        return this.page.locator('table#table1 tr',
            {has: this.page.locator(`text="${text}"`)});
    }

    deleteRowWithText(text: string) {
        return this.getRowWithText(text).getByText('delete');
    }

    async sortBy(tableNumber: number, columnNumber: number) {
        tableNumber = tableNumber - 1;
        await this.page.locator("table").nth(tableNumber)
            .locator('thead th').nth(columnNumber).click();
    }
}