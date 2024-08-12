function printMessage(message) {
    console.log("The message is : ".concat(message));
}
printMessage("hello"); //The message is : hello
// printMessage(90); 
// Argument of type 'number' is not assignable to parameter of type 'string'
function greet(name, playerName) {
    if (name === void 0) { name = "Stranger"; }
    if (playerName === void 0) { playerName = "Player"; }
    console.log("Hi ".concat(name, ". Your player name is ").concat(playerName));
}
greet("John", "John_pro🐶");
// Hi John. Your player name is John_pro🐶
greet();
// Hi Stranger. Your player name is Player
var fruits = ["apple", "mango", "banana"];
function makeUpperCase(array) {
    return array.map(function (element) {
        return element.toUpperCase();
    });
}
console.log(makeUpperCase(fruits)); //[ 'APPLE', 'MANGO', 'BANANA' ]
//return type is automatically 'number'
function x() {
    return 24 * 9;
}
//return type is automatically 'void'
function y() {
    8 + 9;
}
//with 'never' , a function does not even finish executing.
//we can use 'never' : a function that throws an exception or a function that never finishes executing.
function Game() {
    var i = 1;
    while (true) {
        console.log("game is running...", i++);
    }
}
function execp(msg) {
    throw new Error(msg);
}
// execp("joker error");
// Game()
function twoFer(name) {
    if (name === void 0) { name = "you"; }
    return "one for ".concat(name, " , one for me");
}
console.log(twoFer()); //one for you , one for me
console.log(twoFer("dr.dom")); //one for dr.dom , one for me
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    return false;
}
console.log(isLeapYear(1998)); // false
console.log(isLeapYear(1900)); // fasle
console.log(isLeapYear(2000)); // fasle
