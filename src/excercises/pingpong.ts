const pingPong = (numbers: number[]): void => {
    numbers.forEach((indiceNum) => {
        if (indiceNum % 3 && indiceNum % 5) {
            console.log(`${indiceNum}: Ping Pong!`);
        } else if (indiceNum % 3) {
            console.log(`${indiceNum}: Ping`);
        } else if (indiceNum % 5) {
            console.log(`${indiceNum}: Pong`);
        } else {
            console.log(`${indiceNum}`);
        }
    });
};
