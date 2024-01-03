import {BasePage} from "./base.page"; 
import {Locator, Page} from "@playwright/test";

export class DynamicControlsPage extends BasePage {

    readonly HEADER_TEXT: string;
    readonly url: string;
    readonly checkbox: Locator;
    readonly removeButton: Locator;
    readonly loader: Locator;
    readonly successMessage: Locator;
    readonly input: Locator;
    readonly enableButton: Locator;

    constructor(page: Page) {
        super(page);
        this.HEADER_TEXT = 'Dynamic Controls';
        this.url = '/dynamic_controls';
        this.checkbox = page.locator("div#checkbox");
        this.removeButton = page.getByRole('button', {name: 'Remove'});
        this.loader = page.locator("div#loading");
        this.successMessage = page.locator("p#message");
        this.input = page.locator("form#input-example input");
        this.enableButton = page.locator("form#input-example button");
    }
}