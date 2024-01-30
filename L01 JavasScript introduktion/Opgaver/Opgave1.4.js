/* Lav en udgave af flettealgoritmen (totalfletning) fra første semester, hvor to sorterede arrays med tal
flettes sammen. Udskriv resultatet med console.log. Indsæt i enden af et array med metoden push() */

function flet(s1, s2) {
    let list = [];

    let i1 = 0;
    let i2 = 0;

    while (i1 < s1.length && i2 < s2.length) {
        if (s1[i1] <= s2[i2]) {
            list.push(s1[i1]);
            i1++;
        } else {
            list.push(s2[i2]);
            i2++;
        }
    }

    while (i1 < s1.length) {
        list.push(s1[i1]);
        i1++;
    }

    while (i2 < s2.length) {
        list.push(s2[i2]);
        i2++;
    }
    return list;
}

let list1 = [3, 7, 9, 9];
let list2 = [1, 2, 4, 7, 7, 8];

console.log(flet(list1, list2));