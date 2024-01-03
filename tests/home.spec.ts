import {expect, test} from '@playwright/test';
import {HerokuHomePage} from "./pageobjects/heroku-home.page";
import {AddRemovePage} from "./pageobjects/add-remove.page";
import {CheckboxesPage} from "./pageobjects/checkboxes.page";

let homePage: HerokuHomePage = null;
let addRemovePage: AddRemovePage = null;
let checkboxesPage: CheckboxesPage = null;

test.beforeEach(async ({page}) => {
    homePage = new HerokuHomePage(page);
    addRemovePage = new AddRemovePage(page);
    checkboxesPage = new CheckboxesPage(page);
});

test('go to homepage', async ({page}) => {
    await homePage.goto();
    await expect(homePage.header).toHaveText(homePage.HEADER_TEXT);
});

test('click add button', async ({page}) => {
    await addRemovePage.goto();
    await addRemovePage.addButton.click();
    await expect(addRemovePage.deleteButton).toHaveCount(1);
    await addRemovePage.deleteButton.click();
    await expect(addRemovePage.deleteButton).toHaveCount(0);
})

test('click add button two times', async ({page}) => {
    await addRemovePage.goto();
    await addRemovePage.addButton.click();
    await addRemovePage.addButton.click();
    await expect(addRemovePage.deleteButton).toHaveCount(2);
    await addRemovePage.deleteButton.first().click();
    await expect(addRemovePage.deleteButton).toHaveCount(1);
    await addRemovePage.deleteButton.first().click();
    await expect(addRemovePage.deleteButton).toHaveCount(0);
})

test('go to checkboxes page', async ({page}) => {
    await checkboxesPage.goto();
    await expect(checkboxesPage.header).toHaveText(checkboxesPage.HEADER_TEXT);
})