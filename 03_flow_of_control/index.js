// flow of control basically allows to control ofter an piece of 
// code exectutes (once, never, more than once)

const name = "JH"; const age = 23; const job = "trainer";

if (age >= 65) {
    console.log(name, "is old enough to retire (for now)");
} else if (age >= 18) {
    console.log(name, "is old enough to vote");
} else if (age < 18) {
    console.log(name, "is NOT old enough to vote");
} else {
    console.log("Invalid age");
}


if (name === "JH" && job == "trainer")
    console.log("Literally me");
else if (name === "JH" || job == "trainer")
    console.log(name, "is a solid dude");

let day = 0;


switch (day) {
    case 0: console.log("SUNDAY");
        break;
    case 1: console.log("MONDAY");
        break;
    case 2: console.log("TUESDAY");
        break;
    case 3: console.log("WEDNESDAY");
        break;
    case 4: console.log("THURSDAY");
        break;
    case 5: console.log("FRIDAY");
        break;
    case 6: console.log("SATURDAY");
        break;
}

// let retired;

// if (age >= 65) retired = true;
// else if (age < 65) retired = false;

// ternary statement
let status = age < 65 ? "active" : "retired";
console.log("Status:", status);


// LOOPS

// FOR loop -> when you know how many iterations you are going to do

// start; stop; increment/decrement
for (let i = 0; i < 10; i++) {
    if (i % 4 === 1) continue;
    console.log("I:", i);

}

for (let i = 0; i <= 10; i++) {
    console.log("I:", i);
}

for (let i = 0; i < 10; i += 2) {
    console.log("I:", i);
}

for (let i = 10; i > 0; i--) {
    console.log("I:", i);
}

// WHILE loop

// a while loop does not know how long it'll run for

// a DO WHILE loop is basically a while loop that always runs at least once
let num = 3;

do {
    num = parseFloat(prompt("Enter a number between 1 and 10:"));
    if (!(num >= 1 && num <= 10)) {
        alert(`${num} is NOT a number between 1 and 10!`);
    }
} while (!(num >= 1 && num <= 10));

console.log("Your number:", num);
