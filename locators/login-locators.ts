import { Locator, Page } from "@playwright/test";
import { CommonLocators } from "./common-locators";

export class LoginLocators extends CommonLocators {
    constructor(page: Page) {
        super(page);
        this.locatorsInitialization();
    } 
    inputUsername!: Locator;
    inputPassword!: Locator;
    // accountBreadcrumb!: Locator;
    // accountHeading!: Locator;

    locatorsInitialization(): void {
      super.locatorsInitialization();
      this.inputUsername = this.page.locator('#input-email');
      this.inputPassword = this.page.locator('#input-password');
      this.btnSubmit = this.page.getByRole('button', { name: 'Login' });
    //   this.accountBreadcrumb = this.page.locator('.breadcrumb').getByText('Account');
    //   this.accountHeading = this.page.locator('#content h2').filter({ hasText: 'My Account' });
    }
}     
