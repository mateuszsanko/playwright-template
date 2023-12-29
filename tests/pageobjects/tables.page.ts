import {BasePage} from "./base.page";
import {PageInterface} from "../../utils/interfaces";
import {Locator, Page} from "@playwright/test";

export class TablesPage extends BasePage implements PageInterface {

    readonly HEADER_TEXT: string;
    readonly url: string;

    constructor(page: Page) {
        super(page);
        this.HEADER_TEXT = 'Data Tables';
        this.url = '/tables';
    }
}