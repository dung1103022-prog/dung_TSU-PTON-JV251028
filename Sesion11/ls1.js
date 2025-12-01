let years = Number(prompt("Nhập vào năm: "));
if (years % 4 === 0 && years % 100 !== 0) {
    alert(`${years} là năm nhuận`);
} else {
    alert(`${years} không phải là năm nhuận`)
}