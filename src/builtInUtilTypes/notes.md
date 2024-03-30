## Utility Types in Typescript

Utility types are predefined generic types that can perform common type transformations in TypeScript. These types are built into TypeScript and are used to manipulate other types and create new types. Utility types can create new types by applying transformations to existing types. They are a powerful feature of TypeScript and help avoid code duplication and make it easier to write generic code.

Some built-in Utility

Partial<T>- This type creates a new type that is a partial version of an existing type T. This means that all properties of T become optional. This is useful when working with interfaces that have many properties, but only some of them are required.

Readonly<T> - This type creates a new type that is a read-only version of an existing type T. This means that all properties of T become read-only. This is useful when working with interfaces that should not be modified after creation.

Pick<T, K> - This type creates a new type by picking only the specified properties K from an existing type T. This is useful when working with interfaces that have many properties, but only some of them are needed.

Exclude<T, U> - This type creates a new type by excluding all properties of U from an existing type T. This is useful when working with interfaces that have overlapping properties.

Omit<T, K> - This type creates a new type by omitting the specified properties K from an existing type T. This is useful when working with interfaces that have many properties, but some of them are not needed.

Required<T> - This type creates a new type that is a required version of an existing type T. This means that all properties of T become required. This is useful when working with interfaces that require all properties to be defined.
