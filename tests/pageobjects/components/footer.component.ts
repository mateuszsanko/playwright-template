import {Locator, type Page} from '@playwright/test';

export class FooterComponent {

    readonly footer: Locator;
    readonly elementalLink: Locator;

    constructor(page: Page) {
        this.footer = page.locator("div#page-footer");
        this.elementalLink = this.footer.locator('a');
    }
}