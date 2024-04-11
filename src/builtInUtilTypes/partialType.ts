/**
 * Partial Utility type makes all the properties of an interface or a type as optional
 * Syntax:
 * Partial<Type>
 * The partial keyword accepts a generic type parameter and returns a new type with all
 * properties marked as optional (?)
 */

interface JislManDetails {
    name: string;
    age: number;
    role: string;
    email: string;
}

// creating a new type with all properties as optional using Partial utility type
type PartailJisMan = Partial<JislManDetails>;

const jislLogManDetails: PartailJisMan = {
    name: 'Hiulan',
    email: 'dj@45.cos',
};
