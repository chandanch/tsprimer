/**
 * Inheritence: Allows a class to obtain or inherit the properties and methods from a parent class
 *
 * Note: A class can inherit properties and methods only from one class
 * i.e. a class can have only one parent
 * TS does not support multiple inheritence
 */

// parent class: User

class User {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

// Author class which extends or inherits from User class
// the author class inherits the name, email and age properties from User
class Author extends User {
    books;
    genere: string;

    // subclass constructor
    constructor(
        name: string,
        email: string,
        age: number,
        books: string[],
        genere: string
    ) {
        // calling the parent class or base class constructor using super()
        // the base class constructor needs to be called with its required params
        // when defining the constructor in subclass
        super(name, email, age);
        this.books = books;
        this.genere = genere;
    }
}

// creating an instance of Author Class
const samAuthor = new Author(
    'Sam',
    'sam@ee.com',
    2,
    ['nice', 'bookers', 'samer'],
    'mudpinic'
);

// as shown below we can access the author class property (genere) as well as Parent class
// property (age)
console.log(samAuthor.genere, samAuthor.age);
