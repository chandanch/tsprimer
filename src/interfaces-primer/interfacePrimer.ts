/**
 * Interfaces are one of the fundamental concepts in typescript
 * Interfaces allow us to define contracts, contracts define how the class or an object look
 * once the object or class has implemented the interface
 * Interfaces make sure that everything is implemented as expected.
 * Syntax:
 * interface <Interface_name> {
 *      ...Signatures - Properties or method signatures
 * }
 */

// Defining an interface which will be used to create an Object
/**
 * An interface describes the shape of an object in TypeScript.
 * They can be used to provide information about object property names and
 * the datatypes their values can hold to the TypeScript compiler.
 */

// creating an interface
interface Dimension {
    width: number;
    height: number;
    calculateArea(): number;
}

// implementing the interface: adding type annotation to object
// adding an type annotation makes the object to include the properties and methods as
// defined by the interface

const figDim: Dimension = {
    width: 33,
    height: 23.2,
    calculateArea() {
        return this.width + this.height;
    },
};

// using the interface to specify type for an object
const earnDim: Dimension = {
    width: 34.32,
    height: 45.3,
    calculateArea: () => {
        return earnDim.height + earnDim.width;
    },
};
