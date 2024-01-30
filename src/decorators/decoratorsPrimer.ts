/**
 * Decorators are functions that are applied to classes, methods, properties, or parameters
 * In TypeScript, decorators are a way to modify or annotate classes, methods, properties, or parameters at design time
 *
 */

// the parameters of the decorator function varies based on where the decorator function is attached
// decorators can be attached to class, method of a class, property of a class or to accessor property
function decoPilot(constructor: Function) {
    console.log('Airpilot lockeed');
    console.log(constructor);
}

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
