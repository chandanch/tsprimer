/**
 * Never types are assigned to function
 * a function with never type indicates that the function will never complete i.e.
 * the function might error out or throw an error
 */

function crashGame(): never {
    throw new Error('Game Crashed');
}
