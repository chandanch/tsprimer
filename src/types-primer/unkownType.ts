/**
 * unkown type: Forces us to check the type of value before it is being used
 */

function calculateScore(score: unknown) {
    return typeof score === 'number'
        ? score * 2
        : 'Invalid arg please provide a valid number';
}

calculateScore(3);
