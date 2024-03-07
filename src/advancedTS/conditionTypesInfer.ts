/**
 * The infer keyword in TypeScript is used within conditional types to capture and
 * infer types. It allows you to extract the type of a variable within a type
 * and use it elsewhere in the same type expression.
 * Type Parameter:
 * T is a generic type parameter representing the input type. Conditional Type:
 * The conditional type begins with T extends (infer E)[] ? E : T
 * It checks whether the type T extends an array type (infer E)[].
 * infer Keyword:
 * The infer keyword is used within the conditional type to infer the element type (E) of the array.
 * It allows TypeScript to capture the type of individual elements within the array.
 * If T extends an array type (infer E)[], meaning T is an array, the conditional type evaluates to E,
 * which represents the element type of the array.
 *
 * If T does not extend an array type, the conditional type evaluates to T itself,
 * indicating that T is not an array.
 */

type ArrayElementType<T> = T extends (infer E)[] ? E : T;

type gileper = ArrayElementType<string[]>; // string type

type nilper = ArrayElementType<number[]>; // number type

type fileper = ArrayElementType<{ name: string; id: number }>; // {name: string, id: number} type
