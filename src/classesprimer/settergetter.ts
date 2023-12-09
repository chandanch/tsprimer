/**
 *
 */

class Paper {
    constructor(private _paperType: string, private units: number) {}

    convertUnits(rate: number) {
        return this.units * rate;
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
