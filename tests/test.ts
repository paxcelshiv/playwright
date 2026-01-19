import {test, expect} from "@playwright/test"

test("test anything", async({page}) =>{
  expect.soft(true).toBeTruthy();
  expect.soft(false).toBeTruthy();
  expect.soft(5).toBeGreaterThan(3);
  expect.soft("Hello").toContain("H");
})

let person:[name:String, age:number];
person = ['shiv', 40];
//person = [40, 'shiv'];
console.log("Person Name: "+person[0]);
console.log("Person Age: "+person[1]);

let arr: number [] = [1,2,3,4,5];

let employee: Array<string> = ["", "John", "Doe"];
employee.push("Smith");