// Define a function 
let greet = () => {
    console.log("Hello");
}

// Decalre a functin 
let greet1 : Function;
greet1 = () => {
    console.log("Hello");
}

// Example 
let add = (a:number, b:number, c?: number | string) => {
console.log(a+b);
console.log(c, "is optional");
}
// Either Optional with ? or default value, not both
let add2 = (a:number, b:number, c: number |string = 10)  => {
    console.log("c is 10 unuless changed",c   );
}
add2(1,2)
add2(1,2,20)

// Inferring function type  result is taking the value of Function with RETURN
let  minus = (a:number, b:number) => {
    return a+b;
}
let result = minus(2,4)
console.log("result is taking the type of minus return", result);

// When bigger functions we specify the return type explecitely 
let  minus2 = (a:number, b:number) : number => {
    return a+b;
}

// Functions returning nothing -> Void type 
let voidfun = (a: number) : void => {
    console.log("Void function ");
}