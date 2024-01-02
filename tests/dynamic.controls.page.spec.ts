import {expect, test} from '@playwright/test';
import {DynamicControlsPage} from "./pageobjects/dynamic.controls.page";
import exp = require("constants");

let dynamicControlsPage: DynamicControlsPage = null;

test.beforeEach(async ({page}) => {
    dynamicControlsPage = new DynamicControlsPage(page);
});

test('go to dynamic controls page', async ({page}) => {
    await dynamicControlsPage.goto();
    await expect(dynamicControlsPage.checkbox).toBeVisible();
    await dynamicControlsPage.removeButton.click();
    await expect(dynamicControlsPage.checkbox).toHaveCount(0, {timeout: 15000});
    await expect(dynamicControlsPage.successMessage ).toContainText("It's gone!");
});

test('enable input', async ({page}) => {
    await dynamicControlsPage.goto();
    await expect(dynamicControlsPage.input).toBeDisabled();
    await dynamicControlsPage.enableButton.click();
    await expect(dynamicControlsPage.input).toBeEnabled({timeout: 10000});
})