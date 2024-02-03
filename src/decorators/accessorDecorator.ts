/**
 * accessor decorators are functions that can be used to
 * observe, modify, or replace the behavior of getters and setters for class properties
 * Accessor decorators are applied to the accessors of a class using the @decorator syntax
 * They recieve 3 parameters:
 *  - target object: (the prototype of the class for instance accessors or the constructor function itself for static accessors
 *  - name of the accessor
 *  - property descriptor
 */
function AccessorDecorator(
    target: Object,
    accessorName: string,
    propertyDescriptor: PropertyDescriptor
) {
    console.log(target);
    console.log(accessorName);
    console.log(propertyDescriptor);
}

class AxiomPilot {
    // add property decorator to it
    @PropertyDecorator
    public name: string;

    constructor(name: string, public duration: number) {
        this.name = name;
    }

    calculateAirSpeed() {
        const vel = 12;
        return (vel + 2) * this.duration;
    }

    public get autopilotName() {
        return this.name;
    }
}
