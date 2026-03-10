// Objects

// Objects vs arrays

// Array is a collection of potentially related data

// Object is a data structure usually representing an individual instance/event

// Set of key/value pairs


const me = {
    name: "Jordan H",
    age: 31,
    job: "Trainer"
}

const obj = new Object();

console.log("Name:", me.name);
console.log("Name:", me["name"]);

me.age++

console.log(me);

// destructuring
const {name, ...rest} = me;


function greeting({name, age, job}) {
    return `Hello! My name is ${name} and I am ${age} year old ${job}`;
}

const nums = ["Primes:", 2, 3, 5, 7, 11, 13, 17, 19];

const [title, ...numbers] = nums;

// JSON

// JavaScript Object Notation

// the standard data format particularly for sending data over the web

const myJson = JSON.stringify(me);