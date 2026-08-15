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
let clearScreen = false;


function updateNumOne() {
    const numOneElement = document.querySelector(`.first-num`);
    const numButton = document.querySelectorAll('.numbers');

    const handleClick = (event) => {
        
            if(operator === undefined) {
                num1 += event.target.textContent;
                numOneElement.textContent = num1;
            }else {
                numButton.forEach((button) => {
                    button.removeEventListener('click',handleClick);
                });
                
            }
            
        }
    numButton.forEach((button) => {
        button.addEventListener("click",handleClick);
    })
    changeOperator();
    
}
    const numTwoElement = document.querySelector('.second-num');
const handleClickTwo = (event) => {
        console.log(num2);
            num2 += event.target.textContent;
            numTwoElement.textContent = num2;
               

            
}


function updateNumTwo() {
    const numButton = document.querySelectorAll('.numbers');
    if(operator !== undefined) {
    calculate();
    numButton.forEach((button) => {
        button.addEventListener("click",handleClickTwo);
    });
    }
}

const operatorElement = document.querySelector('.op');
    const operationButtons = document.querySelectorAll('.operation');
const handleClickOp = (event) => {
            operator = event.target.textContent;
            operatorElement.textContent = operator;
            operationButtons.forEach((button) => {
                button.removeEventListener('click',handleClickOp);
            });
                updateNumTwo();
            
    };


function changeOperator() {
    operationButtons.forEach((button) => {
        button.addEventListener("click",handleClickOp);
        });
    }


function calculate() {
    const numOneElement = document.querySelector(`.first-num`);
    const operatorElement = document.querySelector('.op');
    const EqualElement = document.querySelector('.calculate');
    const numTwoElement = document.querySelector('.second-num');
    const numButton = document.querySelectorAll('.numbers');

    const handleClick = () => {
         numButton.forEach((button) => {
                button.removeEventListener('click',handleClickTwo);
    });
        result = operate(operator,Number(num1),Number(num2));
        console.log(result+"zzz");
        numOneElement.textContent = result;
        console.log(numOneElement.textContent);
        operatorElement.textContent = "";
        numTwoElement.textContent = "";
        num1= result;
        operator = undefined;
        num2= "";
        EqualElement.removeEventListener('click',handleClick);
        changeOperator();   
    }

    
    EqualElement.addEventListener('click',handleClick);
    
}


function clear() {
    const clearButton = document.querySelector(".clear");
    const numButton = document.querySelectorAll('.numbers');
    const operationButtons = document.querySelectorAll('.operation');
    clearButton.addEventListener("click", () => {
        numButton.forEach((button) => {
                button.removeEventListener('click',handleClickTwo);
    });

    operationButtons.forEach((button) => {
                button.removeEventListener('click',handleClickOp);
            });
        num1 = "";
        num2="";
        operator=undefined;
    const numOneElement = document.querySelector(`.first-num`);
    const operatorElement = document.querySelector('.op');
    const numTwoElement = document.querySelector('.second-num');
    numOneElement.textContent = "";
    operatorElement.textContent ="";
    numTwoElement.textContent= "";
    clearScreen =true;
    updateNumOne();


    })
}
updateNumOne();
clear();




