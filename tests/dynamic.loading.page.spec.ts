import {expect, test} from '@playwright/test';
import {DynamicLoadingPage} from "./pageobjects/dynamic.loading.page";

let dynamicLoadingPage: DynamicLoadingPage = null;

test.beforeEach(async ({page}) => {
    dynamicLoadingPage = new DynamicLoadingPage(page);
});

test('@smoke go to dynamic controls page', async ({page}) => {
    await dynamicLoadingPage.goto();
    expect(await dynamicLoadingPage.getSuccessMessage()).toEqual("Hello World!");
});
