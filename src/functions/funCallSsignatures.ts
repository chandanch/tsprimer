/**\
 * Function Call Signatures: Used when a property of custom type is of type function
 * Allows to specify the parameter type and return type for custom properties which would a function
 * This enables TS to check for erorrs at compile time when using the function
 */

// GameAccount has a property named calculateCredits which would be a function
// using function call signatures: () => we can specify the param and its as well as the return type

type GameAccount = {
    playerName: string;
    score: number;
    bonusPoints: number;
    calculateCredits: (promoValue: number) => number;
};

// usage of custom type
let samAccount: GameAccount = {
    playerName: 'dede',
    score: 323,
    bonusPoints: 32,
    calculateCredits: (promoValue: number): number => {
        return (samAccount.score + promoValue) * samAccount.bonusPoints;
    },
};
