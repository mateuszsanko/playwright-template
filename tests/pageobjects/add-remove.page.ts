import {expect, type Locator, type Page} from '@playwright/test';
import {BasePage} from "./base.page";
import {PageInterface} from "../../utils/interfaces";

export class AddRemovePage extends BasePage implements PageInterface {

    readonly addButton: Locator;
    readonly deleteButton: Locator;
    readonly url: string;
    readonly HEADER_TEXT: string;

    constructor(page: Page) {
        super(page);
        this.addButton = page.locator("button[onclick='addElement()']");
        this.deleteButton = page.locator("button[onclick='deleteElement()']");
        this.HEADER_TEXT = 'Add/Remove Elements';
        this.url = '/add_remove_elements/';
    }
}