/**
 * Inheritence: Allows a class to obtain or inherit the properties and methods from a parent class
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
    books: string[] = [];
    genere: string = '';
}

// creating an instance of Author Class
const samAuthor = new Author('Sam', 'sam@ee.com', 2);

// as shown below we can access the author class property (genere) as well as Parent class
// property (age)
console.log(samAuthor.genere, samAuthor.age);
