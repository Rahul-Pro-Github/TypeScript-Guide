/*
Generics in TypeScript allow you to create reusable components that can work with a variety of data types while still maintaining type safety.

They are like functions or classes that can operate on a type parameter, which is specified when the function, class, or interface is used.

*/
//generic function
function identity<T>(arg:T):T{
 return arg;
}

const i1 = identity<string>("My string")
console.log(i1); //My string

const i2 = identity<number>(10);
console.log(i2);//10

const i3 = identity<boolean>(true);
console.log(i3);//true
