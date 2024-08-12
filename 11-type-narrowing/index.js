// typeof guard
function triple(arg) {
    if (typeof arg === "string") {
        return arg.concat(arg).concat(arg);
    }
    return arg * 3;
}
console.log(triple("abc")); //abcabcabc
console.log(triple(2)); //6
//Truthiness check
function greet(name) {
    if (name) {
        for (var _i = 0, name_1 = name; _i < name_1.length; _i++) {
            var char = name_1[_i];
            console.log(char);
        }
    }
    else {
        console.log("No Name Provided");
    }
}
greet("Jake"); // J A K E
greet(); //No Name Provided
//Equality Narrowing
function greet2(x, y) {
    if (x === y) {
        console.log(x.toUpperCase());
    }
}
greet2("jake", "jake"); //JAKE
function calculateDuration(media) {
    if ("duration" in media) {
        return media.duration;
    }
    return media.numOfEpisodes * media.durationOfEachEpisode;
}
var movie1 = { title: "Joker", duration: 143 };
var webser1 = {
    title: "Lion King",
    numOfEpisodes: 10,
    durationOfEachEpisode: 30,
};
console.log(calculateDuration(movie1)); //143
console.log(calculateDuration(webser1)); //300
//instance of (works only with classes, not object)
var Fish = /** @class */ (function () {
    function Fish(id, name) {
        this.id = id;
        this.name = name;
    }
    return Fish;
}());
var nemo = { id: 101, name: "Nemo" };
console.log(nemo instanceof Fish); //false
var nemo2 = new Fish(102, "Nemo2");
console.log(nemo2 instanceof Fish); //true
// const kitty:Cat = {name:"Kitty", numLives:9}
// console.log(kitty is Cat);
// Type Guard Function to Check if the Animal is a Cat
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        console.log("Meow");
    }
    else {
        console.log("Woff");
    }
}
var kitty = { name: "Kitty", numLives: 9 };
var bruno = { name: "bruno", breed: "husky" };
makeNoise(kitty); // meow
makeNoise(bruno); //Woff
function getAnimalSound(animal) {
    switch (animal.type) {
        case "lion":
            return "lion sound";
        case "tiger":
            return "tiger sound";
    }
}
var tiger1 = {
    type: "tiger",
    color: "orange",
    legs: 4,
};
var lion1 = {
    type: "lion",
    color: "yellow",
    legs: 4,
};
console.log(getAnimalSound(tiger1)); //tiger sound
console.log(getAnimalSound(lion1)); //lion sound
function birdSound(bird) {
    switch (bird.type) {
        case "eagle":
            return "eagle is flying";
        case "parrot":
            return "parrot is flying";
        case "crow":
            return "crow is flying";
        case "hen":
            return "hen is flying";
        default:
            var _exhaustiveCheck = bird;
            return _exhaustiveCheck;
    }
}
var eagle1 = { type: "eagle", color: "brown" };
var parrot1 = { type: "parrot", color: "green" };
var crow1 = { type: "crow", color: "black" };
var hen1 = { type: "hen", color: "white" };
console.log(birdSound(eagle1)); //eagle is flying
console.log(birdSound(parrot1)); //parrot is flying
console.log(birdSound(crow1)); //crow is flying
console.log(birdSound(hen1));
