import {BasePage} from "./base.page";
import {expect, Locator, Page} from "@playwright/test";
import {DynamicOnePage} from "./dynamic.one.page";

export class DynamicLoadingPage extends BasePage {
    readonly HEADER_TEXT: string;
    readonly url: string;
    readonly example1Link: Locator;
    readonly example2Link: Locator;
    readonly onePage: DynamicOnePage;

    constructor(page: Page) {
        super(page);
        this.HEADER_TEXT = "Dynamically Loaded Page Elements";
        this.url = "/dynamic_loading";
        this.example1Link = page.getByText("Example 1: Element on page that is hidden");
        this.example2Link = page.getByText("Example 2: Element rendered after the fact");
        this.onePage = new DynamicOnePage(page);
    }

    async getSuccessMessage() {
        await this.example1Link.click();
        await this.onePage.startButton.click();
        await expect(this.onePage.loader).toBeVisible();
        return await this.onePage.successMessage.textContent();
    }
}