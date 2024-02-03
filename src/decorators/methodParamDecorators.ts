/**
 * 
    Method parameter decorators in TypeScript are functions that can be used to 
    observe or modify the parameters of a method. 
    Parameter decorators are applied to the parameters of a method 
    using the @decorator syntax. They receive three parameters: the target 
    object (the prototype for instance methods, or the constructor function for 
    static methods), 
    the name of the method, and the index of the parameter.

    The parameters of a method parameter decorator function are as follows:

        Target:

        Type: Object
        Description: The target object, which is the prototype of the class for instance methods, or the constructor function itself for static methods. The target represents the class or object on which the method is declared.
        Method Name:

        Type: string | symbol
        Description: The name of the method containing the decorated parameter.
        Parameter Index:

        Type: number
        Description: The index of the decorated parameter within the parameter list of the method.
 */

function ParameterDecorator(
    target: Object,
    methodName: string,
    parameterIndex: number
) {
    console.log(
        `Decorator applied to parameter ${parameterIndex} of method ${methodName}`
    );
    console.log(`Target class:`, target);
}

class AirFlowCraft {
    constructor(public name: string, public duration: number) {}

    calculateAirSpeed() {
        const vel = 12;
        return (vel + 2) * this.duration;
    }

    public get autopilotName() {
        return this.name;
    }

    public calculateLiftOff(@ParameterDecorator velocity: number) {
        return velocity * 3 + this.duration;
    }

    @MethodDecorator
    displayStub() {
        console.log(`Stub: ${this.name}`);
    }
}
