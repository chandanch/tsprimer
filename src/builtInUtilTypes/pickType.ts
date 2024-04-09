/**
 * Pick utility type enables us to create a new type by picking specific properties from
 * existing type
 * Syntax:
 * Pick<Type, Keys>
 *  - Type: The type from which the properties will be picked from
 *  - Keys: The specific keys that needs to be extracted
 */

interface HilBilling {
    biller: string;
    datetime: string;
    value: number;
    currency: string;
}

// use of pick type to extract value and currency properties from interface
// this creates a new type with value and currency properties
type HilOrder = Pick<HilBilling, 'value' | 'currency'>;

const hilOrder: HilOrder = {
    value: 222,
    currency: '$',
};
