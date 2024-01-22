/**
 * Rule of Thumb:
 * object's method: this -> object
 * function: this -> global(node.js) or browser(web app)
 * As the rule of thumb states:
 * this within the object's method always points to the object
 * this within a normal function always points to window object if the function runs in the browser,
 * if its running on node.js runtime then it points to Global object
 *
 *
 */

const booker = {
    title: 'This is a bookers',
    read() {
        // this refers to booker object here
        console.log(this);
    },
    authors: ['Sam', 'Dean', 'Pean'],

    displayAuthors() {
        this.authors.forEach(function (author) {
            // this points to the window/global object here since the foreach function
            // is bound to the window scope
            /**
             * The function passed to forEach is a regular anonymous function.
             * In JavaScript, regular functions invoked in such a way (not as methods of an object)
             * have their this context set to the global object (like window in a browser environment)
             * or undefined if the code is running in strict mode
             */
            console.log(`${this.title} - ${author}`);
        });
    },

    printAuthors() {
        this.authors.forEach((author) => {
            /**
             * Arrow functions do not have their own this context;
             * they inherit this from the enclosing lexical context.
             * In this case, the arrow function inherits this from the printAuthors method,
             * which is bound to the booker object.
             * Therefore, this.title inside the arrow function correctly refers to the
             * title of the booker object
             */
            console.log(`${this.title} - ${author}`);
        });
    },
};

booker.displayAuthors();
booker.printAuthors();

function filgger() {
    // this refer to global or window object here
    console.log(this);
}
