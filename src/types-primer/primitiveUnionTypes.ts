/**
 * Use of union types with Primitive types
 */

type stringNumber = Number | string;

function combineParams(param1: stringNumber, param2: stringNumber) {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    } else {
        return param1.toString() + param2.toString();
    }
}

combineParams(2, 3);

combineParams('3', '3');
