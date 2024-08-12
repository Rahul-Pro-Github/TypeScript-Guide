/*
Generics in TypeScript allow you to create reusable components that can work with a variety of data types while still maintaining type safety.

They are like functions or classes that can operate on a type parameter, which is specified when the function, class, or interface is used.

*/
//generic function
function identity(arg) {
    return arg;
}
var i1 = identity("My string");
console.log(i1);
var i2 = identity(10);
console.log(i2);
var i3 = identity(true);
console.log(i3);
