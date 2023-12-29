import {BasePage} from "./base.page";
import {PageInterface} from "../../utils/structures";
import {Locator, Page} from "@playwright/test";

export class DisappearingPage extends BasePage implements PageInterface {

    readonly HEADER_TEXT: string;
    readonly url: string;
    readonly galleryTab: Locator;

    constructor(page: Page) {
        super(page);
        this.HEADER_TEXT = 'Disappearing Elements';
        this.url = '/disappearing_elements';
        this.galleryTab = page.getByText('Gallery');
    }
}