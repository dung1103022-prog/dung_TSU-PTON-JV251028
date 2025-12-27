// bai1:
let c = Number(prompt("nhap do c:"));
let f = c * 9 / 5 + 32;
alert("do F la:" + f)
//bai2:
let m = Number(prompt("nhap m:"));
let feet = m * 3.2808
alert("feet:" + feet)
// bai3:
let a = Number(prompt("nhap chieu dai canh a:"));
let area = a * a
alert("dien tich hinh vuong" + area)
// bai4:
let a4 = Number(prompt("nhap canh a"));
let b4 = Number(prompt("nhap canh b"));
areaBai4 = a4 * b4;
alert("Dien tich hinh chu nhat la" + areaBai4)
// bai5:
let a5 = Number(prompt("nhap canh a"));
let b5 = Number(prompt("nhap canh b"));
areaBai5 = (a5 * b5) / 2;
alert("Dien tich hinh chu nhat la" + areaBai5)
// bai6:
let a6 = Number(prompt("nhap a"));
let b6 = Number(prompt("nhap b"));
if (a6 === 0) {
    if (b6 === 0) {
        alert("phuong tring vo so nghiem")
    } else {
        alert("phuong trinh vo nghiem")
    }
} else {
    let x = -b / a;
    alert("Nghiem x =" + x);
}
// bai7:
let a7 = Number(prompt("nhap a"));
let b7 = Number(prompt("nhap b"));
let c7 = Number(prompt("nhap c"));
if (a7 === 0) {
    if (b7 === 0) {
        if (c7 === 0) {
            alert("Phuong trinh vo so ngiem");
        } else {
            alert("Phuong trinh vo nghiem");
        }
    } else {
        alert("Nghiem x = " + (-c7 / b7));
    }
} else {
    let delta = b7 * b7 - 4 * a7 * c7;

    if (delta < 0) {
        alert("Phuong trinh vo nghiem");
    } else if (delta === 0) {
        let x = -b7 / (2 * a7);
        alert("phuong trinh co nghiem x = " + x);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a7);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a7);
        alert("Hai nghiem phan biet: x1 = " + x1 + ", x2 = " + x2);
    }
}
// bai8
let age = Number(prompt("nhap tuoi"));
if (Number.isInteger(age)) {
    if (age > 0 && age < 120) {
        alert("Tuoi hop le");
    } else {
        alert(" tuoi kh hop le");
    }
} else {
    alert("Nhap so nguyen");
}