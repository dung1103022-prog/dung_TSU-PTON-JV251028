const corUsername = "huanrose@gmail.com";
const corPassword = "12345";
const btn = document.querySelector(".btn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

btn.addEventListener("click", function () {
    const username = usernameInput.value;
    const password = passwordInput.value;
    if (username === corUsername && password === corPassword) {
        alert("dang nhap thanh cong");
    } else {
        alert("Dang nhap that bai");
    }
});