/**
 * Discriminated Unions: Enable us to determine the type of the object that we are dealing with
 *
 * Discriminated unions in TypeScript are a way to model data structures
 * that can hold different types of values, known as "variants," in a type-safe
 * and concise manner.
 */

/**
 * Each type within the union includes a common property, known as a "discriminant,"
 * that uniquely identifies the variant.
 */

interface Circle {
    kind: 'circle'; // Discriminant property
    radius: number;
}

interface Square {
    kind: 'square'; // Discriminant property
    sideLength: number;
}

type Shape = Circle | Square;

// TypeScript can leverage the discriminant property to narrow down the type
// within conditional branches or switch statements, providing type safety.
function area(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
    }
}

const foursquare: Square = {
    kind: 'square',
    sideLength: 3,
};

area(foursquare);
