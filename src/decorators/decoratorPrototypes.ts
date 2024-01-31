/**
 * We can add additional properties to the prototype object of a class using the
 * decorators based on the logic defined in the decorator function
 */

enum Manufactures {
    airbus = 'airbus',
    boeing = 'boeing',
}

function AircraftManufacturer(manufacturer: Manufactures) {
    return function (target: Function) {
        if (manufacturer === Manufactures.airbus) {
            target.prototype.orgin = 'US';
            target.prototype.manufacturer = Manufactures.airbus;
            target.prototype.type = 'Jetter';
        } else {
            target.prototype.orgin = 'FR';
            target.prototype.manufacturer = Manufactures.boeing;
            target.prototype.type = 'Planer';
        }
    };
}

@AircraftManufacturer(Manufactures.airbus)
class Airplane {
    constructor(public name: string, public duration: number) {}

    calculateAirSpeed() {
        const vel = 12;
        return (vel + 2) * this.duration;
    }

    public get autopilotName() {
        return this.name;
    }
}

const filAirplane = new Airplane('Fill', 3.4);

// accessing the property created by the decorator function
// since the property exists on the prototype and does not exist on the class TS throws error
console.log(filAirplane.orgin);
// The above statement prints the origin as 'US' on the console, since during the runtime, JS
// looks for the property in the current class as well in all of its prototypes
