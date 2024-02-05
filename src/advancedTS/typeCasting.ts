/**
 * Typecasting: In some cases TS does not infer the type correctly or it infers a general type,
 * type casting allow us to explicitly specify a type or allow us to specify a specific type.
 *
 * Type casting in TypeScript is the process of explicitly changing the type of a value to another type.
 * This is also known as "type assertion."
 */

/**
 * In this example, someValue is initially of type any,
 * and we use (someValue as string) to cast it explicitly to a string.
 * Then, we access the length property of the string.
 */
let someValue: any = 'Hello, TypeScript!';
let strLength: number = (someValue as string).length;

console.log(strLength); // Outputs: 17

// explicitly specifying the type of scoreField as HTMLInputElement
let scoreField = document.querySelector('#score')! as HTMLInputElement;
console.log(scoreField.value);
