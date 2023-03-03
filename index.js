//number Screen
const numberScreen = document.querySelector('.numberScreen');

// operation button mapping

const clearButton = document.querySelector('.clearButton');
const negativeButton = document.querySelector('.negativeButton');
const percentButton = document.querySelector('.percentButton');
const divideButton = document.querySelector('.divideButton');
const multiplyButton = document.querySelector('.multiplyButton');
const subtractButton = document.querySelector('.subtractButton');
const addButton = document.querySelector('.addButton');
const equalsButton = document.querySelector('.equalsButton');
const decimalButton = document.querySelector('.decimalButton');
const operationBtns = document.querySelectorAll('.operation');

//number button mapping

const nineButton = document.querySelector('.nineButton');
const eightButton = document.querySelector('.eightButton');
const sevenButton = document.querySelector('.sevenButton');
const sixButton = document.querySelector('.sixButton');
const fiveButton = document.querySelector('.fiveButton');
const fourButton = document.querySelector('.fourButton');
const threeButton = document.querySelector('.threeButton');
const twoButton = document.querySelector('.twoButton');
const oneButton = document.querySelector('.oneButton');
const zeroButton = document.querySelector('.zeroButton');

//global variables to be used

let firstNumber = "";
let secondNumber = "";

let operationButtonClicked = false;

operationBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        operationButtonClicked = true;
    })
})

let result = 0;
let operation;

//operation functions

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

//set numbers

function setNumber(num) {
    if(operationButtonClicked == false){
        firstNumber += num
    }
    else if(operationButtonClicked == true){
        secondNumber += num
    }

    parseInt(firstNumber);
    parseInt(secondNumber);
}

//operation onClick

clearButton.addEventListener('click', () => {
    numberScreen.textContent = "";

    //reset calculator
    operationButtonClicked = false;
    firstNumber = "";
    secondNumber = "";
});

addButton.addEventListener('click', () => {
    operation = '+';
});

subtractButton.addEventListener('click', () => {
    operation = '-';
})

multiplyButton.addEventListener('click', () => {
    operation = '*';
});

divideButton.addEventListener('click', () => {
    operation = '/';
})

equalsButton.addEventListener('click', () => {
    if(operation == '+'){
        result = add(firstNumber,secondNumber);
        numberScreen.textContent = `${firstNumber} ${operation} ${secondNumber} = ${result}`;
    }else if(operation == '-'){
        result = subtract(firstNumber,secondNumber);
        numberScreen.textContent = `${firstNumber} ${operation} ${secondNumber} = ${result}`;
    }else if(operation == '*'){
        result = multiply(firstNumber,secondNumber);
        numberScreen.textContent = `${firstNumber} ${operation} ${secondNumber} = ${result}`;
    }else if(operation == '/'){
        result = divide(firstNumber,secondNumber);
        numberScreen.textContent = `${firstNumber} ${operation} ${secondNumber} = ${result}`;
    }
})



//number button onClick

nineButton.addEventListener('click', () => {
    setNumber("9");
})

eightButton.addEventListener('click', () => {
    setNumber("8");
})

sevenButton.addEventListener('click', () => {
    setNumber("7");
})

sixButton.addEventListener('click', () => {
    setNumber("6");
})

fiveButton.addEventListener('click', () => {
    setNumber("5");
})

fourButton.addEventListener('click', () => {
    setNumber("4");
})

threeButton.addEventListener('click', () => {
    setNumber("3");
})

twoButton.addEventListener('click', () => {
    setNumber("2");
})

oneButton.addEventListener('click', () => {
    setNumber("1");
})

zeroButton.addEventListener('click', () => {
    setNumber("0");
})



