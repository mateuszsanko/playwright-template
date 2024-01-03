import {expect, test} from '@playwright/test';
import {ContextPage} from "./pageobjects/context.page";

let contextPage: ContextPage = null;

test.beforeEach(async ({page}) => {
    contextPage = new ContextPage(page);
});

test('go to context page', async ({page}) => {
    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain(contextPage.DIALOG_MSG);
        await dialog.accept();
    });

    await contextPage.goto();
    await contextPage.hotSpot.click({button: 'right'});
});