/**
 * We can extend an existing interface in TS. This allows an interface
 * to inherit the members from the parent interface
 */

// base or parent interface
interface FlyWing {
    name: string;
    generation: string;
}

// child interface inheriting the properties from FlyWing Interface
interface FlyWingMotar extends FlyWing {
    type: string;
    generatorWing: () => string;
}

// object of Type FlyWingMotar
const freeWing: FlyWingMotar = {
    name: 'FreeWing',
    generation: 'Gen2',
    type: 'Class A',
    generatorWing() {
        return this.name;
    },
};
