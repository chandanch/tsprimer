/**
 * Decorators are functions that are applied to classes, methods, properties, or parameters
 * In TypeScript, decorators are a way to modify or annotate classes, methods, properties, or parameters at design time
 *
 */

// the parameters and the no. of parameters of the decorator function varies based on where the decorator function is attached
// decorators can be attached to class, method of a class, property of a class or to accessor property

// since this is attached to the class, this decorator recieves the class as the first argument
function decoPilot(constructor: Function) {
    // this decorator is invoked when the class is defined at the runtime
    console.log('Airpilot lockeed');
    console.log(constructor);
}

// bind decorator to the class using the @ keyword
@decoPilot
class AutoPilot {
    constructor(public name: string, public duration: number) {}

    calculateAirSpeed() {
        const vel = 12;
        return (vel + 2) * this.duration;
    }

    public get autopilotName() {
        return this.name;
    }
}
