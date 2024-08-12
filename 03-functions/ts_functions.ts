function printMessage(message:string){
  console.log(`The message is : ${message}`);
}

printMessage("hello"); //The message is : hello

// printMessage(90); 
// Argument of type 'number' is not assignable to parameter of type 'string'


function greet(name:string = "Stranger", playerName:string = "Player"){
  console.log(`Hi ${name}. Your player name is ${playerName}`);
}

greet("John" , "John_pro🐶")
// Hi John. Your player name is John_pro🐶

greet()
// Hi Stranger. Your player name is Player

let fruits = ["apple" , "mango", "banana"];

function makeUpperCase(array:Array<string>){
  return array.map((element:string) => {
    return element.toUpperCase()
  });
}
console.log(makeUpperCase(fruits)); //[ 'APPLE', 'MANGO', 'BANANA' ]


//return type is automatically 'number'
function x(){
  return 24*9;
}

//return type is automatically 'void'
function y(){
  8+9;
}


//with 'never' , a function does not even finish executing.
//we can use 'never' : a function that throws an exception or a function that never finishes executing.

function Game():never{
  let i=1;
  while(true){
    console.log("game is running..." , i++);
  }
}

function execp(msg:string):never{
  throw new Error(msg)
}

// execp("joker error");
// Game()


function twoFer(name:string = "you"):string{
  return `one for ${name} , one for me`
}

console.log(twoFer());  //one for you , one for me
console.log(twoFer("dr.dom"));  //one for dr.dom , one for me


function isLeapYear(year:number):boolean{
  if(year%400 === 0){return true;}
  if(year%4 === 0 && year%100 !== 0){
    return true
  }

  return false;
}

console.log(isLeapYear(1998)); // false
console.log(isLeapYear(1900)); // fasle
console.log(isLeapYear(2000)); // trueclear
