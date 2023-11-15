/***
 * Index Signature: Allows us to define types for properties of an object whose structure is not known
 * till the runtime but we the type for key & value is known
 * Synatax: { [key: KeyType]: ValueType }
 * For example, { [key: string]: string } means the object can have any number of properties with string keys,
 * and all values must be of type string
 */

// Here the properties of EmployeeSalary is not constant, since each employee has a different salary structure
// EmployeeSalary can have any number of properties with key type as string and value type as number
type EmployeeSalary = {
    [key: string]: number;
};

// samersal has 2 properties with value type of number
const samersal: EmployeeSalary = {
    basic: 3000,
    allowance: 40,
};

const deameSal: EmployeeSalary = {
    basic: 3300,
    travel: 444,
};

// Options interface defines that the objects with type Options can have any number of properties
// key must be of type string and value can be of type string or number of boolean
interface Options {
    [key: string]: string | number | boolean;
    timeout: number;
}

// salaryProcessorOptions object implements the Options interface
// it has properties and values of type number, boolean and string
// It also demostrates the usage of union type (|)
const salaryProcessorOptions: Options = {
    timeout: 1000,
    timeoutMessage: 'The request timed out!',
    isFileUpload: false,
};

interface StringByString {
    [key: string]: string | number | undefined;
}

const object: StringByString = {};

const value = object['nonExistingProp'];
console.log(value); // => undefined
