// bai1:
let n = 20;
let a = 0;
let b = 1;

console.log("Day Fibonacci:");
for (let i = 0; i < n; i++) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;    
}
// bai2
let number = 5;
let factorial = 1;
for (let i =0; i <= number; i++) {
    factorial *= i;
}
console.log(`Giai thua cua ${number} la:`, factorial);
// bai3
let height = 5;

for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}
console.log("--------------------");

for (let i = height; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}
console.log("--------------------");
for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= height - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= i; k++) {
        row += "*";
    }
    console.log(row);
}

console.log("--------------------");
for (let i = height; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= height - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= i; k++) {
        row += "*";
    }
    console.log(row);
}
// bai4
let width = 10;
let heightRect = 5;
for (let i = 1; i <= heightRect; i++) {
    let row = "";
    for (let j = 1; j <= width; j++) {
        if (i === 1 || i === heightRect || j === 1 || j === width) {
            row += "*";
        } else {
            row += "";
        }
    }
    console.log(row);
    
}
// bai5
let money = Number(prompt("nhap tien ban dau"));
let months = 12;
let interestRate = 0.01;
if (isNaN(money) || money <=0) {
    alert("nhap so tien hop le")
} else {
    for ( let i = 1; i<= months; i++) {
        money = money + money * interestRate;
    }
    console.log("so tien sau", months, "thang la", money.toFixed(0), "VND");
}



