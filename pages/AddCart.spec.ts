import { Page } from '@playwright/test';
export class AddCart {
readonly page: Page;
    constructor(page:Page) {
        this.page = page;
        
    }
}