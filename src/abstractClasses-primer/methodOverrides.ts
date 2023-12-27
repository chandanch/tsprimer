/***
 * Method Override: Allows child class to override and change the implmentations of methods
 * defined in the parent class
 */

class Fireman {
    constructor(protected type: string) {}

    showFirer() {
        console.log('Showing all firer');
        console.log(`Typer: ${this.type}`);
    }
}

class GlassFireman extends Fireman {
    constructor(public type: string) {
        super('glassFireman');
    }

    // showFirer is overriden in GlassFireman and has its own implementation
    showFirer(): void {
        console.log('This is glass fireman details');
        console.log('Type is ', this.type);
    }
}

class IceFireman extends Fireman {
    constructor(public type: string) {
        super('iceFireman');
    }

    // showFirer is overriden in IceFireman and has its own implementation
    showFirer(): void {
        console.log('Showing Details in Ice Fireman');
        console.log(`Type of Icer:: ${this.type}`);
    }
}
