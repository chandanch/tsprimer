/**
 * Conditional Types: Enables us to add condition to Typescripts type system
 * It enables us to assign/define a type based on a condition
 * Syntax:
 * TypeA extends TypeB ? TrueType : FalseType
 * Conditional types in TypeScript provide a way to conditionally select one of two possible types based on a condition expressed as a type relationship.
 *
 */

interface HigManler {
    name: string;
    higs: number;
}

interface MigManler extends HigManler {
    hops: number;
    createMig: (discs: number) => void;
}

// use of conditional type to define type based on the condition
// use the extends keyword to check if it extends a specific interface
type HyManler = MigManler extends HigManler ? string : number;
