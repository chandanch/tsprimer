/***
 * Functions in TS are syntactially similar to JS functions.
 * TS functions allows us specify types for functions and enables us to specify types for
 * function parameters.
 * These types for the parameters are checked at the compile time when the function is invoked
 */

// declaring a function in TS
function greetings() {
    console.log('Hello Welcome to Game');
}

// function with parameters and types specified for each parameter
function notifyGameSpawn(userName: string, score: Number, level: Number) {
    return `A New player ${userName} with best score of ${score} on level ${level} has been spawned`;
}

// function with type parameters and return type specified to the function
function notifyPlayerDisconnect(userName: string, score: number): string {
    return `Player ${userName} has disconnected Score: ${score}`;
}

// arrow functions
const increaseScore = (score: number): number => {
    return score + score;
};
