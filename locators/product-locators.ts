import { Locator, Page } from '@playwright/test';
import { CommonLocators } from './common-locators';

export class ProductLocators extends CommonLocators {
    constructor(page: Page) {
        super(page);
        this.locatorsInitialization();
    }
    productTitle!: Locator;
    productPrice!: Locator;
    quantityInput!: Locator;
    addToCartBtn!: Locator;
    successMessage!: Locator;

    locatorsInitialization() {
        super.locatorsInitialization();

        this.productTitle = this.page.locator("//div[@class='content']//h1"); // title product
        this.productPrice = this.page.locator("//h3[contains(@class, 'price-new')]");

        this.quantityInput = this.page.locator("//div[contains(@class,'entry-section') and contains(@class,'container')]//div[contains(@data-toggle,'spinner')]//input[@name='quantity']");

        this.addToCartBtn = this.page.locator("//div[@class='entry-section container ']//button[@title='Add to Cart']");

        this.successMessage = this.page.locator("//div[contains(@class, 'alert-success')]");
    }
}
