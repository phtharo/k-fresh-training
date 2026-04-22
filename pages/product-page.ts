import { expect, Page } from '@playwright/test';
import { ProductLocators } from '../locators/product-locators';
import { CommonPage } from './commom-page';

export class ProductPage extends ProductLocators {
  commonPage: CommonPage;

  constructor( page: Page) {
    super(page);
    this.commonPage = new CommonPage(page);
  }

  async verifyProductDetail(name: string): Promise<void> {
    await expect(this.productTitle).toContainText(name);
  }

  async verifyPriceVisible(): Promise<void> {
    await expect(this.productPrice).toBeVisible();
  }

  async verifyDefaultQuantity(): Promise<void> {
    await expect(this.quantityInput).toHaveValue('1');
  }

  async setQuantity(qty: number): Promise<void> {
    await this.quantityInput.fill(qty.toString());
  }

  async clickAddToCart(): Promise<void> {
    await this.addToCartBtn.click();
  }

  async verifyAddToCartSuccess(): Promise<void> {
    await expect(this.successMessage).toBeVisible();
  }
}