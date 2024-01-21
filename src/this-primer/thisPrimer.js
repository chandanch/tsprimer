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
};

function filgger() {
    // this refer to global or window object here
    console.log(this);
}
