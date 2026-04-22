import { Locator, Page } from '@playwright/test';
import { CommonLocators } from '../locators/common-locators';

export class HomeLocators extends CommonLocators {

    constructor(page: Page) {
        super(page);
        this.locatorsInitialization();
    }
    // HEADER
    header!: Locator;
    categoryMenu!: Locator;

    // SECTIONS
    topTrendingCategories!: Locator;
    topProductsTab!: Locator;
    topProductsSection!: Locator;
    productTabs!: Locator;
    productLink!: (productName: string) => Locator;
    productByName!: (name: string) => Locator;
    blogSection!: Locator;

    // BLOG CAROUSEL
    blogCarousel!: Locator;
    nextCarouselBtn!: Locator;

    locatorsInitialization() {
        super.locatorsInitialization();

        /** HEADER **/
        this.header = this.page.locator("#main-header");

        // menu chính 
        // this.categoryMenu = this.page.locator('nav >> text=Shop by Category');

        /** SECTIONS **/
        this.topProductsSection = this.page.locator(
            "//h3[text()='Top Products']/../../..//div[@class='entry-section container ']"
        );

        this.productLink = (productName: string) => 
            this.topProductsSection.getByRole("link", { name: productName, exact: true }).first();
    }
}
