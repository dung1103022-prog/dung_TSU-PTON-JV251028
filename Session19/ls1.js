let users = JSON.parse(localStorage.getItem('users')) || [];
let form = document.getElementById("form");
let errorEmail = document.querySelector(".error-email");
let errorPassword = document.querySelector(".error-password");
let errorConfirmPassword = document.querySelector(".error-confirm-password");

form.onsubmit = function (e) {
    e.preventDefault();
    if (validateData(form)) {
        const newUser = {
            id: Math.floor(Math.random()*10000),
            email: form.email.value,
            password: form.password.value,
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
    };
};

function validateData(form) {
    let check = true;
    if (form.email.value === "") {
        errorEmail.innerText = "Vui long nhap email";
        check = false;
    } else if (!validEmail(form.email.value)) {
        errorEmail.innerText= "email kh hop le";
        check = false;
    } else {
        errorEmail.innerText = "";
    };
    
    if (form.password.value === "") {
        errorPassword.innerText = "Vui long nhap mat khau";
        check = false;
    } else if (!validPassword(form.password.value)) {
        errorPassword.innerText = "Mat khau khong chinh xac";
        check = false;
    } else {
        errorPassword.innerText = "";
    }
    
    if (form.password.value !== form.confirmPassword.value) {
        errorConfirmPassword.innerText = "Mat khau khong trung khop";
        check = false;
    } else {
        errorConfirmPassword.innerText = "";
    };
    return check;
}
function validEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function validPassword(password) {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);
}
