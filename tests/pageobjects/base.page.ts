import {expect, type Locator, type Page} from '@playwright/test';
import {GithubComponent} from "./components/github.component";
import {FooterComponent} from "./components/footer.component";

export class BasePage {
    readonly page: Page;
    readonly header: Locator;
    readonly HEADER_TEXT: string;
    readonly url: string;
    readonly githubComponent: GithubComponent;
    readonly footerComponent: FooterComponent;

    constructor(page: Page) {
        this.page = page;
        this.header = page.getByRole('heading').nth(0);
        this.githubComponent = new GithubComponent(page);
        this.footerComponent = new FooterComponent(page);
    }

    async check() {
        await expect(this.header).toHaveText(this.HEADER_TEXT);
    }

    async goto() {
        await this.page.goto(this.url);
        await this.check();
    }
}