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

let num1 ="";
let num2 = "";
let operator;
let result;


function updateNumOne() {
    const numOneElement = document.querySelector(`.first-num`);
    const numButton = document.querySelectorAll('.numbers');

    const handleClick = (event) => {
        console.log("NUM1 handler");
            if(operator === undefined) {
                num1 += event.target.textContent;
                numOneElement.textContent = num1;
            }else {
                console.log('trying to remove listeners');
                numButton.forEach((button) => {
                    button.removeEventListener('click',handleClick);
                });
                updateNumTwo();
            }
            
        }
    //changeOperator();
    numButton.forEach((button) => {
        button.addEventListener("click",handleClick);
    })
}

function updateNumTwo() {
    console.log("NUM2 handler");
    const numTwoElement = document.querySelector('.second-num');
    const numButton = document.querySelectorAll('.numbers');

    const handleClick = (event) => {
        console.log(num2);
            num2 += event.target.textContent;
            //console.log(num2);
            numTwoElement.textContent = num2;
            numButton.forEach((button) => {
                button.removeEventListener('click',handleClick);
            
    });
}

    numButton.forEach((button) => {
        button.addEventListener("click",handleClick);
    });
}



function changeOperator() {
    const operatorElement = document.querySelector('.op');
    const operationButtons = document.querySelectorAll('.operation');

    const handleClick = (event) => {
            operator = event.target.textContent;
            operatorElement.textContent = operator;
            operationButtons.forEach((button) => {
                button.removeEventListener('click',handleClick);
            });
    };

    //updateNumTwo();
    operationButtons.forEach((button) => {
        button.addEventListener("click",handleClick);
        });
    }


function calculate() {
    console.log("calculate Handler");
    const numOneElement = document.querySelector(`.first-num`);
    const operatorElement = document.querySelector('.op');
    const EqualElement = document.querySelector('.calculate');
    const numTwoElement = document.querySelector('.second-num');

    const handleClick = () => {
        result = operate(operator,Number(num1),Number(num2));
        //console.log(num2);
        numOneElement.textContent = result;
        operatorElement.textContent = "";
        numTwoElement.textContent = "";
        num1= result;
        operator = undefined;
        num2= "";
        
        EqualElement.removeEventListener('click',handleClick);
    }

    
    EqualElement.addEventListener('click',handleClick);
    
}


function clear() {
    const clearButton = document.querySelector(".clear");
    const display = document.querySelector('.screen');
    clearButton.addEventListener("click", () => {
        display.textContent = "";
    })
}



updateNumOne();
changeOperator();
//updateNumTwo();


