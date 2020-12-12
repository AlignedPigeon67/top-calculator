const keyNums = document.querySelectorAll(".key-num");
const key2 = document.querySelector('#key-2');

keyNums.forEach(e => {
    e.addEventListener("click", () => {
        console.log(e.getAttribute("id"));
    })
})

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

function populateDisplay() {

}