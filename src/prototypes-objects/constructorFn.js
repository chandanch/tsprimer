/***
 * Constructor functions are invoked using the new keyword.
 * Constructor functions always create an empty object once as a first step after invocation
 */

function Organizer(name, category) {
    // All properties and methods must be created using this keyword
    // properties of function
    this.name = name;
    this.category = category;

    // method of constructor functions
    // note: methods of the constructor function are attached directly to the object
    // instead of attaching to its prototype
    this.displayDetails = () => {
        console.log(this.name, this.category);
    };
}

// invoking the constructor function using new keyword
const gilOrger = new Organizer('Flated', 'brim');
