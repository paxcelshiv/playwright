/*  
properties 
methods
1- Regula properties
2- Optional Properties
3- Readonly properties
4- Extended Properties and function
5- class interface implementation
*/

interface person{
    name:string;
    age?:number; // optional property
    readonly dob:string; // readonly property
    greet():void;
}

let emp:person ={
    name:"John",
    dob:"01-01-1990",
    greet():void{
        console.log("Hello "+this.name + "my date of birth is "+ this.dob);
    }
}
emp.greet();
