import {Page} from "@playwright/test"
export class HomePage{
    readonly page:Page;
    readonly searchInput;
    readonly productname;
    constructor(page:Page){
        this.page=page;
        this.productname=page.locator("a:has-text('MacBook')");
        this.searchInput=page.locator("input[name='search']");
    }
}