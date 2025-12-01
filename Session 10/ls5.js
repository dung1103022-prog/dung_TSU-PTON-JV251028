let usd = prompt("Nhập số tiền cần đổi: ");
usd = Number(usd);
const rate = 25000;
let VND = usd * rate;
alert(usd + "USD =" + VND + "VND");