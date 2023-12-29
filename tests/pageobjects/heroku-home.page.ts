import {type Page} from '@playwright/test';
import {BasePage} from "./base.page";
import {PageInterface} from "../../utils/interfaces";

export class HerokuHomePage extends BasePage implements PageInterface {

    readonly HEADER_TEXT: string;
    readonly url: string;

    constructor(page: Page) {
        super(page);
        this.HEADER_TEXT = 'Welcome to the-internet';
        this.url = '';
    }
}