/**
 *
 * Every JavaScript object has a property called prototype.
 * This is a reference to another object and contains common properties and methods
 * that other objects can use
 *
 * The prototype mechanism is a way of achieving inheritance in JavaScript.
 * Objects can inherit properties and methods from their prototype
 *
 * When you try to access a property or method of an object,
 * JavaScript first looks at the object itself. If it doesn't find it there,
 * it looks at the object's prototype, then the prototype's prototype, and so on,
 * up the prototype chain until it either finds the property/method or reaches
 * the end of the chain.
 *
 */

/**
 *
 * @param {string} name
 * @param {number} rating
 */
function Albums(name, rating) {
    this.name = name;
    this.rating = rating;

    Albums.prototype.getDetails = () => {
        return `${this.name} ${this.rating}`;
    };
}

const samles = new Albums('samels', 3.4);
