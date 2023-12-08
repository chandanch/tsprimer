/**
 * Use of shorthand syntax for specifying the initial properties of a class
 * With the shorthand syntax we can declare the inital properties as well as
 * inital those properties as well
 */

class Filament {
    constructor(private type: string, private units: number) {}

    convertUnits(rate: number) {
        return this.units * rate;
    }
}

const regFilament = new Filament('reg', 23);

regFilament.convertUnits(1.2);
