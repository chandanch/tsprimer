/**
 * keyof: The keyof operator returns a new type which is a union of all the properties of a type
 */

type GilkerEvents = {
    name: string;
    eventId: number;
    category: 'main' | 'optional';
    covers: boolean;
};

// use of keyof operator which creates a new type
// here the type of KeyGilkenEvents is a literal type(name | eventId | category | covers)
// which is union of all properties of type:

type KeyGilkenEvents = keyof GilkerEvents;

type GilkerNumers = {
    [key: number]: number;
};

// using keyof operator for numeric keys or properties, this creates a new type of number
type GilNumericKeyOf = keyof GilkerNumers;

// using keyof operator for dynamic string key or properties, this creates a new type
// which is a union of string and number
type GilkerStringers = {
    [key: string]: number;
};

type GilStringsKeyOf = keyof GilkerStringers;
