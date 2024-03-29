/**
 * We can add additional properties to the prototype object of a class using the
 * decorators based on the logic defined in the decorator function
 */

enum Manufactures {
    airbus = 'airbus',
    boeing = 'boeing',
}

interface IAirPlane {
    name: string;
    duration: number;
    origin?: string;
    manufacturer?: string;
    type?: string;
    initiateAirBus?: () => void;
    initiateBoeing?: () => void;
}

function AircraftManufacturer(manufacturer: Manufactures) {
    return function (target: Function) {
        if (manufacturer === Manufactures.airbus) {
            target.prototype.origin = 'US';
            target.prototype.manufacturer = Manufactures.airbus;
            target.prototype.type = 'Jetter';

            // adding methods to prototype
            target.prototype.initiateAirBus = () => {
                console.log('Initiating Airbus');
            };
        } else {
            target.prototype.orgin = 'FR';
            target.prototype.manufacturer = Manufactures.boeing;
            target.prototype.type = 'Planer';

            // adding methods to prototype
            target.prototype.initiateBoeing = () => {
                console.log('Initiating Boeing');
            };
        }
    };
}

@AircraftManufacturer(Manufactures.airbus)
class Airplane implements IAirPlane {
    constructor(public name: string, public duration: number) {}

    calculateAirSpeed() {
        const vel = 12;
        return (vel + 2) * this.duration;
    }

    public get autopilotName() {
        return this.name;
    }
}

@AircraftManufacturer(Manufactures.boeing)
class Helicoper implements IAirPlane {
    constructor(public name: string, public duration: number) {}

    calculateAirSpeed() {
        const vel = 220;
        return (vel + 2) * this.duration;
    }

    public get autopilotName() {
        return this.name;
    }
}

const filAirplane: IAirPlane = new Airplane('Fill', 3.4);

// accessing the property created by the decorator function
// since the property exists on the prototype and does not exist on the class TS throws error

// The above statement prints the origin as 'US' on the console, since during the runtime, JS
// looks for the property in the current class as well in all of its prototypes

// To fix the issue specify the type of filAirplane object as IAirPlane interface type so that
// TS can recognize that property
console.log(filAirplane.origin);

filAirplane.initiateAirBus ? filAirplane.initiateAirBus() : 'Does not exists';
