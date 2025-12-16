function sumNumber(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [10, 20, 30, 40, 50, 60];
const arr3 = [1, 3, 5, 7, 9];
console.log("Tong arr1 =", sumNumber(arr1));
console.log("Tong arr2 =", sumNumber(arr2));
console.log("Tong arr3 =", sumNumber(arr3));

