let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let search = Number(prompt("Nhap so can tim:"));
let hasNumber = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[1] === search) {
        hasNumber = true;
    }
}
if (hasNumber) {
    alert("Dung");
} else {
    alert("Sai");
}