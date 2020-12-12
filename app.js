const keyNums = document.querySelectorAll('.key-num');
const keyOperators = document.querySelectorAll('.key-operator');
const screen = document.querySelector('#screen');

let screenText = '';

keyNums.forEach(e => {
    e.addEventListener('click', () => {
        switch (e.getAttribute('id')) {
            case 'key-1':
                populateDisplay('1');
                break;
            case 'key-2':
                populateDisplay('2');
                break;
            case 'key-3':
                populateDisplay('3');
                break;
            case 'key-4':
                populateDisplay('4');
                break;
            case 'key-5':
                populateDisplay('5');
                break;
            case 'key-6':
                populateDisplay('6');
                break;
            case 'key-7':
                populateDisplay('7');
                break;
            case 'key-8':
                populateDisplay('8');
                break;
            case 'key-9':
                populateDisplay('9');
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
                populateDisplay('=');
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

function operate(num1, operator, num2) {
    switch (operator) {
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
    }
}

function clearScreen() {
    screen.innerHTML = '';
}

function clearMemory() {
    screenText = '';
}

function populateDisplay(input) {
    screenText += ' ' + input;
    screen.innerHTML = screenText;
}