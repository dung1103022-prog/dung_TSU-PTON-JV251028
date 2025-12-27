let arr = [];
for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random()*20)+1;
    arr.push(randomNum);
}
console.log("Mang so:", arr);
let sumChan = 0;
let sumLe = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sumChan += arr[i];
    } else {
        sumLe += arr[i];
    }
}
alert("Tong cac so chan la:" + sumChan);
alert("Tong cac so le la:" + sumLe);