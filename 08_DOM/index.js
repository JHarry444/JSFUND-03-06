// DOM Manipulation

// Document Object Model - Tree that represents the structure of the webpage
// My modified the document object you can cause changes on the webpage

// Adding a new element to the page


// Creates a new element (held in memory for now, not on the page)
const newP = document.createElement("p");
// can modify it before you add it to the page
newP.textContent = "Hello!";
// can add it to the page using append/child/etc
// document.body.appendChild(newP);
document.getElementById("output").appendChild(newP);

//Modifying an existing element
// grabs an existing element by its id
const myP = document.getElementById("firstP");
// can modify the text content and its style
myP.textContent = "I have been changed by JS";
myP.style.color = "blue";

// can also select elements using a css selector, this one finds the first paragragh after the one with an id of firstP
const secondP = document.querySelector("#firstP+p");
secondP.textContent = "I have been ALSO been changed by JS";
secondP.style.color = "red";

const firstSection = document.querySelector("body > main > section:nth-child(1)");

const newInput = document.createElement("input");
newInput.value = "This is text content";
// newInput.className = "myClass";
newInput.classList.add("myClass");
firstSection.appendChild(newInput);

const createElement = function (type = "p", text = "", style) {
    const newElement = document.createElement(type);
    if (type === "input") newElement.value = text;
    else newElement.textContent = text;

    for (key in style) {
        debugger
        newElement.style[key] = style[key];
    }

    return newElement;
}


firstSection.appendChild(createElement("p", "Hello!", { color: "yellow", "fontWeight": "bold" }));
firstSection.appendChild(createElement("button", "Click me!", { color: "black", "backgroundColor": "white" }));