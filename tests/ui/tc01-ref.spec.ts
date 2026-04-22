import { expect, test } from '@playwright/test';
import { user } from '../../data/login.data';
import { Constants } from '../../utilities/constants';
import { HomePage } from '../../pages/home-page';
import { ProductPage } from '../../pages/product-page';
import { CartPage } from '../../pages/cart-page';

/** Test case for adding a product to the cart */
test('TC_CART_001 - Add product to cart', async ({ page }) => {
  const productName = 'HP LP3065';
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  /** Login with valid account */
  await test.step('Login with valid account', async () => {
    await page.goto(Constants.LOGIN_URL);
    await page.locator('#input-email').fill(user.username);
    await page.locator('#input-password').fill(user.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(Constants.USER_ACCOUNT_URL);
  });

  /** Navigate to homepage and verify it is displayed */
  await test.step('Navigate to homepage and verify it is displayed', async () => {
    await page.goto(Constants.HOME_PAGE_URL);
    await expect(page.locator('#main-header')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Top Products' })).toBeVisible();
  });

  /** Select product from homepage and open product detail page */
  await test.step('Select product from homepage and open product detail page', async () => {
    const topProductsSection = homePage.topProductsSection;
    await expect(topProductsSection).toContainText(productName);
    await topProductsSection.getByRole('link', { name: productName, exact: true }).first().click();
    await expect(page.getByRole('heading', { name: productName })).toBeVisible();
  });

  /** Verify product details */
  await test.step('Verify product name, price, stock, and default quantity', async () => {
    await productPage.verifyProductDetail(productName);
    await productPage.verifyPriceVisible();
    await expect(page.getByText('In Stock', { exact: false })).toBeVisible();
    await productPage.verifyDefaultQuantity();
  });

  /** Add product to cart and verify success message */
  await test.step('Add product to cart and verify success message', async () => {
    await Promise.all([
      page.waitForResponse((response) =>
        response.url().includes('route=checkout/cart/add') && response.ok(),
      ),
      page.getByRole('button', { name: 'Add to Cart' }).click(),
    ]);

    await expect(page.getByRole('alert')).toContainText(
      `Success: You have added ${productName} to your shopping cart!`,
    );
  });

  /** Verify cart icon updated and product appears in mini cart */
  await test.step('Verify cart icon updated and product appears in mini cart', async () => {
    await cartPage.openMiniCart();
    await expect(cartPage.miniCartDrawer).toContainText(productName);
  });
});
