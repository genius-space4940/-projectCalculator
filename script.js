let inputField = document.querySelector('.input-field');
let expressionIsEvaluated = false;

document.querySelector('.point').addEventListener("click", function() {
    if (expressionIsEvaluated) {
        inputField.value = ".";
        expressionIsEvaluated = false;
    } else {
        inputField.value += ".";
    }
});

document.querySelector('.exponent').addEventListener("click", function() {
    addOperator("^");
});

document.querySelector('.multiply-op').addEventListener("click", function() {
    addOperator("×");
});

document.querySelector('.divide-op').addEventListener("click", function() {
    addOperator("÷");
});

document.querySelector('.plus-op').addEventListener("click", function() {
    addOperator("+");
});

document.querySelector('.minus-op').addEventListener("click", function() {
    addOperator("-");
});

document.querySelector('.bracket-left').addEventListener("click", function() {
    if (expressionIsEvaluated) {
        inputField.value = "(";
        expressionIsEvaluated = false;
    } else {
        inputField.value += "(";
    }
});

document.querySelector('.bracket-right').addEventListener("click", function() {
    if (expressionIsEvaluated) {
        inputField.value = ")";
        expressionIsEvaluated = false;
    } else {
        inputField.value += ")";
    }
});

for (let i = 0; i < 10; i += 1) {
    document.querySelector(`.number${i}`).addEventListener('click', function () {
        if (expressionIsEvaluated) {
            inputField.value = `${i}`;
            expressionIsEvaluated = false;
        } else {
            inputField.value += `${i}`;
        }
    });
}

document.querySelector('.clean-field').addEventListener('click', function(){
    inputField.value = '';
    expressionIsEvaluated = false;
});

document.querySelector('.equal').addEventListener('click', function(){
    try {
        let expression = inputField.value;
        expression = expression.replace("×", "*").replace("÷", "/").replace("^", "**");
        inputField.value = eval(expression);
        expressionIsEvaluated = true;
    } catch (error) {
        inputField.value = "Помилка";

        setTimeout(() => {
            inputField.value = '';
        }, 1500);
    }
});

function addOperator(operator) {
    let currentValue = inputField.value;

    if (["+", "-", "×", "÷", "^"].includes(currentValue.slice(-1))) {
        inputField.value = currentValue.slice(0, -1) + operator;
    } else {
        inputField.value += operator;   
    }

    expressionIsEvaluated = false;
}   