/***
 * Abstract Class: An abstract acts as a template, in which the dervied classes implement the template
 * Abstract classes are mainly for inheritance where other classes may derive from them.
 * We cannot create an instance of an abstract class
 * Syntax: abstract class <class_name> {...abstract members}
 * Abstract members can be properties or methods, abstract members does not contain any
 * implementation but contain only the signature or definition.
 * abstract members are declared with abstract keyword
 */

// custom type
type Genomers = {
    name: string;
    lifeSpan: number;
}[];

// creation of abstract class
abstract class Fogger {
    // abstract property
    protected abstract genomers: Genomers;

    // protected constructor
    // the constructor is protected to prevent its access from instances of child class
    protected constructor(private variant: string) {}

    // common method to add genomers
    public addGenomer(genomers: Genomers) {
        if (Array.isArray(genomers)) {
            for (const genomer of genomers) {
                this.genomers.push(genomer);
            }
        }
    }
}

// class inheriting from abstract class
// the dervied class must implement the abstract member genomers
class MailFogger extends Fogger {
    protected genomers: Genomers = [];
}

// class derviced from abstract class
class HailFogger extends Fogger {
    protected genomers: Genomers = [];

    // defining the constructor
    constructor(variant: string, private hailType: string) {
        // calling the super class (abstract class) constructor
        super(variant);
    }
}

class JileFogger extends Fogger {
    protected genomers: Genomers = [];

    /**
     *
     */
    constructor(public jileType: string) {
        // passing a static value to super class constructor so that we always
        // create an instance of `jile` variant. this prevents creating an instance of JileFogger
        // with a different variant. Always when we create an instance of JileFogger it will have the variant as jile
        super('jile');
    }
}

const hail = new HailFogger('ddd', 'haillers');

// use of common method in instance of HailGenomer
hail.addGenomer([
    {
        name: 'Dilik Genomer',
        lifeSpan: 3,
    },
]);

// creating an instance of JileFogger
const jile = new JileFogger('jills');
