/**
 * Mapped types in TypeScript are a powerful feature that allows to create new types
 * based on the properties of an existing type
 * Mapped types transform each property in a type based on the transformation rule
 *
 * Mapped types are particularly useful for creating new types based on existing ones,
 * such as making all properties optional, readonly, or nullable
 */

interface MilPerson {
    name: string;
    age: number;
}

// new type where all properties are optional
/**
 * [Key in keyof Person] loops over each property (name and age) in the Person interface.
 * ?: Person[Key] makes each property optional by adding ? after the property name.
 * Now, PartialPerson will be a type where all properties of Person are optional
 * When you use keyof with a type, it generates a union type containing all the property names of that type.
 * For instance, keyof Person produces a union type "name" | "age".
 */
type PartialPerson = {
    [Key in keyof Person]?: Person[Key];
};

// using the `PartialPerson` type

// Valid: All properties are optional
const partialPerson: PartialPerson = {};

// Valid: Only name is provided
const partialPersonWithName: PartialPerson = { name: 'John' };

const invalidPartialPerson = { name: 'John', age: 30 };

// Making specific fields as required
interface MilPAMProduct {
    id: number;
    name: string;
    description: string;
    category: string;
}

// Making specific  property as required: using the intersection operator
type ProductUpdateRequest = {
    [Key in keyof MilPAMProduct]?: MilPAMProduct[Key];
} & { id: number };

let milProductEdit: ProductUpdateRequest = {
    id: 2,
    name: '',
};
