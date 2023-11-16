/**
 * We can specify the type of elements that would be present in any using array types
 * Syntax: let <var_name>: <Type>[]
 */

let scores: number[] = [13, 34, 23];

let playerNames: string[] = ['sam', 'dan', 'peeri'];

type Game = {
    name: string;
    category: string;
    ratings: number;
};

// creating an array of custom types
let games: Game[] = [
    {
        name: 'Dion Fam',
        category: 'Adventure',
        ratings: 4,
    },
    {
        name: 'Hiler',
        category: 'Sports',
        ratings: 3.4,
    },
];
