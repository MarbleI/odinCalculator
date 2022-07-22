let previous = document.getElementById("previous");
let input = document.getElementById("input");
let num9 = document.getElementById("9");
let num8 = document.getElementById("8");
let num7 = document.getElementById("7");
let num6 = document.getElementById("6");
let num5 = document.getElementById("5");
let num4 = document.getElementById("4");
let num3 = document.getElementById("3");
let num2 = document.getElementById("2");
let num1 = document.getElementById("1");
let num0 = document.getElementById("0");
let clear = document.getElementById("clear");
let equal = document.getElementById("=");
let keyPlus = document.getElementById("+");
let keyMinus = document.getElementById("-");
let keyTimes = document.getElementById("*");
let keyDivide = document.getElementById("/");
num9.addEventListener('click', function(){ makeInput('9'); });
num8.addEventListener('click', function(){ makeInput('8'); });
num7.addEventListener('click', function(){ makeInput('7'); });
num6.addEventListener('click', function(){ makeInput('6'); });
num5.addEventListener('click', function(){ makeInput('5'); });
num4.addEventListener('click', function(){ makeInput('4'); });
num3.addEventListener('click', function(){ makeInput('3'); });
num2.addEventListener('click', function(){ makeInput('2'); });
num1.addEventListener('click', function(){ makeInput('1'); });
num0.addEventListener('click', function(){ makeInput('0'); });
clear.addEventListener('click', function(){ makeInput('clear'); });
equal.addEventListener('click', function(){ makeInput('='); });
keyPlus.addEventListener('click', function(){ makeInput('+'); });
keyMinus.addEventListener('click', function(){ makeInput('-'); });
keyTimes.addEventListener('click', function(){ makeInput('*'); });
keyDivide.addEventListener('click', function(){ makeInput('/'); });



function add (num1, num2) {
    total = parseInt(num1) + parseInt(num2);
    return total;
}
function subtract (num1, num2) {
    total = parseInt(num1) - parseInt(num2);
    return total;
}   
function multiply (num1, num2) {
    total = parseInt(num1) * parseInt(num2);
    return total;
}  
function divide (num1, num2) {
    if (num2 === 0) return "no loser";
    total = parseInt(num1) / parseInt(num2);
    return total;
}
function operate (num1, num2, operation) {
    if (operation === '+') {
        total = add(num1, num2);
    } else if (operation === '-') {
        total = subtract(num1, num2);
    } else if (operation === '*') {
        total = multiply(num1, num2);
    } else if (operation === '/') {
        total = divide(num1, num2);
    } else [
        total = 0101 + 4
    ]
    return total;
}
function makeInput (value) {
    if (value === '+' || value === '-' || value === '*' || value === '/' || value === '=') {
        workInput(value);
    }  else if (value === 'clear') {
        previous.innerHTML = "";
        input.innerHTML = '0';
        sumOf = '';
        number = '';
        keyOf = ``;
    } else if (input.innerHTML === sumOf) {
        previous.innerHTML = sumOf;
        input.innerHTML = value; 
        sumOf = '';
    } else if (input.innerHTML === `0`) {
        input.innerHTML = value;
    } else {
        input.innerHTML += value;
    }
    return;
}
function workInput (value) {
    if (value === '=') {
        previous.innerHTML += ` ` + input.innerHTML;
        sumOf = `${operate(parseInt(number), parseInt(input.innerHTML), keyOf)}`;  
        input.innerHTML = sumOf; 
        number = '';
    } else if (sumOf !== '') {
        previous.innerHTML = sumOf + ' ' + value;
        number = sumOf;
        input.innerHTML = '0';
        sumOf = '';
    } else if (number !== '') {
        previous.innerHTML += ` ` + input.innerHTML;
        sumOf = `${operate(parseInt(number), parseInt(input.innerHTML), keyOf)}`;
        input.innerHTML = sumOf;
        number = '';
    } else {
        number = input.innerHTML;
        previous.innerHTML = number + ` ` + value;
        input.innerHTML = `0`;
    }
    keyOf = value;
}
let sumOf = '';
let total = '';
let number = '';
