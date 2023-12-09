/**
 * Setters and Getters are used with private members of a class
 * A setter method updates the property’s value. A setter is also known as a mutator
 * A getter method returns the value of the property’s value. A getter is also called an accessor
 */

class Paper {
    private _refinementLevel: number | undefined;

    constructor(private _paperType: string, private units: number) {}

    convertUnits(rate: number) {
        return this.units * rate;
    }

    // use of a setter to set the value of a private property _refinementLevel
    public set refinementLevel(level: number) {
        // before setting the value the setter allows us to perform validations on the passed data
        if (level <= 0) {
            throw new TypeError('Level must be greater than 0');
        }

        this._refinementLevel = level;
    }

    public set paperType(papType: string) {
        if (papType !== '') {
            this._paperType = papType;
        }
    }

    // use of getter method to obtain the value of the private property
    // with getter method as well we can add a validation to check if the property is initialized
    public get refinementLevel() {
        if (this._refinementLevel === undefined) {
            throw new TypeError('Refinement level is not defined');
        }
        return this._refinementLevel;
    }
}

const biPaper = new Paper('dee', 22);

biPaper.paperType = 'filmemn';
biPaper.convertUnits(33);
// use of setter to set the value
biPaper.refinementLevel = 20;

// use of getter to get the value
console.log(biPaper.refinementLevel, biPaper.paperType);
