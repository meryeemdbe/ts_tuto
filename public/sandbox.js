"use strict";
// Explicit types 
let character;
let age;
let isLoggedIn;
console.log("test");
// arrays
let table;
// cant do table.push('hello');
// need to initialise array 
let ninjas = [];
ninjas.push('hello world');
console.log("string array", ninjas);
//Union types for different types to a variable
// Array variable needs parantheses
let mixed = [];
mixed.push('hello');
mixed.push(33);
mixed.push(true);
console.log("mixed", mixed);
// variable 
let uuid;
uuid = 30;
console.log("uuid with string|number types ", uuid);
uuid = "xxxx";
console.log("uuid with string|number types ", uuid);
// Declaring objects
let ninjaOne;
// in this case we have a large choice in our object and unlimited props 
ninjaOne = { name: "test", age: 40 };
ninjaOne = { title: "test", course: "IT" };
// we can create array out of it because array is kind of an object
ninjaOne = [];
// if you want to be more specific (remember we use colon : not =)
let ninjatwo;
// cannot do just ninjatwo: {}
// the oject should declare all props no more no less
// any type used mostly when we dont know the type of the variable 
let test = 23;
test = "Meryem";
test = true;
let mixedArray = [];
mixedArray.push('test');
mixedArray.push(22);
mixedArray.push(false);
console.log("mixedArray with any type", mixedArray);
let obj;
obj = {
    name: "mery",
    age: 22
};
obj = {
    name: true,
    age: "Not specified"
};
