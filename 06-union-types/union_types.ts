type Point = {
  x: number;
  y: number;
};

type Position = {
  lat: number;
  lon: number;
};

let coordinates: Point | Position = { x: 10, y: 20 };
coordinates = { lat: 90.22, lon: 28.22 };

console.log(typeof coordinates); //object
console.log(coordinates); //{ lat: 90.22, lon: 28.22 }

//type narrowing
function calculateTax(amount: string | number, tax: number): void {
  if (typeof amount === "string") {
    amount = parseInt(amount.replace("$", ""));
  }
  console.log(amount * tax);
}

calculateTax(100, 0.12); //12
calculateTax("$100", 0.19); //19

//array that can contain only numbers
const numsOnly: number[] = [1, 2, 3, 4, 5];

//array that can contain only strings
const stringOnly: string[] = ["a", "b", "c", "d"];

//array that can contain both numbers and string
const numsAndString: (number | string)[] = [1, 2, "a", "b"];

//array that can contain both Point and Position types
const pointAndPosition: (Point | Position)[] = [
  { lat: 23.2, lon: 90 },
  { x: 89, y: 87 },
];

//literal types

let zero: 0 = 0;
// zero = 3  //Type '3' is not assignable to type '0'

let mood: "happy" | "sad" = "sad";
mood = "happy";
//mood="normal"  //Type '"normal"' is not assignable to type '"happy" | "sad"'.

let isFunny: "Yes" | "No" | "MayBe" = "No";
isFunny = "Yes";
isFunny = "MayBe";
// isFunny = "true"Type '"true"' is not assignable to type '"Yes" | "No" | "MayBe"'.

// --------------------Exercise-------------
let highScore: number | boolean = 10;
highScore = true;
highScore = false;
highScore = 67;

let onlyNumsOrOnlyStrings: number[] | string[] = [1, 2, 3, 4];
onlyNumsOrOnlyStrings = ["a", "b", "c"];
// onlyNumsOrOnlyStrings = [1,2,'a'] (not allowed to mix string and numbers)

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

let mySkillLevel: SkillLevel = "Intermediate";
mySkillLevel = "Advanced";
mySkillLevel = "Expert";
// mySkillLevel = "pro"; (not allowed to assign this value)

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

type RGB = {
  r: number;
  g: number;
  b: number;
};

type HSL = {
  h: number;
  s: number;
  l: number;
};

//array that can hold a mixture of RGB and HSL colors.
let colors: (RGB | HSL)[] = [
  { r: 10, g: 20, b: 30 },
  { h: 0, s: 10, l: 30 },
];

function greet(value: string | string[]):void {
  if (typeof value === "string") console.log(`hello ${value}`);
  else {
    for (let val of value) {
      console.log(`hello ${val}`);
    }
  }
}

greet("John"); //hello John
greet(["Kim", "Jin"]);
//hello Kim
//hello Jin
