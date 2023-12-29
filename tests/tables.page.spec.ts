import {expect, test} from '@playwright/test';
import {ContextPage} from "./pageobjects/context.page";
import {DisappearingPage} from "./pageobjects/disappearing.page";
import {TablesPage} from "./pageobjects/tables.page";

let tablesPage: TablesPage = null;

test.beforeEach(async ({page}) => {
    tablesPage = new TablesPage(page);
});

test('go to tables page', async ({page}) => {
    await tablesPage.goto();
});