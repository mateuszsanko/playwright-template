import {BasePage} from "./base.page";
import {PageInterface} from "../../utils/structures";
import {Locator, Page} from "@playwright/test";

export class CheckboxesPage extends BasePage implements PageInterface {

    readonly HEADER_TEXT: string;
    readonly url: string;
    readonly checkbox1: Locator;
    readonly checkbox2: Locator;

    constructor(page: Page) {
        super(page);
        this.HEADER_TEXT = 'Checkboxes';
        this.url = '/checkboxes';
        this.checkbox1 = page.locator("input[type='checkbox']").nth(0);
        this.checkbox2 = page.locator("input[type='checkbox']").nth(1);
    }
}