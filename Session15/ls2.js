// bai1
let arr1 = ['c','s','c','2','6','1'];
let result = "";
for (let i = arr.length - 1; i>= 0; i--) {
    result += arr[i];
}
console.log(result);
// bai2
let chars = ['c','s','c','2','6','1'];
let count = 0;
for (let i  =0; i < chars.length; i++) {
    if (!isNaN(chars[i])) {
        count++;
    }
}
console.log(count);
// bai3
let str = "hello world";
let length = 0;
for (let i = 0; i < str.length; i++) {
    length++;
}
console.log(length);

//bai4
let str1 = prompt("nhap chuoi thu nhat");
let str2 = prompt("nhap chuoi thu hai");
if (str1 === str2) {
    console.log("hai chuoi giong nhau");
    
} else {
    console.log("hai chuoi khac nhau");
}
// bai5
let arrChar = ['a','-','b','-','c','-','d'];
for (let i = 0; i < arrChar.length; i++) {
    if (arrChar[i] === '-') {
        arrChar[i] = '_';
    }
}
console.log(arrChar);
