// export const loginLocators = {
//   username: '#username',
//   password: '#password',
//   submitButton: 'button[type="submit"]',
//   flashMessage: '#flash',
// };

import { Locator, Page } from "@playwright/test";
import { CommonLocators } from "./common-locators";

export class LoginLocators extends CommonLocators {
    constructor(page: Page) {
        super(page);
        this.locatorsInitialization();
    } 
    inputUsername!: Locator;
    inputPassword!: Locator;
    flashMessage!: Locator;

    locatorsInitialization(): void {
      super.locatorsInitialization();
      this.inputUsername = this.page.locator('#username');
      this.inputPassword = this.page.locator('#password');
      this.btnSubmit = this.page.locator('button[type="submit"]');
      this.flashMessage = this.page.locator('#flash');
    }
}     
