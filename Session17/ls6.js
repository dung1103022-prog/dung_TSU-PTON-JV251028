let display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            expression = "";
            display.value = "";
            return;
        }

        if (value === "=") {
            try {
                if (expression.includes("/0")) {
                    alert("Không thể chia cho 0");
                    return;
                }

                const result = eval(expression);
                display.value = result;
                expression = result.toString();
            } catch {
                alert("Biểu thức không hợp lệ");
            }
            return;
        }

        expression += value;
        display.value = expression;
    });
});
