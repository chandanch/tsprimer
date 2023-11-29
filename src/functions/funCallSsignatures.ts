/**\
 * Function Call Signatures: Used when a property of custom type is of type function
 * Allows to specify the parameter type and return type for custom properties which would a function
 * This enables TS to check for erorrs at compile time when using the function
 * Syntax: (Param: type) => Return Type;
 */

// GameAccount has a property named calculateCredits which would be a function
// using function call signatures: () => we can specify the param and its as well as the return type

type GameAccount = {
    playerName: string;
    score: number;
    bonusPoints: number;
    calculateCredits: (promoValue: number) => number;
};

// usage of custom type and usage of call signature
let samAccount: GameAccount = {
    playerName: 'dede',
    score: 323,
    bonusPoints: 32,
    calculateCredits: (promoValue: number): number => {
        return (samAccount.score + promoValue) * samAccount.bonusPoints;
    },
};

// using an longhand syntax
type ReserveSlotsFn = {
    (name: string, badge: string): string;
};

// using shorthand syntax
type ReserveSlotsFn2 = (name: string, bage: string) => string;

// If some params are optional then we can make use of mutliple funnction call signatures when some params are optional
// as shwon blow the badge property is option in BookStreamSlotFn
type BookStreamSlotFn = {
    (
        playerName: string,
        subscription: string,
        badge: string,
        gamePoints: number
    ): string;

    (playerName: string, subscription: string, gamePoints: number): string;
};

// implementing a function of type BookStreamSlotFn
// here we check if the optional param is present or not
const bookStreamSlot: BookStreamSlotFn = (
    playerName: string,
    subs: string,
    badgeOrGamePoints: string | number,
    gamePoints?: number
) => {
    // check tyoe of badgeOrGamePoints to determine if badge is passed or gamepoints is passed
    if (typeof badgeOrGamePoints === 'string') {
        return `Player ${playerName} with subscription ${subs} with badge ${badgeOrGamePoints} has ${gamePoints} gamepoints`;
    }

    return `Player ${playerName} with subscription ${subs} has ${gamePoints} gamepoints`;
};
