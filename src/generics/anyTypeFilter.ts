/***
 * Custom Filter function that take array of any type and a predicate function
 */

function filterItems(items: any[], predicate: Function) {
    const filteredItems = [];

    for (let i = 0; i < items.length; i++) {
        if (predicate(items[i])) {
            filteredItems.push(items[i]);
        }
    }

    return filteredItems;
}

// passing an array of numbers and predicate which check if number is > 5
filterItems([12, 3, 4, 5, 6, 7, 8], (number: number) => number > 5);

// passing an array of strings and filter by badge fam
filterItems(['dsd', 'faam', 'fam', 'faa,ms'], (item: string) => item === 'fam');

// Problem: Here the filterItems() takes any type of array and its not type safe
// There is no check on if the correct type of array and the correct predicate function
// is passed  based on the array type
