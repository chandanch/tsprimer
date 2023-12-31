/**
 * Tuples: A tuple is a typed array with pre-defined length and a type defined for
 * each element or property in the tuple
 */

// tuple with length of 3 and type defined for each property of the tuple
let errorDetails: [string, boolean, number] = ['no value provided', false, 2];

// tuple with optional properties
// to make an property as optional use the (?)
let streamLevel: [string, number, boolean?];

streamLevel = ['eww', 2];

// using spread operator to specify the type for the rest of the values in tuple
let bufferDetails: [string, number, boolean, ...string[]];

bufferDetails = ['f1buffer', 2333, true, 'errr', 'main'];
