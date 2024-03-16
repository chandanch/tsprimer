type HilMan = {
    name: string;
    age?: number;
};

// With truthiness narrowing TS checks the type of the property or a variable automatically
const displayDetails = (hilman: HilMan) => {
    if (hilman.age) {
        console.log(hilman.age);
    }
};

displayDetails({ name: 'DapherHilman', age: 32 });
