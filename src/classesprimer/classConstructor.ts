/**
 * Constructor is a special function in TS that is called
 * when creating an instance or object of a class
 */
class PlayGame {
    // defining properties of a class with initail valuew
    name: string;
    isStarted: boolean;

    // constructor method
    constructor(name: string, isStarted: boolean) {
        this.name = name;
        this.isStarted = isStarted;
    }

    // defining methods of a class
    showGameInfo(): string {
        return `Status: ${this.isStarted ? 'Started' : 'Play Now'} Name: ${
            this.name
        }`;
    }
}

// instance of PlayGame
// when creating an instance of playgame the constructor function is called i.e.
// when we add the () right after the class name i.e. PlayGame(), TS calls the constructor
const marfio = new PlayGame('Marfio Afventure', false);
console.log(marfio.showGameInfo());
