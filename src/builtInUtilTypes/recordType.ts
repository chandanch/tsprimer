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

// If you know the keys ahead of time, for example,
// a set of specific roles a user can have in an application, and you want to map each role
// to a boolean indicating whether it's enabled or disabled,
// you can do the following:

type FilRoles = 'admin' | 'editor' | 'viewer';

type RoleFlags = Record<FilRoles, boolean>;

// In this case, Roles is a union type of literal strings, and Record<Roles, boolean>
// ensures that for each of these roles, you specify whether it's
// enabled (true) or disabled (false).
const access: RoleFlags = {
    admin: true,
    editor: false,
    viewer: true,
};
