/**
 * Implementing Multiple Interfaces:
 * A Class can implement multiple interfaces, this enables us to build or construct
 * complex class from multiple interfaces
 * This technique allows a class to implement the properties & methods from multiple interfaces
 */

// Baserim interface, simple interface
interface Baserim {
    name: string;
    id: number;
}

// interface 2
interface Mainerim {
    description: string;
    values: Array<number>;
}

// A class implementing multiple interfaces
class PacifRim implements Baserim, Mainerim {
    constructor(
        public name: string,
        public id: number,
        public description: string,
        public values: Array<number>
    ) {}
}

const pasRim = new PacifRim('Pas', 2, 'pas', [2, 2]);
