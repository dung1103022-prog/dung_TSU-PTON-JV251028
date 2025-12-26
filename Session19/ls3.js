let users = JSON.parse(localStorage.getItem("users")) || [
    { email: "user@gmail.com", password: "123456" }
];

let form = document.getElementById("form");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let errorEmail = document.querySelector(".error-email");
let errorPassword = document.querySelector(".error-password");

form.onsubmit = function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const remember = document.getElementById("remember").checked;

    if (!validateData()) return;

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        errorPassword.innerText = "Email hoặc mật khẩu không đúng";
        return;
    }

    if (remember) {
        const expireTime = new Date().getTime() + 24 * 60 * 60 * 1000;
        localStorage.setItem("loginUser", JSON.stringify({
            email,
            expireTime
        }));
    }

    window.location.href = "home.html";
};

function togglePassword() {
    passwordInput.type =
        passwordInput.type === "password" ? "text" : "password";
}


function validateData() {
    let check = true;

    if (emailInput.value.trim() === "") {
        errorEmail.innerText = "Vui lòng nhập email";
        check = false;
    } else {
        errorEmail.innerText = "";
    }

    if (passwordInput.value === "") {
        errorPassword.innerText = "Vui lòng nhập mật khẩu";
        check = false;
    } else {
        errorPassword.innerText = "";
    }

    return check;
}

(function autoLogin() {
    const data = JSON.parse(localStorage.getItem("loginUser"));
    if (data && new Date().getTime() < data.expireTime) {
        window.location.href = "home.html";
    }
})();
