/*
- Interface : interfaces serves almost the exact same purpose as type aliases (with slightly different syntax)

- We can use them to create reusable, modular types that describe the shapes of objects.
*/
function birthdayGreet(person) {
    console.log("Happy birthday ".concat(person.name, ", congrats on turning ").concat(person.age));
}
birthdayGreet({ name: "Alice", age: 20 }); // Happy birthday Alice, congrats on turning 20
birthdayGreet({ name: "Bob", age: 60 }); // Happy birthday Bob, congrats on turning 60
var point1 = { x: 10, y: 20 };
var employee1 = {
    id: 101,
    firstName: "John",
    lastName: "doe",
    salary: 50000,
    email: "john@gmail.com",
};
//employee1.id = 90 //Cannot assign to 'id' because it is a read-only property.
var employee2 = {
    id: 102,
    firstName: "Kim",
    lastName: "doe",
    salary: 50000,
};
employee2.salary = 90000;
var student1 = {
    id: 101,
    sName: "sam",
    greet: function () {
        return "Hello i am ".concat(student1.sName);
    },
};
console.log(student1);
console.log(student1.id);
console.log(student1.sName);
console.log(student1.greet());
