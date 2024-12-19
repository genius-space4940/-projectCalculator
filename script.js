let expressionField = document.querySelector('.input-field');

document.querySelector('.point').addEventListener("click", function() {expressionField.value += "."});
document.querySelector('.percent').addEventListener("click", function() {expressionField.value += "%"});
document.querySelector('.multiply-op').addEventListener("click", function() {expressionField.value += "*"});
document.querySelector('.divide-op').addEventListener("click", function() {expressionField.value += "/"});
document.querySelector('.plus-op').addEventListener("click", function() {expressionField.value += "+"});
document.querySelector('.minus-op').addEventListener("click", function() {expressionField.value += "-"});
document.querySelector('.bracket-left').addEventListener("click", function() {expressionField.value += "("});
document.querySelector('.bracket-right').addEventListener("click", function() {expressionField.value += ")"});

for (let i = 0; i < 10; i += 1) {
    document.querySelector(`.number${i}`).addEventListener('click', function () {expressionField.value += `${i}`});
}

document.querySelector('.clean-field').addEventListener('click', function(){
    expressionField.value = '';
})


document.querySelector('.equal').addEventListener('click', function(){
    let expression = expressionField.value;
    if (expression.includes('+')) {
        let numbers = expression.split('+');
        expressionField.value = +numbers[0] + +numbers[1];
        console.log('+')
    } else if (expression.includes('-')) {
        let numbers = expression.split('-');
        expressionField.value = +numbers[0] - +numbers[1];
    } else if (expression.includes('*')) {
        let numbers = expression.split('*');
        expressionField.value = +numbers[0] * +numbers[1];
    } else if (expression.includes('/')) {
        let numbers = expression.split('/');
        expressionField.value = +numbers[0] / +numbers[1];
    }
})