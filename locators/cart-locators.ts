import { Locator, Page } from '@playwright/test';
import { CommonLocators } from './common-locators';

export class CartLocators extends CommonLocators {

    constructor(page: Page) {
        super(page);
        this.locatorsInitialization();
    }
    cartBtn!: Locator;
    miniCartDrawer!: Locator;
    viewCartBtn!: Locator;

    cartTable!: Locator;
    productNameInCart!: (name: string) => Locator;

    locatorsInitialization() {
        super.locatorsInitialization();

        /** CART ICON **/
        this.cartBtn = this.page.locator("(//a[@href='#cart-total-drawer']//div[contains(@class,'cart-icon')]//*[name()='svg'])[1]");

        /** MINI CART DRAWER **/
        this.miniCartDrawer = this.page.locator("//div[@data-position='right' and contains(@class,'mz-pure-drawer')][.//h5[contains(.,'Cart')]]");
        


        /** DROPDOWN CART **/
        this.viewCartBtn = this.page.getByRole("link", { name: 'View Cart' });

        /** CART PAGE **/
        this.cartTable = this.page.locator(".table-responsive");

        this.productNameInCart = (name: string) =>
            this.page.locator(".table-responsive").getByText(name);
    }
}
