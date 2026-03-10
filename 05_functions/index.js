"use strict"; // enables strict mode (disables implied globals)
// function

// Function is a reusable block of code that performs a task or a set of tasks
// can have inputs and outputs

// function -> keyword that creates the function
// add -> name you use to refer back to the function later
// a, b -> parameters (input)
// return -> defines the output of the function
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// scope
// Where can a thing be accessed?
// Inside the same set of {}
// console.log("a", a); can't access a cos it's 'scoped' to the add function

for (let i = 0; i <= 10; i++) {
    console.log("I:", i);
}

for (let i = 0; i < 10; i += 2) {
    console.log("I:", i);
}

for (let i = 10; i > 0; i--) {
    console.log("I:", i);
}

// console.log("I:", i);


function scope() {
    let a = 1;
    {
        var b = 12; // vars are 'function scoped'
        c = "hello"; // w/o using var/let/const you will get an 'implied global' this can be disabled using 'use strict'
    }
    console.log("A:", a, "B:", b);

}

// console.log("B:", b);


// function expressions

const multiply = function (a, b) {
    return a * b;
}

// lambda expresion
const divide = (a, b) => a / b;

// arow function ONE parameter can skip the ()
const print = toPrint => console.log(toPrint);


const getNum = () => {
    let num;

    do {
        num = parseFloat(prompt("Enter a number between 1 and 10:"));
        if (!(num >= 1 && num <= 10)) {
            alert(`${num} is NOT a number between 1 and 10!`);
        }
    } while (!(num >= 1 && num <= 10));

    return num;
}


const names = ["JH", "CG", "SM", "LR"];


names.forEach(name => console.log("Name:", name));


const me = names.find(name => {
    return name.toLowerCase().startsWith("j");
})

console.log("ME?:", me);


const find = (array, matches) => {
    for (let element of array) {
        if (matches(element)) {
            return element;
        }
    }
}

find(names, (element) => element.toLowerCase().startsWith("l"));