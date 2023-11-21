/**
 * In JS or TS we have 2 primitive types to indicate non existence of a variable value
 * these 2 types are null and undefined
 */

let currentPlayer: string;

const usersList = [{ name: 'dan' }, { name: 'pan' }];

const userDetails = usersList.find((user) => user.name === currentPlayer);

// Here TS will throw an error at the compile time since userDetails can be undefined
// console.log(userDetails.name);

// get the element by ID
let saveBtn = document.getElementById('saveButton');

// here TS throws an compile time error indicating that savBtn value could be possibly null
// console.log(saveBtn.nodeValue);

// To fix this we can use the union type
let saveBtnUnion: HTMLElement | null = document.getElementById('saveButton');

// check saveBtn is null before usage
if (saveBtn !== null) {
    console.log(saveBtn.nodeValue);
}

// Another way to fix this is by using null assertion
let saveBtnAssertion = document.getElementById('saveButton')!;

console.log(saveBtnAssertion.nodeValue);
