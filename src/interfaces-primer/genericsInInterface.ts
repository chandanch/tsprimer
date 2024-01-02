/**
 * Generics can be specified as type parameters to interfaces.
 * This makes the interface flexible and can be used with multiple types, including
 * the support for custom types
 */

// interface with generic types
interface AutoMobile<Type, Color, Brand> {
    name: string;
    type: Type;
    color: Color;
    brand: Brand;
    description: string;
}

// creating an object that implements the generic interface
// with string type for all genric params
const gastroCar: AutoMobile<string, string, string> = {
    name: 'dee',
    type: 'e3',
    color: 'red',
    brand: 'Gastro',
    description: 'Gaastro car man',
};

// creating an object that implements the generic interface
// with string for type, number for color and boolean for brand
const notierCar: AutoMobile<string, number, boolean> = {
    name: 'nto',
    type: 'Notio',
    color: 23222,
    brand: false,
    description: 'd',
};

// implementing the generic interface in a class
class ElemCar implements AutoMobile<string, number, string> {
    public type: string = 'ElemCar';

    constructor(
        public name: string,
        public color: number,
        public brand: string,
        public description: string
    ) {}
}
