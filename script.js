let inputField = document.querySelector('.input-field');

document.querySelector('.point').addEventListener("click", function() {inputField.value += "."});
document.querySelector('.percent').addEventListener("click", function() {inputField.value += "%"});
document.querySelector('.multiply-op').addEventListener("click", function() {inputField.value += "*"});
document.querySelector('.divide-op').addEventListener("click", function() {inputField.value += "/"});
document.querySelector('.plus-op').addEventListener("click", function() {inputField.value += "+"});
document.querySelector('.minus-op').addEventListener("click", function() {inputField.value += "-"});
document.querySelector('.bracket-left').addEventListener("click", function() {inputField.value += "("});
document.querySelector('.bracket-right').addEventListener("click", function() {inputField.value += ")"});


for (let i = 0; i < 10; i += 1) {
    document.querySelector(`.number${i}`).addEventListener('click', function () {inputField.value += `${i}`});
}

document.querySelector('.clean-field').addEventListener('click', function(){
    inputField.value = '';
})


document.querySelector('.equal').addEventListener('click', function(){
    inputField.value = eval(inputField.value);
})