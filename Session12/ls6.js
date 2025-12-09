let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let k = Number(prompt("nhap so nguyen can tra:"));
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
        count++;
    }
}
alert(`So ${k} xuat hien ${count} lan`);