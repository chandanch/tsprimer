/**
 * Enum Types: Allows us to enumerate over the values of data type
 * Enums allow a developer to define a set of named constants.
 * Using enums can make it easier to document intent, or create a set of distinct cases.
 * TypeScript provides both numeric and string-based enums.
 *
 */

// numeric enum with intial value
//  we have a numeric enum where Up is initialized with 1.
// All of the following members are auto-incremented from that point on.
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
