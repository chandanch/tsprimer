/**
 * ReadOnly type create a new type and makes all the properties of the type as 'readonly'
 * Syntax:
 * Readonly<Type>
 * - Type: Generic type parameter such as an interface or a type
 * Readonly accepts an existing type and makes the properties as readonly
 */

interface Shopper {
    name: string;
    email: string;
    address: string;
}

// creating a new type using Shopper type and making all properties as readonly
type ExternalDataProcessor = Readonly<Shopper>;

const jilData: ExternalDataProcessor = {
    name: 'dd',
    email: 'ede@ee.com',
    address: 'de 23',
};
