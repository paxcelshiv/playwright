import {Page, Locator} from "@playwright/test";
export class HomePage{
    private readonly page:Page;
    readonly isHomepage:Locator;
    readonly listOfCourses:Locator;
    readonly loginText:Locator;
    readonly password:Locator;
    readonly loginTextButton:Locator;
    constructor(page:Page) {
        this.page = page;
        this.isHomepage= page.locator("//*[@id='main-menu']/div/div[1]/div/a/img");
        this.listOfCourses= page.locator("//*[@id='menu-main-menu']/li/a");
        this.loginText= page.locator("input[value='Login']");
        this.password= page.locator("#input-password");
        this.loginTextButton= page.locator("input[value='Login']");
    }

    getNames(): string[] {
        let names: string[] = [];
        this.listOfCourses.allTextContents().then((texts) => {
            names = texts;
          //  names.push(texts);
        });
        console.log("Tab Names on Home Page: "+names);
    return names;
    }

    loginToApplication(username:string, password:string){
     this.loginText.fill(username);
     this.password.fill(password);
     this.loginTextButton.click();
    }   
}