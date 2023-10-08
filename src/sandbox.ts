// Function signature
// with ":"

// Describes the general structure of the function: what are arg it takes and  what tyoe of data it returns

// Example 1 with ":"
let greet: (a: number) => void;

greet = (num: number) => {
  console.log("hala");
};

// Example 2
let calc: (a: number, b: number, c: string) => number;

calc = (n1: number, n2: number, action: string) => {
  if (action == "add") {
    return n1 + n2;
  } else {
    return n2;
  }
};

// CanNot do this 
// calc = (n1: string, n2: boolean, action: string) => {
//     if (action == "add") {
//       return n1 + n2;
//     } else {
//       return n2;
//     }
//   };
  

