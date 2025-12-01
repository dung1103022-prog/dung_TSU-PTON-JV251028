let weight = Number(prompt("Nhập cân nặng (kg): "));
let height = Number(prompt("Nhập chiều cao (m): "));
if (isNaN(weight) || isNaN(height || weight <= 0 || height <= 0)) {
    alert("Nhập số lớn hơn 0: ")
} else {
    let bmi = weight / (height * height);
    let category = "";
    if (bmi < 18.5) {
        category = "Gầy";
    } else if (bmi < 25) {
        category = "Bình thường";
    } else if (bmi >= 25) {
        category = "Thừa cân";
    } else if (bmi >= 25 && bmi <30) {
        category = "Tiền béo phì";
    } else if (bmi < 35) {
        category = "Béo phì độ 1";
    } else if (bmi < 39) {
        category = "Béo phì độ 2";
    }else if (bmi >= 40) {
        category = "Béo phì độ 3";
    }
    alert(`BMI: ${bmi.toFixed(2)} thuộc loại: ${category}`);
}