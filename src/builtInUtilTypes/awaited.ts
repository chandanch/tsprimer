/**
 * Awaited type is used when working promise.
 * Awaited type unwraps the type within the promise and returns the unwrapped type
 * Syntax: Awaited<Promise>:
 * The Awaited keyword here can be thought of a function which extracts type returned by promise
 */

type GenericPrimers = {
    name: string;
    category: string;
};

// filPrimers is a promise which returns an object of type GenericPrimers
const filPrimers: Promise<GenericPrimers> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'FilPrimer',
            category: 'Primer',
        });
    }, 1000);
});

type FilPrimers = Awaited<typeof filPrimers>;
