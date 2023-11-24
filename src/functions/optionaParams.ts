/**
 * In Ts we can make a parameter of a function as default or optional
 *
 * Default parameters: are the parameters which are required or
 * which needs to be passed during function invocation
 *
 * Optional parameters: are parameters which are not required or
 * which are optional and need not be passed during function invocation
 */

// In the below function bonus is an optional parameter marked with (?)
function computePlayerScore(
    score: number,
    level: number,
    bouns?: number
): number {
    if (bouns) {
        return score + level + bouns;
    } else {
        return score + level;
    }
}

// when calling the computePlayerScore bonus is optional param
// TS does not throw error if the bonus param is not passed
computePlayerScore(23, 3, 100);

computePlayerScore(234, 3);
