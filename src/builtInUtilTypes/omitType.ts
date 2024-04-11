/**
 * Omit built-in utility type creates a new type by omitting the properties from the given type
 * Syntax:
 * Omit<Type, Keys>
 * - Type: The Type from which the properties needs to be omitted
 * - Keys: The specific keys/properties that needs to be omitted
 */

interface JilManDetails {
    name: string;
    age: number;
    role: string;
    email: string;
    isFalcon: boolean;
}

// here using the Omit type we omit the role, isFalcon and age properties
type LimitedManDetails = Omit<JilManDetails, 'role' | 'isFalcon' | 'age'>;
