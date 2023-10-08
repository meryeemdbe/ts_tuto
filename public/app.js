"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        // this.client = "You cant change me";
        return `${this.client} owes $${this.amount} for ${this.details} `;
    }
}
const in1 = new Invoice("Safa", "creating a website", 300);
const in2 = new Invoice("Mery", "creating a website", 234);
// array of only invoices 
let invoices = [];
invoices.push(in1);
invoices.push(in2);
// private : cant access data outise the class , but we can acces it using method of the class format
// readonly you cant modify prop inisde or outside the class
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format);
});
