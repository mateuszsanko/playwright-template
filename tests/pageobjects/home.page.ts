import {type Page} from '@playwright/test';
import {BasePage} from "./base.page";

export class HomePage extends BasePage {

    readonly HEADER_TEXT: string;
    readonly url: string;

    constructor(page: Page) {
        super(page);
        this.HEADER_TEXT = 'Welcome to the-internet';
        this.url = '';
    }
}