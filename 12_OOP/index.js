// class lets you create a schema (structure) for objects
// any object created from this class will have the same fields + methods (variables + functions)

class Animal {
    // lets us pass in the initial data
    // const myAnimal = new Animal("Barry", "Green", 4);
    constructor(name, colour, numberOfLegs) {
        // this.x -> instance variable
        this._name = name;
        this._colour = colour;
        this._numberOfLegs = numberOfLegs;
    }
    setName(name) {
        this._name = name;
    }
    getName() {
        return this._name;
    }

    setColour(colour) {
        this._colour = colour;
    }

    getColour() {
        return this._colour;
    }

    setNumberOfLegs(numberOfLegs) {
        if (numberOfLegs >= 0 && numberOfLegs <= 1_000)
            this._numberOfLegs = numberOfLegs;
        else 
            console.log("Invalid number of legs:", numberOfLegs);
            
    }

    getNumberOfLegs() {
        return this._numberOfLegs;
    }
}

const myAnimal = new Animal("Barry", "Green", 4);

console.log(myAnimal);


// if a class extends another class it will 'inherit' all of its fields and methods

class Dog extends Animal {
    constructor(name, colour, breed) {
        super(name, colour, 4);
        this._breed = breed;
    }

    setBreed(breed) {
        this._breed = breed;
    }

    getBreed() {
        return this._breed;
    }

    fetch() {
        console.log("GOOD BOI!!!");
    }
}