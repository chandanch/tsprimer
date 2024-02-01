/***
 * method decorators are functions that can be used to modify or observe methods within a class. 
 * Method decorators are applied to the method declaration using the @decorator syntax
 * Method decorators params:
 * Target:
    Type: Object
    Description: The target object, which is the prototype of the class for instance members, or the constructor function itself for static members. The target represents the class or object on which the method is declared.
    Property Name (or Method Name):

    Type: string | symbol
    Description: The name of the method being decorated. For instance methods, it is the name of the method. For static methods, it is the name of the method on the constructor function.
    Property Descriptor:

    Type: PropertyDescriptor
    Description: An object that contains the property descriptor of the method. The property descriptor provides information about the attributes and behavior of the method. It includes properties like value, writable, enumerable, and configurable.
 */

function MethodDecorator(
    classPrototype: Object,
    methodName: string,
    descriptor: PropertyDescriptor
) {
    console.log(classPrototype);
    console.log(methodName);
    console.log(descriptor);
}

class AutoStubber {
    constructor(public name: string, public duration: number) {}

    calculateAirSpeed() {
        const vel = 12;
        return (vel + 2) * this.duration;
    }

    public get autopilotName() {
        return this.name;
    }

    @MethodDecorator
    displayStub() {
        console.log(`Stub: ${this.name}`);
    }
}
