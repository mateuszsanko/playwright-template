import exp = require("constants");
import {lookup} from "dns";
import {Locator, Page} from "@playwright/test";


export class DynamicOnePage {
    readonly startButton: Locator;
    readonly loader: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.startButton = page.locator("div#start button");
        this.loader = page.locator("div#loading");
        this.successMessage = page.locator("div#finish h4");
    }
}