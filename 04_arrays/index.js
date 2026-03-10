// arrays are collections of data

// indexed

// 0->jordan
// 1->cameron
// 2->jordan
// 3->shafeeq
const names = ["Jordan", "Cameron", "Jordan", "Shafeeq"];

console.log("First name:", names[0]);


// puts "Jordan B" at pos 3 (index 2)
names[2] = "Jordan B"
// puts "Barry" at pos 100 (index 99)

names[99] = "Barry"

// Removes the last element
names.pop()

console.log("Names:", names, "Length:", names.length);


console.log("Last element:", names[names.length - 1]);

while (names[names.length - 1] === undefined) {
    names.pop();
}

console.log("Names:", names);

// Adds Laura onto the end of the array
names.push("Laura");


console.log("Names:", names);

// removes first element
names.shift();

console.log("Names:", names);

// adds an element to the start of the array
names.unshift("Jordan");

for (let i = 0; i < names.length; i++) {
    console.log("I:", i, "Name:", names[i]);
}

for (let i = 0; i < names.length; i+=2) {
    console.log("I:", i, "Name:", names[i]);
}

for (let i = names.length - 1; i >= 0; i--) {
    console.log("I:", i, "Name:", names[i]);
}

for (let name of names) {
    console.log("Name:", name);
}

