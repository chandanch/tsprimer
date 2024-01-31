/***
 * Decorator factories are similar to decorator function, except that the decorator
 * factory returns an anonymous function instead of directly executing the decorator function
 * The function returned by the decorator factory is then executed by TS
 *
 */

function StubCreation(stubName: string) {
    return function (constructor: Function) {
        console.log(`Stub Name: ${stubName}`, constructor);
    };
}

// binding decorator factory to class
@StubCreation('StubberCre')
class Stubber {
    constructor(public name: string, public duration: number) {}

    calculateAirSpeed() {
        const vel = 12;
        return (vel + 2) * this.duration;
    }

    public get autopilotName() {
        return this.name;
    }
}

const replStubber = new Stubber('Repl', 3);
