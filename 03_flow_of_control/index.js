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
let status  = age < 65 ? "active" : "retired"; 
console.log("Status:", status);
