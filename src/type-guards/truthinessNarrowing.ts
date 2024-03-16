type HilMan = {
    name: string;
    age?: number;
};

const displayDetails = (hilman: HilMan) => {
    if (hilman.age) {
        console.log(hilman.age);
    }
};

displayDetails({ name: 'DapherHilman', age: 32 });
