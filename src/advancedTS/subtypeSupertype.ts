/**
 * subtypes and supertypes are related to the concept of inheritance and type relationships.
 * TypeScript is a statically typed superset of JavaScript that supports the creation of
 * complex types through interfaces, classes, and other constructs
 *
 * A supertype is a more general or broader type that can represent a larger set of values.
 * It is often used as a base or parent type for more specific types.
 *
 * A subtype is a more specific type that inherits from a supertype.
 * It can have additional properties or methods while maintaining the properties and methods of its supertype.
 */

/**
 * Here, Animal is the supertype, and Bird is a subtype that extends Animal.
 * Bird inherits properties like name and age from Animal and adds its own specific behavior
 * (fly method).
 */
interface Animal {
    name: string;
    age: number;
}

interface Bird extends Animal {
    fly(): void;
}

const myBird: Bird = {
    name: 'Sparrow',
    age: 2,
    fly: () => {
        console.log('Flying...');
    },
};

let animal: Animal = myBird; // OK, Bird is a subtype of Animal
