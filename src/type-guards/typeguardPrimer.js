// Here we use typeof operator to check the type of the argument before we convert to string
// In JS, this is a type guard or type safe mechanism where we first check for the type and then perfom the
// needed action
// This enables type checking and makes it type safe and guard against the type checks
function convertToString(score) {
    if (typeof score !== 'number') {
        throw new Error('Invalid Type');
    }
    return score.toString();
}
