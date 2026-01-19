import {test, expect} from "@playwright/test"
import { TestConfig } from "../test.config";
import { readData } from "../utils/readData";
import { HomePage } from "../pages/HomePage";

let config = new TestConfig;
let homePage:HomePage;
let testData:readData;
test("Open to home page and verify title", async ({page}) =>{
    homePage = new HomePage(page);
    testData = new readData();
    // Steps
    //Step 1: Navigate to application home page
    console.log("Navigating to application home page: "+config.appUrl);
    await page.goto(config.appUrl);
    expect(homePage.isHomepage).toBeTruthy();
    
    //Step 2: Verify home page title
    let tabs:Number = await homePage.listOfCourses.count();
    console.log("Number of courses available on home page: "+tabs);
    expect(tabs).toBeGreaterThan(7);

    // Step 3: Print all course names
    let arr: string[] = [];
    arr= homePage.getNames();
     console.log("Course:",arr);
   let data= readData.readLoginData();
   console.log("Test Data from JSON file: "+JSON.stringify(data[0].TabsList)); 

   // Step 4: Login to application
   await homePage.loginToApplication(config.email, config.password);
   await homePage.loginText.fill
   
})