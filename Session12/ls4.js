let arr = prompt("Nhap vao chuoi:").split("");
let max = Number(arr[0]);
for (let i = 1; i< arr.length; i++) {
    if (max < Number(arr[i])) {
        max = Number(arr[i]);
    }
}
console.log(`Gia tri lon nhat = ${max}`);