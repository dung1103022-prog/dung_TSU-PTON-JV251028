let username = "";
let userage = 0;
while (true) {
    let choice = prompt (`
        Menu
    1. Nhập tên của người dùng:
    2. Nhập tuổi của người dùng:
    3. In tên và tuổi:
    4. In bảng cửu chương:
    5. Kiểm tra số chẵn lẻ:
    6. Tính tổng các số từ 1 đến N
    7. In các số trong một dãy
    8. Kiểm tra số nguyên tố:
    9. In chuỗi đảo ngược:
    10. Thoát khỏi chương trình.
    `
    );
    switch (choice) {
        case "1":
            username("Nhập tên của bạn:")
            break;
        case "2":
            username("Nhập tuổi của bạn:")
            break;
        case "3":
            alert(`Tên: ${username} Tuổi: ${userage}`);
            break;
        case "4":
            let n = Number(prompt("Nhập số để i bảng cửu chương:"));
            let table = "";
            for (let i = 1; i <= 10; i++) {
                table += `${n} x ${i} = ${n*i}\n`;
            }
            alert(table);
            break;
        case "5":
            let num = Number(prompt("Nhập số để kiểm tra chẵn, lẻ:"));
            if (num % 2 === 0) {
                alert(`${num} là số chẵn.`);
            } else {
                alert(`${num} là số lẻ`);
            }
            break;
        case "6":
            let N = Number(prompt("Nhập số để tính tổng:"));
            let sum = 0;
            for (let i = 1; i <= N; i++) {
                sum += i;
            }
            alert(`Tổng từ 1 đến N là: ${sum}`);
            break;
        case "7":
            let str = prompt("Nhập dãy số:");
            let arr = str.split("").map(Number);
            alert("các số trong dãy: " +arr.join(","));
            break;
        case "8":
            let prime = Number(prompt("Nhập dãy số, cách nhau bởi dấu cách:"));
            if (prime <= 1) {
                alert(`${prime} không phải là số nguyên tố `);
            } else {
                let isPrime = true;
                for (let i = 2; i <= Math.sqrt(prime); i++) {
                    if (prime % i === 0) {
                        isPrime =false;
                        break;
                    }
                }
                alert(isPrime? `${prime} là số nguyên tố` : `${prime} không phải là số nguyên tố `);
            }
            break;
        case "9":
            let strr = prompt("Nhập chuỗi để đảo ngược:");
            let rev = strr.split("").reverse().join("");
            alert("chuỗi đảo ngược: " +rev);
            break;
        case "10":
            alert("Thoát khỏi chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn từ 1-10");
    }
    if (choice === "10") {
        break;
    }
}
