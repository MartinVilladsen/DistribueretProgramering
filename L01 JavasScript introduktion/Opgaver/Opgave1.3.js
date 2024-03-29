// bubbleSort.js
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

for (let i = list.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (list[j] > list[j + 1]) {
            let temp = list[j];
            list[j] = list[j + 1];
            list[j + 1] = temp;
        }
    }
}
console.log(list.toString()); // => 0,1,2,4,7,8,9,13,16

// opgave1.3.js
/*
Udvid eksemplet bubbleSort.js med en binær søgning på indholdet af list, efter at list er blevet sorteret.
Test dernæst med forskellige tal. Udskriv med console.log tallets position i listen eller -1, hvis elementet
ikke er i listen.
*/
let target = 13;
let position = -1

let left = 0;
let right = list.length - 1;
while (left <= right && position === -1) {
    let middle = parseInt((left + right) / 2);
    let k = list[middle];
    if (k == target) {
        position = middle;
    }
    if (k > target)
        right = middle - 1;
    else
        left = middle + 1;
}
console.log('target: ' + target);
console.log('position: ' + position);