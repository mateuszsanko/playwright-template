import {BasePage} from "./base.page";
import {Page} from "@playwright/test";

export class DragDropPage extends BasePage {

    readonly HEADER_TEXT: string;
    readonly url: string;

    constructor(page: Page) {
        super(page);
        this.HEADER_TEXT = 'Drag and Drop';
        this.url = '/drag_and_drop';
    }
}