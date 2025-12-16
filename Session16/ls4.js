function isEven(Numbers) {
    return Numbers % 2 === 0;
}
let Numbers = Number(prompt("Nhap vao so can kiem tra"));
let result = isEven(Numbers);
console.log(`Ket qua la ${result}`);
