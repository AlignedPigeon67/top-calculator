const keyNums = document.querySelectorAll('.key-num');
const keyOperators = document.querySelectorAll('.key-operator');
const screen = document.querySelector('#screen');

let screenText = '';
let answerText;
let operatorUsed = false;

keyNums.forEach(e => {
    e.addEventListener('click', () => {
        switch (e.getAttribute('id')) {
            case 'key-dec-point':
                populateDisplay('.');
                break;
            case 'key-make-negative':
                populateDisplay('negative');
                break;
            case 'key-0':
                populateDisplay(0);
                break;
            case 'key-1':
                populateDisplay(1);
                break;
            case 'key-2':
                populateDisplay(2);
                break;
            case 'key-3':
                populateDisplay(3);
                break;
            case 'key-4':
                populateDisplay(4);
                break;
            case 'key-5':
                populateDisplay(5);
                break;
            case 'key-6':
                populateDisplay(6);
                break;
            case 'key-7':
                populateDisplay(7);
                break;
            case 'key-8':
                populateDisplay(8);
                break;
            case 'key-9':
                populateDisplay(9);
                break;
        }
    });
});

keyOperators.forEach(e => {
    e.addEventListener('click', () => {
        switch (e.getAttribute('id')) {
            case 'key-add':
                populateDisplay('+');
                break;
            case 'key-subtract':
                populateDisplay('-');
                break;
            case 'key-multiply':
                populateDisplay('*');
                break;
            case 'key-divide':
                populateDisplay('/');
                break;
            case 'key-equals':
                answerText = operate(screenText);
                operatorUsed = false;
                clearScreen();
                clearMemory();
                answerDisplay(answerText);
                clearMemory();
                break;
            case 'key-clear':
                clearScreen();
                clearMemory();
                break;
        }
    });
});

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(inputString) {
    const inputArr = inputString.split(" ");
    const num1 = parseFloat(inputArr[0]);
    const operator = inputArr[1];
    const num2 = parseFloat(inputArr[2]);

    /*console.log(inputString);
    console.log(inputArr);
    console.log(num1);
    console.log(operator);
    console.log(num2);*/

    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

function clearScreen() {
    screen.innerHTML = '';
}

function clearMemory() {
    screenText = '';
    operatorUsed = false;
}

function populateDisplay(input) {
    if (input === undefined) return;

    if (Number.isInteger(input) || input === '.') {
        screenText += input;
    }
    else if (input === 'negative') {
        screenText += '-';
    }
    else if (!operatorUsed) {
        screenText += ' ' + input + ' ';
        operatorUsed = true;
    }
    screen.innerHTML = screenText;
}

function answerDisplay(input) {
    let inputArr = input.toString().split('.');

    if (inputArr.length > 1) {
        if (inputArr[1].length > 3) {
            let decimals = parseFloat('0.' + inputArr[1]).toFixed(10);
            inputArr[1] = decimals.toString().split('.')[1];
        }
    }

    screen.innerHTML = inputArr.join('.');
}