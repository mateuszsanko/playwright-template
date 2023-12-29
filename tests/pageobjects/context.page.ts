import {BasePage} from "./base.page";
import {PageInterface} from "../../utils/structures";
import {expect, Locator, Page} from "@playwright/test";

export class ContextPage extends BasePage implements PageInterface {

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