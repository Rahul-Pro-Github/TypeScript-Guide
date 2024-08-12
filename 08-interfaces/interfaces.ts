/*
- Interface : interfaces serves almost the exact same purpose as type aliases (with slightly different syntax)

- We can use them to create reusable, modular types that describe the shapes of objects.
*/

interface Person {
  name: string;
  age: number;
}

function birthdayGreet(person: Person) {
  console.log(
    `Happy birthday ${person.name}, congrats on turning ${person.age}`
  );
}

birthdayGreet({ name: "Alice", age: 20 }); // Happy birthday Alice, congrats on turning 20
birthdayGreet({ name: "Bob", age: 60 }); // Happy birthday Bob, congrats on turning 60

interface Point {
  x: number;
  y: number;
}

const point1: Point = { x: 10, y: 20 };

interface Employee {
  readonly id: number;
  firstName: string;
  lastName: string;
  salary: number;
  email?: string;
}

const employee1: Employee = {
  id: 101,
  firstName: "John",
  lastName: "doe",
  salary: 50_000,
  email: "john@gmail.com",
};

//employee1.id = 90 //Cannot assign to 'id' because it is a read-only property.

const employee2: Employee = {
  id: 102,
  firstName: "Kim",
  lastName: "doe",
  salary: 50_000,
};

employee2.salary = 90_000;

interface Student {
  id: number;
  sName: string;
  greet(): string;
}

const student1: Student = {
  id: 101,
  sName: "sam",
  greet() {
    return `Hello i am ${student1.sName}`;
  },
};

console.log(student1); //{ id: 101, sName: 'sam', greet: [Function: greet] }
console.log(student1.id); // 101
console.log(student1.sName); //sam
console.log(student1.greet()); //Hello i am sam

//Reopening interfaces.
interface Movie {
  title: string;
  year: number;
}

interface Movie {
  profit: number;
  loss: number;
}

const movie1: Movie = {
  title: "Mr Bean",
  year: 1928,
  profit: 90_000,
  loss: 10_000,
};

//Extending interfaces.
interface Animal {
  name: string;
}

const goat: Animal = { name: "Goat" };

//single inheritance
interface Cat extends Animal {
  cost: number;
  sound: () => string;
}

const tom: Cat = {
  name: "tom",
  sound() {
    return "Meow..";
  },
  cost: 90_000,
};

//multiple inheritance
interface PremiumCat extends Animal, Cat {
  color: string;
}
const snowbell:PremiumCat = {
  name:"Snow Bell",
  cost:100_000,
  color:"white",
  sound(){
    return "Meow..Meow.."
  }
}