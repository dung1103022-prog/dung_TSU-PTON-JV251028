// bai 1
let a = Number(prompt("nhap so a:"));
let b = Number(prompt("nhap so b:"));
if (a % b === 0) {
    alert("a chia het cho b");
} else {
    alert("a khong chia het cho b")
}
// bai 2
let age = Number(prompt("nhap tuoi:"));
if (age >= 15) {
    alert("du dieu kien vao lop 10");
} else {
    alert("khong du dieu kien vao lop 10")
}
// bai 3
let num = Number(prompt("nhap so nguyen bat ky"));
if (num > 0) {
    alert("so lon hon 0");
} else if (num === 0) {
    alert("so bang 0");
} else {
    alert("so nho hon 0");
}
// bai 4
let num1 = Number(prompt("nhap so a:"));
let num2 = Number(prompt("nhap so b:"));
let num3 = Number(prompt("nhap so c:"));
let max = Math.max(num1, num2, num3);
alert("so lon nhat la:" + max);
// bai 5
let ktra = Number(prompt("nhap diem kiem tra:"));
let gky = Number(prompt("nhap diem giua ky:"));
let cky = Number(prompt("nhap diem cuoi ky:"));
let dtb = (ktra + gky + cky) / 3;
let rank = "";
if (dtb >= 9) {
    rank = "Xuất Sắc";
} else if (dtb >= 8) {
    rank = "Giỏi";
} else if (dtb >= 7) {
    rank = "Khá";
} else if (dtb >= 6) {
    rank = "Trung Bình";
} else if (dtb >= 4) {
    rank = "Yếu";
}
alert(`Điểm trung bình: ${dtb.toFixed(2)}\nXếp loại: ${rank}`)

