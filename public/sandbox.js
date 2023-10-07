"use strict";
let logDetail = (uid, item) => {
    console.log(`${item} has uid of ${undefined} `);
};
// function with an object parameter
let greet = (user, phrase) => {
    console.log(` ${user.item} with ${user.uid} says ${phrase}  `);
};
let obj;
obj = {
    uid: "122SRTR",
    item: "Ssam"
};
greet(obj, "Hello");
