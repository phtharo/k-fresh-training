import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
  await page.locator('.swiper-button-next').first().click();
  await page.locator('.swiper-button-next').first().click();
  await page.locator('.swiper-button-next').first().click();
  await page.locator('.swiper-button-next').first().click();
  await page.locator('.swiper-button-next').first().click();
  await page.locator('.swiper-button-next').first().click();
  await page.locator('#mz-product-listing-image-37218399-0-8').click();
  //await expect(page.locator('#entry_216807')).toContainText('Software HP LP3065 Description Specification Reviews Custom Stop your co-workers in their tracks with the stunning new 30-inch diagonal HP LP3065 Flat Panel Monitor. This flagship monitor features best-in-class performance and presentation features on a huge wide-aspect screen while letting you work as comfortably as possible - you might even forget you\'re at the office Memory test 1 16GB Processor No. of Cores 4 There are no reviews for this product. Create unlimited custom tabs and add any product detail, module, widget, design or HTML. Also possible to create custom tab layout using layout builder HP LP3065 Product Code: Product 21 Description Specification Reviews Stop your co-workers in their tracks with the stunning new 30-inch diagonal HP LP3065 Flat Panel Monitor. This flagship monitor features best-in-class performance and presentation features on a huge wide-aspect screen while letting you work as comfortably as possible - you might even forget you\'re at the office Memory test 1 16GB Processor No. of Cores 4 There are no reviews for this product. Brand: Hewlett-PackardViewed: 32884Reward Points: 300Availability: In Stock $122.00 Add to CartBuy now Compare this Product Size chart Popup Ask QuestionOnline paymentEasy Return24x7 Service 0/50 reviews 5 4 3 2 1 0 Write a review Write Review');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await expect(page.getByRole('alert')).toContainText('Success: You have added HP LP3065 to your shopping cart! View Cart Checkout');
  await page.getByRole('link', { name: 'View Cart ' }).click();
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('cell', { name: 'x1' }).click();
  await page.getByRole('cell', { name: 'x1' }).click();
  await page.locator('.mz-pure-overlay').click();
  await expect(page.locator('#content')).toContainText('Product 21');
  await expect(page.locator('#content')).toContainText('2');
  await expect(page.locator('#content')).toContainText('$122.00');
  //await expect(page.locator('#content')).toContainText('$244.00');
});