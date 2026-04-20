import { Locator, Page } from '@playwright/test';
export class CommonLocators {
    page: Page;
    
    constructor(page: Page) {
        this.page = page;
        this.locatorInitialization();
    }

    btnSave!: Locator;
    btnCancel!: Locator;
    btnDelete!: Locator;
    btnEdit!: Locator;
    btnAdd!: Locator;
    btnView!: Locator;
    btnSearch!: Locator;
    btnSubmit!: Locator;

    
    
    locatorInitialization() {
        this.btnSave = this.page.locator('button:has-text("Save")');
        this.btnCancel = this.page.locator('button:has-text("Cancel")');
        this.btnDelete = this.page.locator('button:has-text("Delete")');
        this.btnEdit = this.page.locator('button:has-text("Edit")');
        this.btnAdd = this.page.locator('button:has-text("Add")');
        this.btnView = this.page.locator('button:has-text("View")');
        this.btnSearch = this.page.locator('button:has-text("Search")'); 
        this.btnSubmit = this.page.locator('button:has-text("Submit")');   
    }
}