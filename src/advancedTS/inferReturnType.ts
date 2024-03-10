/**
 * "Infer return type" refers to the process of inferring or deducing
 * the type that a function will return without explicitly specifying it.
 * In TypeScript, the infer keyword within conditional types facilitates this process.
 *
 *
 *
 */

function getGimanDetails() {
    return 'Gilman found';
}

/**
 * T is a generic type parameter representing the input type, which is expected to be a function type.
 * The conditional type checks if T extends a function type with an empty parameter list ().
 * If T is indeed a function type with an empty parameter list, the infer R part captures and infers the return type (R) of that function.
 * If T is not a function type with an empty parameter list, meaning it's not a function, the never type is returned.
 */
type FunctionReturnType<T> = T extends () => infer R ? R : T;

type filanGil = FunctionReturnType<typeof getGimanDetails>;

type jilanGil = FunctionReturnType<boolean>;
