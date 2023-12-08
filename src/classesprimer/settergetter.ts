/**
 * Use of shorthand syntax for specifying the initial properties of a class
 * With the shorthand syntax we can declare the inital properties as well as
 * inital those properties as well
 */

class Paper {
    constructor(private type: string, private units: number) {}

    convertUnits(rate: number) {
        return this.units * rate;
    }
}
