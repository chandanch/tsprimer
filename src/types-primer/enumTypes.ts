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

// enums without initializers
// er would have the value 0, ww would have 1 and so on
enum Directions {
    er,
    ww,
    rr,
    ll,
}

// string enums
enum Roles {
    admin = 'Admin',
    player = 'Player',
    composer = 'Composer',
}

// use of enum type when creating custom type or type aliasa
type GamePlayer = {
    name: string;
    score: number;
    role: Roles;
};

const samPlayer: GamePlayer = {
    name: 'sam',
    score: 23,
    role: Roles.admin,
};
