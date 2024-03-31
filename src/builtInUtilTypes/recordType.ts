/**
 * The Record type is a utility type that can be used to combine two types.
 * It allows you to create an object type whose property keys are of a specific type
 * and whose property values are of another specific type.
 *
 * Syntax:
 * Record<Keys, Type>
 * Keys: This is a union of string (or numeric or symbol) literals that represent the property names of the object.
 * Type: This is the type that each property in the object will have.
 */

/**
 * an object where each property represents a user ID (as a string),
 * and each property's value should be a user's name (also as a string).
 * You don't know the user IDs ahead of time, but you want to make sure each ID maps to a string.
 * You can use Record like this:
 */

type UserNames = Record<string, string>;

const users: UserNames = {
    a123: 'Alice',
    b456: 'Bob',
    c789: 'Charlie',
    // This structure ensures that every property is a string mapping to another string.
};
