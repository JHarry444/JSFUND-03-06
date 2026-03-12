// Events are the result of a user interacting with the webpage.

const { error } = require("console");

// click, double click, left click, right click, mmb, scroll, drag, focus, blur, hover, load

// we can excute js code in response to these events in order to 'handle them'

function toggle() {
    if (document.body.className === "dark") {
        document.body.className = "";
    } else {
        document.body.className = "dark";
    }
}


// const updateCounter = (update) => {
//     const counter = document.getElementById("counter");
//     if(update === 'r') {
//         counter.value = 0;
//     } else {
//         counter.value = parseFloat(counter.value) + update;
//     }
// }

const updateCounter = (event) => {
    debugger
    const buttonClicked = event.target;
    const counter = document.getElementById("counter");
    if (buttonClicked.textContent === 'R') {
        counter.value = 0;
    } else {
        counter.value = parseFloat(counter.value) + parseFloat(buttonClicked.textContent);
    }
}
// selecting every button in the counterSection
// forEach button I am applying an event listener
// this will listen for a click event and update the counter value
document
    .querySelectorAll("#counterSection > button")
    .forEach(button => {
        button.addEventListener("click", (event) => {
            debugger
            const buttonClicked = event.target;
            const counter = document.getElementById("counter");
            if (buttonClicked.textContent === 'R') {
                counter.value = 0;
            } else {
                counter.value = parseFloat(counter.value) + parseFloat(buttonClicked.textContent);
            }
        })
    })


const hoverHandler = function () {
    if (condition) return;
    console.log("I'M AN EVENT LISTENER");
}


document.getElementById("myButton").addEventListener("mouseover", hoverHandler);


document.getElementById("myButton").removeEventListener("mouseover", hoverHandler);


// Forms are collections of input elements whach are used to gather data from a user

document.getElementById("trainerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // this -> reference to w/e element the event was called on
    // ONLY works with anonymous functions (not arrows)
    console.log("THIS:", this);

    const newTrainer = {
        name: this.trainerName.value,
        age: this.trainerAge.value,
        specialism: this.trainerSpecialism.value,
    }
    fetch("http://localhost:8080/trainers", {
        method: "POST",
        body: JSON.stringify(newTrainer),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.status === 201) {
            this.reset();
            this.trainerName.focus();
            renderTrainers();
        } else {
            alert("Invalid trainer")
        }
    }).catch(err => console.error(err));


});

function renderTrainers() {
    // sends a GET request to localhost:8080/trainers
    fetch("http://localhost:8080/trainers")
        .then(response => response.json())
        .then(trainerJSON => {
            document.getElementById("trainerOutput").textContent = JSON.stringify(trainerJSON, null, 2);
        }).catch(err => console.error(err));


}

renderTrainers();