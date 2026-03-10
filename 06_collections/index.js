// Collections


// literals

// 'hello' "yo" `Hello, my name is ${name}`
// 12 true

// Sets
// Like an array but not indexed (usually) and only contains unique values


const mySet = new Set();

mySet.add("Jordan");

mySet.add("Cameron");

mySet.add("Jordan"); // ignored as sets do not have duplicates

mySet.add("Shafeeq");

console.log("MYSET:", mySet);

// mySet = new Array();


// Maps

// sometimes called a dictionary
// key-value pairs

const myMap = new Map();

myMap.set("4494", "Jordan");
myMap.set("1234", "Cameron");
myMap.set("2423", "Jordan");
myMap.set("3242", "Shafeeq");

console.log(myMap);

mySet.delete("Shafeeq");

myMap.get("4494");

for (let element of mySet) {
    console.log("ELE:", element);
}

for (let key of myMap.keys()) {
    console.log("KEY:", key);
    console.log("VALUE:", myMap.get(key));
}

for (let [key, value] of myMap) {
    console.log("KEY:", key);
    console.log("VALUE:", myMap.get(key));
}
myMap.has("4494")