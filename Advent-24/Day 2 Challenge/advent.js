const fs = require('fs');

const arr = fs.readFileSync("./input.txt", "utf-8").split(/\r?\n/);

const nestedArr = arr.map((a) => a.split(","));

function formatArr(arr) {
    const arrSlice = [...arr];

    for (let i = 0; i < arrSlice.length; i++) {
        const newArr = arrSlice[i][0].split(" ")
        arrSlice.splice(i, 1, newArr);
    }

    return arrSlice;
}

const formattedArr = formatArr(nestedArr);

function checkReports(arr) {
    let output = 0;
    arr.forEach(element => {
        for (let i = 0; i < element.length; i++) {
            if (Math.abs(element[i], element[i + 1]) <= 3) {
                // if previous number is higher, then future number should be lower
                if (element[i - 1] > element[i + 1]) {
                    output++;
                }
                // If previous number is lower, then future number should be higher
                else if (element[i - 1] < element[i + 1]) {
                    output++;
                }
            }
        }
    });

    return output;
}

console.log(`Part 1: ${checkReports(formattedArr)}`);

// function checkReports() {

// Iterate over the array
// for (let i = 0; i < nestedArr.length; i++) {
//     let str = nestedArr[i][0]
//     const currentArr = str.split(" ");

//     for (let j = 0; j < currentArr.length; j++) {
//         console.log(currentArr[j])
//     }
//     // for (let j = 0; j < currentArr.length; j++) {
//     //     // Check if current number divided by next number is greater than 3
//     //     if (Math.abs(currentArr[j], currentArr[j + 1]) <= 3) {
//     //         // if previous number is higher, then future number should be lower
//     //         if (currentArr[j - 1] > currentArr[j + 1]) {
//     //             output++;
//     //         }
//     //         // If previous number is lower, then future number should be higher
//     //         else if (currentArr[j - 1] < currentArr[j + 1]) {
//     //             output++;
//     //         }
//     //     }
// }
// Break down each array
// [[""], [""], [""]]



// for (let j = 0; j < currentArr.length; j++) {
//     // Check if current number divided by next number is greater than 3
//     if (Math.abs(currentArr[j], currentArr[j + 1]) <= 3) {
//         // if previous number is higher, then future number should be lower
//         if (currentArr[j - 1] > currentArr[j + 1]) {
//             output++;
//         }
//         // If previous number is lower, then future number should be higher
//         else if (currentArr[j - 1] < currentArr[j + 1]) {
//             output++;
//         }
//     }

// }

// Return output number for total of safe reports
//     return output;
// }