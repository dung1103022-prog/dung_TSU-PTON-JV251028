function checkText(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
let input = prompt("Nhap vao chuoi can kiem tra");
if (checkText(input)) {
    console.log("CHuoi ban nhap la chuoi doi xung");
} else {
    console.log("Chuoi banj nhap kh phai la chuoi doi xung");
}