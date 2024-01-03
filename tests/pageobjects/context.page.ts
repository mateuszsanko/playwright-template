import {BasePage} from "./base.page";
import {Locator, Page} from "@playwright/test";

export class ContextPage extends BasePage {

    readonly HEADER_TEXT: string;
    readonly url: string;

    readonly DIALOG_MSG: string;
    readonly hotSpot: Locator;

    constructor(page: Page) {
        super(page);
        this.HEADER_TEXT = 'Context Menu';
        this.url = '/context_menu';
        this.hotSpot = page.locator('div#hot-spot');
        this.DIALOG_MSG = 'You selected a context menu';
    }
}