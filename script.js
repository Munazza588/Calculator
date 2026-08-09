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
    const numOneElement = document.querySelector(`.first-num`);
    const numButton = document.querySelectorAll('.numbers');
    numButton.forEach((button) => {
        button.addEventListener("click",(event) => {
            if(operator === undefined) {
                console.log(operator);
                num1 = event.target.textContent;
                numOneElement.textContent = num1;
            }else {
                numButton.forEach((button) => {
                    button.removeEventListener('click',() => {
                        console.log('removed');
                    })
                });
            }
            
        });
    })
}

function updateNumTwo() {
    const numTwoElement = document.querySelector('.second-num');
    const numButton = document.querySelectorAll('.numbers');
    numButton.forEach((button) => {
        button.addEventListener("click",(event) => {
            num2 = event.target.textContent;
            numTwoElement.textContent = num2;
            calculate();
        })
    })
}



function changeOperator() {
    const operatorElement = document.querySelector('.op');
    const operationButtons = document.querySelectorAll('.operation');

    const handleClick = (event) => {
            operator = event.target.textContent;
            updateNumTwo();
            operatorElement.textContent = operator;
            operationButtons.forEach((button) => {
                button.removeEventListener('click',handleClick);
            });
    };

    operationButtons.forEach((button) => {
        button.addEventListener("click",handleClick);
        });
    }


function calculate() {
    const EqualElement = document.querySelector('.calculate');
    const display = document.querySelector('.screen')
    const result = operate(operator,num1,num2);
    console.log(result);
    EqualElement.addEventListener('click',() => {
        display.textContent = result;
    })
}
updateNumOne();
changeOperator();


