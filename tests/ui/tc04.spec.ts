import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
  await page.getByRole('button', { name: 'Mega Menu' }).click();
  await page.getByRole('button', { name: 'Shop by Category' }).click();
  await page.getByRole('link', { name: 'Phone, Tablets & Ipod' }).click();
  // await page.getByRole('link', { name: 'iPod Touch iPod Touch iPod' }).click();
  await page.getByTitle('Add to Cart').nth(3).click();
  await page.getByRole('link', { name: 'View Cart ' }).click();
  await expect(page.locator('#content')).toContainText('Nikon D300 ***');
  await expect(page.locator('#content')).toContainText('Product 4');
  await expect(page.locator('#content')).toContainText('1');
  await expect(page.locator('#content')).toContainText('$98.00');
  await expect(page.locator('#content')).toContainText('$98.00');
});