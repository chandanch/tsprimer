/**
 * The typeof operator in TypeScript, similar to JavaScript, is used to determine the type of a variable or an expression.
 * However, in TypeScript typeof can also be used in type contexts to create types based on the type of a variable or a property
 */

const person = {
    name: 'John',
    age: 30,
};

type Person = typeof person;

// Now, `Person` is a type with the structure of `person`:
const newPerson: Person = {
    name: 'www',
    age: 3,
};

function greet(name: string) {
    return `Hello, ${name}!`;
}

type GreetFunctionType = typeof greet;
// GreetFunctionType is now the type (name: string) => string

let anotherPerson = {
    name: 'Jane',
    age: 25,
    email: 'jane@example.com',
};

let anotherPersonName: typeof anotherPerson.name; // Type is string

anotherPersonName = 'Alice'; // Valid
// anotherPersonName = 42; // Error: Type 'number' is not assignable to type 'string'.
