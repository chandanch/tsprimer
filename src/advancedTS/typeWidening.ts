/**
 * Type widening in TypeScript refers to the automatic broadening of a variable's type
 * to a more general type during certain operations.
 * This process happens during type inference, where TypeScript determines
 * the type of a variable based on its usage.
 */

// TypeScript infers the type of x as number
// Here, x is assigned the value 10, so TypeScript widens the type of x to number.
let x = 10;

// here b is inferred as literal type 'John'
const b = 'John';

// here c is inferred as string since its declared as let and the value might change later
let c = 'John';
