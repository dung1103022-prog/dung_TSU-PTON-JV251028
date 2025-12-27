// bai1:
for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i === 99) {
        alert("da hoan thanh");
    }
};
// bai2:
let c = Number(prompt("nhap nhiet do"));
if (c > 100) {
    alert("Vui long giam nhiet do");
} else if (c < 20) {
    alert("vui long tang nhiet do");
} else {
    alert("nhiet do bth");
}
// bai3:
let a = 0;
let b = 1;
let count = 0;
while ( count < 20) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
    count++;
}
// bai4:
let x = 0;
let y = 1;
while (true) {
    let z = x + y;
    x= y;
    y = z;
    if(x % 5 === 0) {
        console.log("so fibonacci chia het cho 5 laf", x);
        break;
    }
}
// bai5:
let f1 = 0;
let f2 = 1;
let sum = 0;

for (let i = 0; i < 20; i++) {
    sum += f1;
    let f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
}
console.log("Tong 20 so fibonacci dau tien", sum);
// bai6:
let total = 0;
let number = 0;
let count7 = 0;

while (count7 < 30) {
    if ( number % 7 === 0) {
        total += number;
        count7++;
    }
    number++;
}
log("Tong 30 so dau tien chia het cho 7", total);
// bai7:
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}



