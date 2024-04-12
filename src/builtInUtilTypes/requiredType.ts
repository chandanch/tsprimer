/**
 * Required utility type creates a new type by taking in existing type
 * and making all the properties of the exisiting type as required
 * The required type accepts a generic type parameter which is an existing type and
 * returns a new type with properties as required
 * Synatax:
 * Required<Type>
 * - Type: existing type such as an interface or type
 * Returns a new type making all properties as required
 */

interface FilGomUser {
    name?: string;
    email?: string;
    address?: string;
}

// creation of a new type using Required, all the optional properties in FilGomUser
// is made as required in RequiredFilGomUser type
type RequiredFilGomUser = Required<FilGomUser>;

// use of combination of Pick and required
// here we create a new type by picking email and name properties and make them as required
type RegisteredFilGomUser = Required<Pick<FilGomUser, 'email' | 'name'>>;
