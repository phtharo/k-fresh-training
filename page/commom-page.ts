import test, { Page } from "@playwright/test";
import { CommonLocators } from "../locators/common-locator";

export class CommonPage extends CommonLocators {
    constructor(page: Page) {
        super(page);
    }   

    async goto(url: string) {
        await test.step(`Navigate to ${url}`, async () => {
            await this.page.goto(url);
        });
        
    }
}