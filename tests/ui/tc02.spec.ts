import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
  await expect(page.locator('#main-header')).toContainText('All Categories All Categories Desktops Laptops Components Tablets Software Phones & PDAs Cameras MP3 Players Search 0 0 item(s) - $0.00 0 0 item(s) - $0.00');
  await expect(page.locator('#entry_217831')).toContainText('Shop by Category Home Special Hot Blog Mega Menu Mobiles Apple HTC LG Nokia Samsung Xiomi Laptops Apple Macbook Asus HP Lenovo Accessories Headphones Memory Card Mobile cases Power bank Screenguards Smart Wearable Smart Watch Smart band Tablets Apple Ipad Computers Desktop Hard disk Mouse & Keyboard Pen Drive Printer Sound System Bluetooth Speaker DTH Home Audio Home Theatre SoundBar AddOns Featured Modules Designs Widgets My account Login Register');
  await expect(page.locator('#entry_218389')).toContainText('Top Trending Categories');
  await expect(page.locator('#entry_218397')).toContainText('Top Products Add to Cart Add to Wish List iMac $170.00 Add to Cart Add to Wish List iMac $170.00 Add to Cart Add to Wish List iMac $170.00 Add to Cart Add to Wish List iMac $170.00 Add to Cart Add to Wish List HTC Touch HD $146.00 Add to Cart Add to Wish List HTC Touch HD $146.00 Add to Cart Add to Wish List HTC Touch HD $146.00 Add to Cart Add to Wish List HTC Touch HD $146.00 Add to Cart Add to Wish List HP LP3065 $122.00 Add to Cart Add to Wish List HP LP3065 $122.00');
  await expect(page.locator('#mz-product-listing-39218404')).toContainText('Top Collection');
  await expect(page.locator('#entry_218411')).toContainText('From The Blog');
  await page.locator('.swiper-button-next').first().click();
  await page.locator('.swiper-button-next').first().click();
  await page.locator('.swiper-button-next').first().click();
  await page.locator('.swiper-button-next').first().click();
  await page.locator('.swiper-button-next').first().click();
  await page.locator('#mz-product-listing-image-37218399-0-8').click();
  await expect(page.locator('h1')).toContainText('HP LP3065');
  await expect(page.locator('#entry_216820')).toContainText('Product Code: Product 21');
  await expect(page.locator('#entry_216831')).toContainText('$122.00');
  await expect(page.locator('#entry_216835')).toContainText('Add to CartBuy now Compare this Product');
  await expect(page.locator('#entry_216847')).toContainText('Size chart Popup Ask Question');
  await expect(page.locator('#entry_216856')).toContainText('Online paymentEasy Return24x7 Service');
  await expect(page.locator('#form-review')).toContainText('0/50 reviews 5 4 3 2 1 0 Write a review Write Review');
  await page.getByRole('spinbutton', { name: 'Qty' }).click();
  await page.getByRole('spinbutton', { name: 'Qty' }).fill('3');
  await page.getByRole('spinbutton', { name: 'Qty' }).press('Enter');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await expect(page.getByRole('alert')).toContainText('Success: You have added HP LP3065 to your shopping cart! View Cart Checkout');
  await page.getByRole('link', { name: 'View Cart ' }).click();
});