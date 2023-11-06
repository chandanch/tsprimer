/***
 * Object Types - Enables specifying types for objecgt
 */

let car: {
    name: string;
    color: string;
    price: number;
};

car = {
    name: 'dw',
    color: 'd',
    price: 23,
};

// Making property as optional with object type
let article: {
    name: string;
    author: string;
    url?: string;
};
