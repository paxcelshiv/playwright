class logixTest{
    fibanacciSeries(n:number): void{
        let a=0, b=1;
        console.log(a, b);
       // console.log(b);
        let c =a+b;
        for(let i=2; i< n; i++){
            console.log(c);
            a=b;
            b=c;
            c=a+b;
        }
    }
}

let test:logixTest = new logixTest();
test.fibanacciSeries(10);

const arr: any[] = [1,2,3,4,5,6,7,8,9,"String"];
arr.forEach(element => {
    console.log("Element is: "+element);
});