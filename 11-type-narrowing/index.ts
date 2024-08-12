// typeof guard

function triple(arg: string | number) {
  if (typeof arg === "string") {
    return arg.concat(arg).concat(arg);
  }
  return arg * 3;
}

console.log(triple("abc")); //abcabcabc
console.log(triple(2)); //6

//Truthiness check
function greet(name?: string) {
  if (name) {
    for (let char of name) {
      console.log(char);
    }
  } else {
    console.log("No Name Provided");
  }
}

greet("Jake"); // J A K E
greet(); //No Name Provided

//Equality Narrowing
function greet2(x: string | number, y: string | boolean) {
  if (x === y) {
    console.log(x.toUpperCase());
  }
}
greet2("jake", "jake"); //JAKE

//--------------------------------

interface Movie {
  title: string;
  duration: number;
}
interface WebSeries {
  title: string;
  numOfEpisodes: number;
  durationOfEachEpisode: number;
}

function calculateDuration(media: Movie | WebSeries) {
  if ("duration" in media) {
    return media.duration;
  }
  return media.numOfEpisodes * media.durationOfEachEpisode;
}

const movie1: Movie = { title: "Joker", duration: 143 };

const webser1: WebSeries = {
  title: "Lion King",
  numOfEpisodes: 10,
  durationOfEachEpisode: 30,
};

console.log(calculateDuration(movie1)); //143
console.log(calculateDuration(webser1)); //300

//instance of (works only with classes, not object)

class Fish {
  constructor(public id: number, public name: string) {}
}

const nemo: Fish = { id: 101, name: "Nemo" };
console.log(nemo instanceof Fish); //false

const nemo2 = new Fish(102, "Nemo2");
console.log(nemo2 instanceof Fish); //true

interface Dog {
  name: string;
  breed: string;
}
interface Cat {
  name: string;
  numLives: number;
}

// const kitty:Cat = {name:"Kitty", numLives:9}
// console.log(kitty is Cat);

// Type Guard Function to Check if the Animal is a Cat
function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog) {
  if (isCat(animal)) {
    console.log("Meow");
  } else {
    console.log("Woff");
  }
}

const kitty: Cat = { name: "Kitty", numLives: 9 };
const bruno: Dog = { name: "bruno", breed: "husky" };

makeNoise(kitty); // meow
makeNoise(bruno); //Woff

//-----------------------Dicriminated Unions--------------
interface Lion {
  type: "lion";
  color: string;
  legs: number;
}

interface Tiger {
  type: "tiger";
  color: string;
  legs: number;
}

type Animal = Lion | Tiger;

function getAnimalSound(animal: Animal): string {
  switch (animal.type) {
    case "lion":
      return "lion sound";
    case "tiger":
      return "tiger sound";
  }
}

let tiger1: Tiger = {
  type: "tiger",
  color: "orange",
  legs: 4,
};

let lion1: Lion = {
  type: "lion",
  color: "yellow",
  legs: 4,
};

console.log(getAnimalSound(tiger1)); //tiger sound
console.log(getAnimalSound(lion1)); //lion sound

//exhaustive check
interface Eagle {
  type: "eagle";
  color: string;
}
interface Parrot {
  type: "parrot";
  color: string;
}
interface Crow {
  type: "crow";
  color: string;
}
interface Hen {
  type: "hen";
  color: string;
}

type Bird = Eagle | Parrot | Crow | Hen;

function birdSound(bird: Bird): string {
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
      const _exhaustiveCheck: never = bird;
      return _exhaustiveCheck;
  }
}

const eagle1: Eagle = { type: "eagle", color: "brown" };
const parrot1: Parrot = { type: "parrot", color: "green" };
const crow1: Crow = { type: "crow", color: "black" };
const hen1: Hen = { type: "hen", color: "white" };

console.log(birdSound(eagle1)); //eagle is flying
console.log(birdSound(parrot1)); //parrot is flying
console.log(birdSound(crow1)); //crow is flying
console.log(birdSound(hen1)); //hen is flying

//The leading | below is purely a formatting choice and has no effect on the meaning or behavior of the union type.
//It helps with readability and maintainability, especially in larger or more complex type definitions.
type temp =
  | boolean
  | number
  | string
  | bigint
  | never
  | undefined
  | []
  | [][]
  | null;
