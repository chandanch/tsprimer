/**
 * Interfaces are one of the fundamental concepts in typescript
 * Interfaces allow us to define contracts, contracts define how the class or an object look
 * once the object or class has implemented the interface
 * Interfaces make sure that everything is implemented as expected.
 * Syntax:
 * interface <Interface_name> {
 *      ...Signatures - Properties or method signatures
 * }
 */

// Defining an interface which will be used to create an Object
/**
 * An interface describes the shape of an object in TypeScript.
 * They can be used to provide information about object property names and
 * the datatypes their values can hold to the TypeScript compiler.
 */

// creating an interface
interface Dimension {
    width: number;
    height: number;
    calculateArea(): number;
}

// implementing the interface: adding type annotation to object
// adding an type annotation makes the object to include the properties and methods as
// defined by the interface

const figDim: Dimension = {
    width: 33,
    height: 23.2,
    calculateArea() {
        return this.width + this.height;
    },
};

// using the interface to specify type for an object
const earnDim: Dimension = {
    width: 34.32,
    height: 45.3,
    calculateArea: () => {
        return earnDim.height + earnDim.width;
    },
};

// class implementing interface
/**
 * We can use an interface with a class using the keyword implements, for example:
 * class NameofClass implements InterfaceName {}
 */

interface WindowReSizer {
    height: number;
    width: number;
    coords: {
        xaxis: number;
        yaxis: number;
    };
    isActive: boolean;
    getWindowSpec: () => string;
}

// implemention of interface by class
class BrowserResizer implements WindowReSizer {
    public coords: { xaxis: number; yaxis: number };
    public isActive: boolean;

    constructor(public height: number, public width: number) {
        this.isActive = true;
        this.coords = { xaxis: 0, yaxis: 0 };
    }

    setCoords(xaxis: number, yaxis: number) {
        this.coords.xaxis = xaxis;
        this.coords.yaxis = yaxis;
    }

    getWindowSpec = () => {
        return `Specs are ${this.height} ${this.coords.xaxis}`;
    };
}

// optional members
/**
 * An interface can have optional properties methods which may or may not be implemented
 * by the class or an object
 */

interface RectangleSelect {
    angle: number;
    rotateX: number;
    rotateY: number;
    // optional property
    median?: number;
    // optional property
    hinge?: string;
}

// here the rectPicture obj is annotated with RectangleSelect and does not implement or
// the optional properties
const rectPicture: RectangleSelect = {
    angle: 34.5,
    rotateX: 33.222,
    rotateY: 3.3,
};
