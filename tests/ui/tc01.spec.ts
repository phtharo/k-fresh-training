import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
  await expect(page.locator('#main-header')).toContainText('All Categories All Categories Desktops Laptops Components Tablets Software Phones & PDAs Cameras MP3 Players Search 0 0 item(s) - $0.00 0 0 item(s) - $0.00');
  await expect(page.locator('#entry_217831')).toContainText('Shop by Category Home Special Hot Blog Mega Menu Mobiles Apple HTC LG Nokia Samsung Xiomi Laptops Apple Macbook Asus HP Lenovo Accessories Headphones Memory Card Mobile cases Power bank Screenguards Smart Wearable Smart Watch Smart band Tablets Apple Ipad Computers Desktop Hard disk Mouse & Keyboard Pen Drive Printer Sound System Bluetooth Speaker DTH Home Audio Home Theatre SoundBar AddOns Featured Modules Designs Widgets My account Login Register');
  await expect(page.locator('#entry_218388')).toContainText('Top Trending Categories');
  await page.getByText('Top Products Add to Cart Add').click();
  await expect(page.locator('#entry_218397')).toContainText('Top Products Add to Cart Add to Wish List iMac $170.00 Add to Cart Add to Wish List iMac $170.00 Add to Cart Add to Wish List iMac $170.00 Add to Cart Add to Wish List iMac $170.00 Add to Cart Add to Wish List HTC Touch HD $146.00 Add to Cart Add to Wish List HTC Touch HD $146.00 Add to Cart Add to Wish List HTC Touch HD $146.00 Add to Cart Add to Wish List HTC Touch HD $146.00 Add to Cart Add to Wish List HP LP3065 $122.00 Add to Cart Add to Wish List HP LP3065 $122.00');
  await expect(page.locator('#mz-product-listing-39218404')).toContainText('Top Collection Popular Latest Best seller');
  await expect(page.locator('#entry_218411')).toContainText('From The Blog');
  
  await expect(page.locator('#swiper-wrapper-d0caec273d13372b')).toContainText('Mark Jecno 1354 comments 35153 25 Feb 2019 amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus Jolio Balia 68 comments 28710 25 Feb 2019 eget nunc lobortis mattis aliquam faucibus purus in massa tempor Mark Jecno 56 comments 9707 25 Feb 2019 amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus Previous Next Mark Jecno 25 comments 9533 25 Feb 2019 amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus Mark Jecno 127 comments 9854 25 Feb 2019 amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus Jolio Balia 80 comments 9205 25 Feb 2019 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Mark Jecno 4 comments 9799 25 Feb 2019 amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus Jolio Balia 14 comments 8867 25 Feb 2019 eget nunc lobortis mattis aliquam faucibus purus in massa tempor Jolio Balia 0 comments 8989 25 Feb 2019 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Previous Next Jolio Balia 0 comments 8792 25 Feb 2019 eget nunc lobortis mattis aliquam faucibus purus in massa tempor');
  await page.locator('.swiper-button-next').first().click();
  await page.locator('.swiper-button-next').first().click();
  await page.locator('.swiper-button-next').first().click();
  await page.locator('.swiper-button-next').first().click();
  await page.locator('.swiper-button-next').first().click();
  
});