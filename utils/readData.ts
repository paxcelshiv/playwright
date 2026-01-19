import fs from 'fs';
export class readData{
    static readLoginData(): any {
        return JSON.parse(fs.readFileSync('./testData/logindata.json', 'utf-8'));
    }
}