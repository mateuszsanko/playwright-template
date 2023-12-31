import {BasePage} from "./base.page";
import {Locator, Page} from "@playwright/test";


export class TablesPage extends BasePage {

    readonly HEADER_TEXT: string;
    readonly url: string;
    readonly row: Locator;
    readonly rowsTable1: Locator;

    constructor(page: Page) {
        super(page);
        this.HEADER_TEXT = 'Data Tables';
        this.url = '/tables';
        this.row = this.page.locator('table#table1 tbody tr',
            {has: this.page.locator(`text="Frank"`)});
        this.rowsTable1 = this.page.locator('table#table1 tbody tr');
    }
}