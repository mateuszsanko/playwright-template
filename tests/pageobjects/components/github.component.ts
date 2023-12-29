import {Locator, type Page} from '@playwright/test';

export class GithubComponent {

    readonly forkMeImage: Locator;

    constructor(page: Page) {
        this.forkMeImage = page.locator("img[alt='Fork me on GitHub']");
    }
}