// Aliases
type StrOrNum = number | string;
type ObjWith = { uid: StrOrNum; item: string }

let logDetail = (uid: StrOrNum,  item: string) => {
  console.log(`${item} has uid of ${undefined} `);
};

// function with an object parameter
let greet = (user: ObjWith , phrase: string) => {
  console.log(` ${user.item} with ${user.uid} says ${phrase}  `);
};

let obj : ObjWith
obj = {
  uid: "122SRTR",
  item: "Ssam"
};

greet(obj, "Hello");
