function calculateElevate(name: string, distance: number) {
    return {
        name,
        distance,
    };
}

/**
 * This is a conditional type FirstArgumentType<T> that takes a type T.
 * It checks if T extends a function type with at least one parameter. If so, it captures and infers the type of the first parameter using infer FirstArgumentType.
 * If T is indeed a function type with at least one parameter, the inferred type of the first parameter is returned (FirstArgumentType).
 * If T is not a function type with at least one parameter, never is returned.
 */
//  the goal is to create a type that infers the type of the first argument of a function
type FirstArgumentType<T> = T extends (
    first: infer FirstArgumentType,
    ...args: any[]
) => any
    ? FirstArgumentType
    : never;

// since the first parameter of calculateElevate is name of type string,
//  gilType will be inferred as string.
type gilType = FirstArgumentType<typeof calculateElevate>;
