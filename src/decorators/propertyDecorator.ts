/**
* In TypeScript, property decorators are functions that can be used to observe, 
* modify, or replace the behavior of class properties. 
* Property decorators are applied to the properties of a class using the @decorator syntax.
* They receive two parameters: 
    - the target object (the prototype of the class for instance properties or the constructor function itself for static properties) 
     - name of the property
 * 
 */

function PropertyDecorator(classPrototype: Object, propertyName: string) {
    console.log(classPrototype);
    console.log(propertyName);
}

class PropsPilot {
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
