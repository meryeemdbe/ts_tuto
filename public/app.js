"use strict";
const anchor = document.querySelector("a");
// if (anchor) {
//   console.log(anchor.href);
// }
// to make sure the a has items inside in it whe add ! to make sure it s not null
console.log(anchor.href);
// type casting :
// Typscript recongnises the selector element and show you methods related to it anchor.querySelctor..
// Form is of type Html Form element
// const form = document.querySelector('form');
// Form is of type Html Elmenent
// const form = document.querySelector('new-item-form');
// Make it of type Html form elemnt
const form = document.querySelector(".new-item-form");
console.log(form.children);
// Get inputs of the form elements
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
