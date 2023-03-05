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

    //add parseFloat method to avoid string concatanation error
    return parseFloat(a) + parseFloat(b);
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

let inputArray = [];

function setNumber(num) {

    firstNumber += num;
    numberScreen.textContent += num;

    parseFloat(firstNumber);
}

//operation onClick

decimalButton.addEventListener('click', () => {
    if(!firstNumber.includes('.')){
        firstNumber += '.';
        numberScreen.textContent += '.';
    }
})

clearButton.addEventListener('click', () => {
    numberScreen.textContent = "";

    //reset calculator
    operationButtonClicked = false;
    inputArray = [];
    firstNumber = "";
});

addButton.addEventListener('click', () => {
    operation = '+';
    inputArray.push(parseFloat(firstNumber));
    inputArray.push("+");
    firstNumber = "";
    numberScreen.textContent += " + ";
});

subtractButton.addEventListener('click', () => {
    operation = '-';
    inputArray.push(parseFloat(firstNumber));
    inputArray.push("-");
    firstNumber = "";
    numberScreen.textContent += " - ";
})

multiplyButton.addEventListener('click', () => {
    operation = '*';
    inputArray.push(parseFloat(firstNumber));
    inputArray.push("*");
    firstNumber = "";
    numberScreen.textContent += " * ";
});

divideButton.addEventListener('click', () => {
    operation = '/';
    inputArray.push(parseFloat(firstNumber));
    inputArray.push("/");
    firstNumber = "";
    numberScreen.textContent += " / ";
})

equalsButton.addEventListener('click', () => {
    inputArray.push(parseFloat(firstNumber));
    numberScreen.textContent = evaluate();

})

function evaluate(){
    console.log(inputArray.length);
    result = inputArray[0];

    // console.log(result);
    for(i=1; i < inputArray.length; i = i + 2){
        if(inputArray[i] == '+'){
            result = result + inputArray[i+1];
        }else if(inputArray[i] == '-'){
            result = result - inputArray[i+1];
        }else if(inputArray[i] == '*'){
            result = result * inputArray[i+1];
        }else if(inputArray[i] == '/'){
            result = result / inputArray[i+1];
        }
    }
    
    return result;
}

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



