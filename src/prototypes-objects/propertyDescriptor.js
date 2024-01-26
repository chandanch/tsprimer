/**
 * Property descriptors in JavaScript are a way to get or set additional details about a property on an object.
 * They provide control over the behavior of object properties beyond their values.
 * There are two types of property descriptors: data descriptors and accessor descriptors.
 */

/**
 * Data descriptors have a value and can be writable, configurable, and enumerable:
 *  value: The value associated with the property (can be any JavaScript value).
    writable: A boolean indicating if the value of the property can be changed.
    configurable: A boolean indicating if the property descriptor can be changed and if the property can be deleted from the object.
    enumerable: A boolean indicating if the property shows up during enumeration of the properties on the object (e.g., in a for...in loop).
 */

let obj = {};
Object.defineProperty(obj, 'property1', {
    value: 42,
    writable: false,
    enumerable: true,
    configurable: true,
});

console.log(obj.property1); // 42
obj.property1 = 77;
console.log(obj.property1); // still 42, because writable is false

// Modifying an Existing Property
var obj = { property1: 42 };
Object.defineProperty(obj, 'property1', {
    writable: false,
});

obj.property1 = 77;
console.log(obj.property1); // still 42

/**
 * Accessor descriptors don’t store a value directly but instead define getter and setter functions
 *  get: A function that serves as a getter for the property, or undefined if there is no getter.
    set: A function that serves as a setter for the property, or undefined if there is no setter.
    configurable: Same as in data descriptors.
    enumerable: Same as in data descriptors.
 */

var obj = {
    internalValue: 0,
};

Object.defineProperty(obj, 'property1', {
    get() {
        return this.internalValue;
    },
    set(value) {
        this.internalValue = value * 2;
    },
    enumerable: true,
    configurable: true,
});

obj.property1 = 3;
console.log(obj.property1); // 6

// To get the property descriptors of an object,
// we can use Object.getOwnPropertyDescriptor():
var obj = { property1: 42 };
// This will log the descriptor of property1, showing its value, writability, enumerability, and configurability.
var descriptor = Object.getOwnPropertyDescriptor(obj, 'property1');
console.log(descriptor);
