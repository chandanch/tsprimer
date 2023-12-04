/**
 * A class is a blue print or a template for creating objects.
 * Class is used to create reusable components. It is a group of objects which have common properties
 * Syntax:
 * class <class_name>{    
        field;    
        method;    
    }     
 */

// Player class

class Gamer {
    // defining properties of a class with initail valuew
    name: string = '';
    score: number = 0;

    // defining methods of a class
    showPlayerInfo(): string {
        return `Score: ${this.score} Name: ${this.name}`;
    }
}
