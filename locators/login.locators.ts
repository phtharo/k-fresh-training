// export const loginLocators = {
//   username: '#username',
//   password: '#password',
//   submitButton: 'button[type="submit"]',
//   flashMessage: '#flash',
// };

import { Locator, Page } from "@playwright/test";
import { CommonLocators } from "./common-locator";

export class LoginLocators extends CommonLocators {
    constructor(page: Page) {
        super(page);
        this.locatorInitialization();
    } 
    inputUsername!: Locator;
    inputPassword!: Locator;
    // btnSubmit!: Locator;
    flashMessage!: Locator;

    locatorInitialization(): void {
      super.locatorInitialization();
      this.inputUsername = this.page.locator('#username');
      this.inputPassword = this.page.locator('#password');
      // this.btnSubmit = this.page.locator('button[type="submit"]');
      this.flashMessage = this.page.locator('#flash');
    }
}     
