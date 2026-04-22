import { expect, Page } from '@playwright/test';
import { HomeLocators } from '../locators/home-locators';
import { Constants } from '../utilities/constants';
import { CommonPage } from './commom-page';

export class HomePage extends HomeLocators {
  commonPage: CommonPage;

  constructor(page: Page) {
    super(page);
    this.commonPage = new CommonPage(page);
  }

  async goto(): Promise<void> {
    await this.page.goto(Constants.HOME_PAGE_URL);
  }

  async verifyTopProductsVisible(): Promise<void> {
    await expect(this.topProductsSection).toBeVisible();
  }

  async openProduct(productName: string): Promise<void> {
    await this.productLink(productName).click();
  }

}
