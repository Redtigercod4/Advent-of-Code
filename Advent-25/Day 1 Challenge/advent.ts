const fs = require('fs');

const arr = fs.readFileSync("./input.txt", "utf-8").split(/\r?\n/);

const nestedArr: string[][] = arr.map((a: string) => a.split(","));

let startingPosition = 50;
let counter = 0;

for (let i = 0; i < nestedArr.length; i++) {
    const direction: string = nestedArr[i][0].slice(0, 1)
    const increments: number = parseInt(nestedArr[i][0].slice(1));

    if (direction === "R") {
        startingPosition = (startingPosition + increments) % 100;

        if (startingPosition === 0) {
            counter++
        }
    }

    if (direction === "L") {
        startingPosition = (startingPosition - increments + 100) % 100;

        if (startingPosition === 0) {
            counter++
        }
    }
}

console.log(counter)