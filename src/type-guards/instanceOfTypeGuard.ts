/**
 * instanceOf type guard is used to check if an object is an instance of a specific class
 * or a subclass
 * By default TS will automatically narrow down the type of the object in a specific block
 * and would allow us to access only those properties and methods of the infered class
 */

abstract class HiProduct {
    constructor(public name: string, public price: number) {}

    abstract calculateRewards(points: number): number;
}

class HiElectronic extends HiProduct {
    constructor(name: string, price: number, private units: number) {
        super(name, price);
    }

    calculateRewards(points: number): number {
        return points * 34 + this.price;
    }

    calculateTotalUnits(): number {
        return this.units * 2;
    }
}

class HiClothers extends HiProduct {
    constructor(name: string, price: number, private materialType: string) {
        super(name, price);
    }

    calculateRewards(points: number): number {
        return points * 12 + this.price;
    }

    getMaterailType(): string {
        return this.materialType;
    }
}

function displayProductDetails(product: HiProduct) {
    console.log(`Product Name: ${product.name}, Price: ${product.price}`);

    // check if the product is instance of a specific class
    if (product instanceof HiClothers) {
        console.log(product.getMaterailType());
    } else if (product instanceof HiElectronic) {
        console.log(product.calculateTotalUnits());
    }
}
