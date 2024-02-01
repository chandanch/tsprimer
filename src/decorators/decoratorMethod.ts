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
