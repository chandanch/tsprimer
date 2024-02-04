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

// declaration -1
// let scores: number[] = [2, 3, 4, 5]

// declaration -2
// let scores: object = [2, 4, 5]

/**
 * In 1, Here scores is of number[] is an array type, specifically an array of numbers
 * In 2, Here scores is of object is a more general type that represents any non-primitive value.
 * While the assignment is syntactically valid, it's not ideal because
 * it loses the specificity of the array type. The variable scores is of type object,
 * which is a supertype of arrays. It would be better to use a more specific type,
 * such as number[] or Array<number>.
 */
