const anchor = document.querySelector("a")!;
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