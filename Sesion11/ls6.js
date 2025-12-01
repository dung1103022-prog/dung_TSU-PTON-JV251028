let a = Number(prompt("Nhập số a:"));
let b = Number(prompt("Nhập số b:"));
let operator = prompt("Nhập phép tính (+, -, *, /):");

let result;

if (operator === "+") {
    result = a + b;
} else if (operator === "-") {
    result = a - b;
} else if (operator === "*") {
    result = a * b;
} else if (operator === "/") {
    if (b === 0) {
        alert("không thể chia cho 0!");
    } else {
        result = a / b;
    }
} else {
    alert("Phép tính không hợp lệ!");
}

if (result !== undefined) {
    alert(`Kết quả: ${a} ${operator} ${b} = ${result}`);
}
