/**
 * Generics provides us with the flexibility to handle multiple types.
 * It enables the function or a property to accept any primitive or custom type
 * They are like placeholders for types that can be specified when the code is used.
 * This makes generics a great way to write reusable and type-safe code
 * Generics are defined using type parameters, which are placeholder names for types.
 *  These type parameters are enclosed in angle brackets (<>)
 *
 */

// Generic Function Example
// The following function definition defines a generic function echoData
// that takes a single type parameter of type T and returns a value of type T
function echoData<T>(arg: T): T {
    return arg;
}

// We have created a type alias or a cust
type Filter = {
    <T>(item: T[], predicate: (item: T) => boolean): T[];
};

const filter: Filter = (items, predicate) => {
    const results = [];
    for (let i = 0; i < items.length; i++) {
        if (predicate(items[i])) {
            results.push(items[i]);
        }
    }
    return results;
};

console.log(filter([1, 2, 3, 6, 6], (item) => item > 3));
