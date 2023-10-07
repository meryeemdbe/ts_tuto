// Explicit types 
let character :string;
let age :number;
let isLoggedIn :boolean;
console.log("test");

// arrays
let table: string[];

    // cant do table.push('hello');

    // need to initialise array 
    let ninjas: string[] = [];
    ninjas.push('hello world');
    console.log("string array",ninjas);

//Union types for different types to a variable
    // Array variable needs parantheses
    let mixed: (string|boolean|number) [] = [];
    mixed.push('hello');
    mixed.push(33);
    mixed.push(true);
    console.log("mixed", mixed);

    // variable 

    let uuid : string|number;
    uuid = 30;
    console.log("uuid with string|number types ", uuid);
    uuid = "xxxx"; 
    console.log("uuid with string|number types ", uuid);

// Declaring objects
let ninjaOne : object ;

    // in this case we have a large choice in our object and unlimited props 
    ninjaOne = { name : "test", age: 40}
    ninjaOne = { title : "test", course: "IT"}

    // we can create array out of it because array is kind of an object
    ninjaOne = [];

    // if you want to be more specific (remember we use colon : not =)
    let ninjatwo: {
        name: string,
        age:number
    };

    // cannot do just ninjatwo: {}
    // the oject should declare all props no more no less


// any type used mostly when we dont know the type of the variable 

    let test: any = 23;
    test = "Meryem";
    test = true;

    let mixedArray : any[] = [];
    mixedArray.push('test');
    mixedArray.push(22);
    mixedArray.push(false);

    console.log("mixedArray with any type", mixedArray);

    let obj: {
        name: any,
        age: any
    }
    obj = {
        name : "mery",
        age: 22
    }
    obj = {
        name : true,
        age: "Not specified"
    }