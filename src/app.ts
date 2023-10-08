class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number ) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details} `;
  }
}

const in1 =  new Invoice("Safa", "creating a website", 300);
const in2 =  new Invoice("Mery", "creating a website", 234);

// array of only invoices 

let invoices : Invoice[] = [ ];
invoices.push(in1);
invoices.push(in2);
console.log("invoices => ", invoices);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);


// Get inputs of the form elements
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event) => {
  e.preventDefault() ;
  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber ,
  );
})