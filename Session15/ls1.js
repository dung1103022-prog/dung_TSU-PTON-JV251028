// bai1
let arr = [3, 12, 9, 20, 7, 15, 1, 10, 8, 30];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        count++;
    }
}

console.log("Số phần tử >= 10 là:", count);
// bai2
let arr2 = [5, 12, 9, 20, 7, 15, 1, 10, 8, 3];

let max2 = arr[0];
let index = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        index = i;
    }
}

console.log("Giá trị lớn nhất:", max);
console.log("Vị trí:", index);

//bai3
let arr3 = [5, 12, 9, 20, 7];
let max3 = arr[0];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    sum += arr[i];
}

let average = sum / arr.length;

console.log("Giá trị lớn nhất:", max);
console.log("Giá trị trung bình:", average);

// bai4
let arr4 = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}

console.log(reversed);
// bai5
let arr5 = [-1, 5, -3, 8, -10, 0];
let count5 = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        count++;
    }
}

console.log("Số nguyên âm:", count);

// bai6
let arr6 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let X = 7;
let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === X) {
        found = true;
        break;
    }
}

if (found) {
    console.log(`Number ${X} is in the array`);
} else {
    console.log(`Number ${X} is not in the array`);
}
// bai7
let arr7 = [5, 12, 9, 20, 7, 15, 1, 10, 8, 3];

arr.sort(function(a, b) {
    return b - a;
});

console.log(arr);
// bai8
let a = [1,2,3,4,5,6,7,8,9,10];
let b = [11,12,13,14,15,16,17,18,19,20];
let c = [];

for (let i = 0; i < b.length; i++) {
    c.push(b[i]);
}

for (let i = 0; i < a.length; i++) {
    c.push(a[i]);
}

console.log(c);
// bai9