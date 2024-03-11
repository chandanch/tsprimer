/**
 * The satisfies operator is used in type assertions to perform a check
 * where you want to ensure that a value or object structure conforms to a specific type
 */

/**
 * Record type is a utility type that allows you to create an object type
 * with specified keys and a uniform value type. It's particularly useful when you need to
 * define an object type with known keys and a consistent value type across all keys
 */
type FruitPrices = Record<string, number>;

const prices: FruitPrices = {
    apple: 1.99,
    banana: 0.99,
    orange: 2.49,
};

type ColorProperties = 'red' | 'green' | 'blue';
type RGBColor = [red: number, green: number, blue: number];

const colorPalete = {
    red: [255, 0, 1],
    green: '#45edf5',
    blue: [255, 255, 0],
} satisfies Record<ColorProperties, RGBColor | string>;
