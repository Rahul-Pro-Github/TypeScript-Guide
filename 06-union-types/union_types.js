var coordinates = { x: 10, y: 20 };
coordinates = { lat: 90.22, lon: 28.22 };
console.log(typeof coordinates); //object
console.log(coordinates); //{ lat: 90.22, lon: 28.22 }
//type narrowing
function calculateTax(amount, tax) {
    if (typeof amount === "string") {
        amount = parseInt(amount.replace("$", ""));
    }
    console.log(amount * tax);
}
calculateTax(100, 0.12); //12
calculateTax("$100", 0.19); //19
//array that can contain only numbers
var numsOnly = [1, 2, 3, 4, 5];
//array that can contain only strings
var stringOnly = ["a", "b", "c", "d"];
//array that can contain both numbers and string
var numsAndString = [1, 2, "a", "b"];
//array that can contain both Point and Position types
var pointAndPosition = [
    { lat: 23.2, lon: 90 },
    { x: 89, y: 87 },
];
//literal types
var zero = 0;
// zero = 3  //Type '3' is not assignable to type '0'
var mood = "sad";
mood = "happy";
//mood="normal"  //Type '"normal"' is not assignable to type '"happy" | "sad"'.
var isFunny = "No";
isFunny = "Yes";
isFunny = "MayBe";
// isFunny = "true"Type '"true"' is not assignable to type '"Yes" | "No" | "MayBe"'.
// --------------------Exercise-------------
var highScore = 10;
highScore = true;
highScore = false;
highScore = 67;
var onlyNumsOrOnlyStrings = [1, 2, 3, 4];
onlyNumsOrOnlyStrings = ["a", "b", "c"];
var mySkillLevel = "Intermediate";
mySkillLevel = "Advanced";
mySkillLevel = "Expert";
//array that can hold a mixture of RGB and HSL colors.
var colors = [
    { r: 10, g: 20, b: 30 },
    { h: 0, s: 10, l: 30 },
];
function greet(value) {
    if (typeof value === "string")
        console.log("hello ".concat(value));
    else {
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var val = value_1[_i];
            console.log("hello ".concat(val));
        }
    }
}
greet("John");
greet(["Kim", "Jin"]);
