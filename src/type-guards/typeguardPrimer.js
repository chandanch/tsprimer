// Here we use typeof operator to check the type of the argument before we convert to string
// In JS, this is a type guard or type safe mechanism where we first check for the type and then perfom the
// needed action
function convertToString(score) {
    if (typeof score !== 'number') {
        throw new Error('Invalid Type');
    }
    return score.toString();
}
