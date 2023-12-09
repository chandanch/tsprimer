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
}

const biPaper = new Paper('dee', 22);

biPaper.paperType = 'filmemn';
biPaper.convertUnits(33);
biPaper.refinementLevel = 20;
