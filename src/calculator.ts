const buttons = document.querySelector(".calculator-buttons");

buttons?.addEventListener("click", (event: Event) => {
    const target = event.target as HTMLInputElement;

    if (!target.matches("button")) {
        return;
    }

    if (target.name === "calculate") {
        console.log("Calculate");
        return;
    }

    if (target.name === "clean") {
        console.log("clean");
        return;
    }
});

const calculate = () => {
    const firstOperand = (document.getElementById("firstOperand") as HTMLInputElement).value;
    const num1 = parseFloat(firstOperand);

    const secondOperand = (document.getElementById("secondOperand")as HTMLInputElement).value;
    const num2 = parseFloat(secondOperand);

    const operation = (document.getElementById("operation")as HTMLInputElement).value;

    let result = 0;

    switch (operation) {

        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            break;
    }

    (document.getElementById("result")as HTMLInputElement).value = String(round(result, 4));
};

function round(value: number, decimals: number) {
    return Number(Math.round(Number(value + "e" + decimals)) + "e-" + decimals);
}
