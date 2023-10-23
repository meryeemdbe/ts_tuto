import { Invoice } from "./classes/Invoice.js";

const in1 = new Invoice("Safa", "creating a website", 300);
const in2 = new Invoice("Mery", "creating a website", 234);

// array of only invoices

let invoices: Invoice[] = [];
invoices.push(in1);
invoices.push(in2);

// private : cant access data outise the class , but we can acces it using method of the class format
// readonly you cant modify prop inisde or outside the class
invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format);
});
