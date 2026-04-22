import { expect, Page } from '@playwright/test';
import { CartLocators } from '../locators/cart-locators';
import { CommonPage } from './commom-page';

export class CartPage extends CartLocators {
  commonPage: CommonPage;

  constructor(page: Page) {
    super(page);
    this.commonPage = new CommonPage(page);
  }

  /** 
   * Opens the cart from the header 
   */
  async openCartFromHeader(): Promise<void> {
    await this.cartBtn.click();
    await this.viewCartBtn.click();
  }

  /**
   * Opens the mini cart drawer by clicking the cart icon in the header and verifies that the drawer is visible.
   */
  async openMiniCart(): Promise<void> {
    await this.cartBtn.click();
    await expect(this.miniCartDrawer).toBeVisible();
  }

  /**
   * Verifies that the cart page is loaded by checking the visibility of the cart table.
    * @returns A promise that resolves when the cart page is verified to be loaded.
   */
  async verifyCartPageLoaded(): Promise<void> {
    await expect(this.cartTable).toBeVisible();
  }

  /**
   * Verifies that a product with the specified name is present in the cart by checking its visibility in the cart table.
   * @param productName The name of the product to verify in the cart.
   * @returns A promise that resolves when the product is verified to be present in the cart.   
   */
  async verifyProductInCart(productName: string): Promise<void> {
    await expect(this.productNameInCart(productName)).toBeVisible();
  }
}
