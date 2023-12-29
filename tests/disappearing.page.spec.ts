import {expect, test} from '@playwright/test';
import {ContextPage} from "./pageobjects/context.page";
import {DisappearingPage} from "./pageobjects/disappearing.page";

let disappearingPage: DisappearingPage = null;

test.beforeEach(async ({page}) => {
    disappearingPage = new DisappearingPage(page);
});

test.skip('go to disappearing page', async ({page}) => {
    await disappearingPage.goto();
    await expect(disappearingPage.galleryTab).toBeVisible();
    await expect(page).toHaveScreenshot({maxDiffPixels: 100});
});