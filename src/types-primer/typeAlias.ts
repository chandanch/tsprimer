/**
 * Type Alias: Allows us to define custom type for an object
 * We can define custom types using the type object
 */

// create custom type
type Player = {
    name: string;
    score: Number;
    userId: Number;
};

// using the custom type by specifying it as a type to a variable
let player: Player = {
    name: 'Deded',
    score: 122,
    userId: 2232,
};

// nested objects and custom types
type Engine = {
    rpm: Number;
    model: string;
    base: string;
};

type Vehicle = {
    name: string;
    make: string;
    engine: Engine;
};

const dasCar: Vehicle = {
    name: 'dswd',
    make: 'dede',
    engine: {
        rpm: 2,
        model: 'e',
        base: 'dded',
    },
};
