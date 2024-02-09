/**
 * Union Types: Allows us to define a new type which is an union of two or more types
 * With Union types an object can have properties of either of the type or both
 * It must have all the properties of a one type
 */

// Structure of SportsCar type
type SportsCar = {
    name: string;
    type: string;
    revs: number;
};

// Structure of Luxury type
type LuxuryCar = {
    name: string;
    seats: number;
    info: string;
};

// Union of SportsCar and Luxury car type
type SportsLuxuryCar = SportsCar | LuxuryCar;

// specifying the type as union type
// ciaSportsCar is of SportsCar type and has all the properties of sports car
const ciaSportsCar: SportsLuxuryCar = {
    name: 'Cio',
    type: 'V8',
    revs: 3,
};

console.log(ciaSportsCar);

// gionLuxuryCar is of LuxuryCar type since it has all the properties of luxury car
const gionLuxuryCar: SportsLuxuryCar = {
    name: 'gion',
    seats: 3,
    info: 'ddd',
};

console.log(gionLuxuryCar);

// hybrid car has all the properties of sports and luxury car
const hybridCar: SportsLuxuryCar = {
    type: 'ded',
    name: 'dwd',
    revs: 4,
    seats: 4,
    info: '3e3e',
};

console.log(hybridCar);

// evCar just has the name property hence TS is not able to determine the exact type for evCar
// In order to determine the type it must either include properties of SportsCar or LuxuryCar or both
// const evCar: SportsLuxuryCar = {
//     name: 'dww',
//     type: 'we',
// };
