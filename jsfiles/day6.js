"use strict";
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = ['hi', 'my', 'name', 'is', 'suei'];
let arr3 = new Array(true, false);
console.log(arr3);
//ARRAY METHODS
console.log(arr1.push(9));
console.log(arr1.pop());
console.log(arr1.unshift(9));
console.log(arr1.shift());
console.log(arr3.reverse());
console.log(arr1.sort());
console.log(arr2.splice(0, 1, 'hello'));
console.log(arr1.concat(arr1));
console.log(arr2.indexOf('name'));
console.log(arr2.lastIndexOf('name'));
console.log(arr2.slice(0, 2));
console.log(arr2.join(' '));
console.log(arr1.every((element) => {
    if (typeof element === 'number')
        return true;
    return false;
}));
console.log(arr1.map((element) => {
    return Math.pow(element, 2);
}));
console.log(arr1.filter((element) => {
    if (element >= 3)
        return true;
    return false;
}));
console.log(arr1.reverse().find((element) => {
    if (element % 2 == 0)
        return true;
    return false;
}));
console.log(arr1.forEach((item) => {
    return item + 1;
}));
console.log(arr1.reduce((item, sum) => {
    sum = item + sum;
    return sum;
}));
