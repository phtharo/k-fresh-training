import test, { expect } from "@playwright/test";
import { Constants } from "../../utilities/constants";
import { user } from "../../data/login.data";

test ('TC02 - Add product with multiple quantity successfully', async ({page}) => {
    const productName = 'HP LP3065';
    const productPrice = '$122.00';
    const quantity = 3;

    //login
    await test.step('Login with valid account', async () => {
        await page.goto(Constants.LOGIN_URL);
        await page.locator('#input-email').fill(user.username);
        await page.locator('#input-password').fill(user.password);
        await page.getByRole('button', {name : 'Login'}).click();
        await expect(page).toHaveURL(Constants.USER_ACCOUNT_URL);
    })

    //navigate to homepage
    await test.step('Navigate to homepage and verify it is displayed', async () =>{
        await page.goto(Constants.HOME_PAGE_URL);
        await expect(page.locator('#main-header')).toBeVisible();
        await expect(page.getByRole('heading',{ name: 'Top Products' })).toBeVisible();
    })

    //select product and open product detail page
    await test.step('Select product from homepage and open product detail page', async () => {
        await page.getByRole('link', { name: productName, exact: true }).first().click();
        await expect(page.getByRole('heading', { name: productName })).toBeVisible();
    })

    //verify product name, price, stock, and default quantity
    await test.step('Verify product name, price, stock, and default quantity', async () => {
        await expect(page.locator('h1')).toContainText(productName);
        await expect(page.locator('.price')).toContainText(productPrice);
        await expect(page.getByText('Availability: In Stock')).toBeVisible();
        await expect(page.getByRole('spinbutton', { name: 'Qty' })).toHaveValue('1');
    })
});