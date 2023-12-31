/**
 * Generics provides us with the flexibility to handle multiple types.
 * It enables the function or a property to accept any primitive or custom type
 * They are like placeholders for types that can be specified when the code is used.
 * This makes generics a great way to write reusable and type-safe code
 *
 * Generics are defined using type parameters, which are placeholder names for types.
 * These type parameters are enclosed in angle brackets (<>)
 * Generic code can be reused with different types of data without having to repeat yourself.
 */

// Generic Function Example
// The following function definition defines a generic function echoData
// that takes a single type parameter of type T and returns a value of type T
function echoData<T>(arg: T): T {
    return arg;
}

// usage of echoData which takes a generic type param:
// When the identity function is called, the type of the arg parameter will be
// inferred from the type of the argument that is passed in
const identityResult = echoData<number>(10);

// type alias or a custom type which takes in a generic type parameter
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

// here the type of filter() is inferred based on the type of values passed to the filter()
console.log(filter([1, 2, 3, 6, 6], (item) => item > 3));

// using the shorthand syntax
type Filter2 = <T>(items: T[], predicate: (item: T) => boolean) => T[];

// using a generic Type alias
//The generic type T is defined at the type alias level (Filter3<T>).
// This means when you use Filter3, you have to specify what T is at that point.
type Filter3<T> = {
    (items: T[], predicate: (item: T) => boolean): T[];
};

// example: generic type alias
const filter3: Filter3<number> = (items, predicate): number[] => {
    return [2, 4, 5];
};

console.log(filter3([3, 2], () => true));
