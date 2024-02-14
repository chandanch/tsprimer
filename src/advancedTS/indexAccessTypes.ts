/**
 * Index Access Types: Allows us to create sub-types from the parent or main type
 *
 */

// Creating an parent type
type ProductAPIResponse = {
    name: string;
    description: string;
    category: {
        name: string;
        id: number;
    };
    subCategory: {
        name: string;
        id: number;
        categoryId: number;
        isActive: boolean;
    };
    rating: number;
    vendors: {
        name: string;
        address: string;
        rating: number;
    }[];
    isActive: boolean;
};

// creating a new subtype from the parent or root type
// to create an subtype we use the index i.e. the property name similar to access object properties
type ProductCategoryAPIResponse = ProductAPIResponse['category'];

// use of subtype in creating a new object
const FoodProduct: ProductCategoryAPIResponse = {
    name: 'Foods',
    id: 3,
};
