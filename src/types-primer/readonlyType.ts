/**
 * readonly: Makes an variable such as array or tuple as immutable.
 * readonly prevents the variable or a property from re-assignment
 * let <var_name>: readonly <Type> = <Value>
 */

// creation of a immutable or readonly array
let gameLevels: readonly number[] = [1, 2, 3];

// throws an error at the compile time
// gameLevels.push(4)
