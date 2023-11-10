/**\
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
