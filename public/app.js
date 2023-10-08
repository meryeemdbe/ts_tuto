"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details} `;
    }
}
const in1 = new Invoice("Safa", "creating a website", 300);
const in2 = new Invoice("Mery", "creating a website", 234);
// array of only invoices 
let invoices = [];
invoices.push(in1);
invoices.push(in2);
console.log("invoices => ", invoices);
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
