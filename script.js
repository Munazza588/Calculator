function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator,a,b) {
    let result;
    if (operator === "+") {
        result = add(a,b);
    }else if(operator === "-") {
        result = subtract(a,b);
    }else if(operator === "*") {
        result = multiply(a,b);
    }else if(operator === "/") {
        result = divide(a,b);
    }
    return result;
}

let num1;
let num2;
let operator;

function updateNumOne() {
    const numOneElement = document.querySelector('.first-num');
    const numButton = document.querySelectorAll('.numbers');
    numButton.forEach((button) => {
        button.addEventListener("click",(event) => {
            num1 = event.target.textContent;
            numOneElement.textContent = num1;
        })
    })
}

updateNumOne();

