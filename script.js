let expressionField = document.querySelector('.field');
document.querySelector('.point').addEventListener("click", function() {expresssionField.innerHTML += "."});
document.querySelector('.percent').addEventListener("click", function() {expresssionField.innerHTML += "%"});
document.querySelector('.multiply-op').addEventListener("click", function() {expresssionField.innerHTML += "*"});
document.querySelector('.divide-op').addEventListener("click", function() {expresssionField.innerHTML += "/"});
document.querySelector('.plus-op').addEventListener("click", function() {expresssionField.innerHTML += "+"});
document.querySelector('.minus-op').addEventListener("click", function() {expresssionField.innerHTML += "-"});
document.querySelector('.bracket-left').addEventListener("click", function() {expresssionField.innerHTML += "("});
document.querySelector('.bracket-right').addEventListener("click", function() {expresssionField.innerHTML += ")"});

for (let i = 0; i < 10; i += 1) {
    document.querySelector(`.number${i}`).addEventListener('click', function(){expresssionField.innerHTML += `${i}`})
}

document.querySelector('.clean-field').addEventListener('click', function(){
    field.innerHTML = ''
})


document.querySelector('.btn-equal').addEventListener('click', function(){
    let expression = expressionField.innerHTML
    if (expression.includes('+')) {
        let numbers = expression.split('+')
        expressionField.innerHTML = +numbers[0] + +numbers[1]
    } else if (expression.includes('-')) {
        let numbers = expression.split('-')
        expressionField.innerHTML = +numbers[0] - +numbers[1]
    } else if (expression.includes('*')) {
        let numbers = expression.split('*')
        expressionField.innerHTML = +numbers[0] * +numbers[1]
    } else if (expression.includes('/')) {
        let numbers = expression.split('/')
        expressionField.innerHTML = +numbers[0] / +numbers[1]
    }
})

// document.querySelector('.number7').addEventListener('click', function() {expressionField.innerHTML += '7'})