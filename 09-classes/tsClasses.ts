class Player {
  readonly id: number;
  firstName: string;
  lastName: string;
  score: number = 0;

  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const p1 = new Player(101, "John", "Smith");
console.log(p1);
// Player { score: 0, id: 101, firstName: 'John', lastName: 'Smith' }

console.log(p1.score); //0

p1.score = 99;
console.log(p1.score); //99

// p1.id = 23 (Cannot assign to 'id' because it is a read-only property.)

class Employee {
  id: number;
  name: string;
  private salary: number;

  constructor(id: number, name: string, salary: number) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }
}
const emp1 = new Employee(101, "John", 10_000);
console.log(emp1); //Employee { id: 101, name: 'John', salary: 10000 }

// emp1.salary = 90_000
// (Property 'salary' is private and only accessible within class 'Employee'.)

//parameter properties shorthand
class Product {
  constructor(
    private id: number,
    public name: string,
    public price: number,
    public category: string
  ) {}
}

const product1 = new Product(101, "Plate", 200, "utensil");
console.log(product1);
// Product { id: 101, name: 'Plate', price: 200, category: 'utensil' }
product1.name = "iPhone";
product1.price = 900;
product1.category = "Mobile";
// product1.id = 8
// (Property 'id' is private and only accessible within class 'Product')

console.log(product1);
// Product { id: 101, name: 'iPhone', price: 900, category: 'Mobile' }

class GroupAdmin {
  constructor(
    protected name: string,
    private age: number,
    private isAdmin: boolean
  ) {}
  public get Name() {
    return this.name;
  }
  public get Age() {
    return this.age;
  }
  public get IsAdmin() {
    return this.isAdmin;
  }

  public set Name(name: string) {
    this.name = name;
  }
  public set Age(age: number) {
    this.age = age;
  }
  public set IsAdmin(isAdmin: boolean) {
    this.isAdmin = isAdmin;
  }
}

const admin = new GroupAdmin("Adam", 20, true);
console.log(admin);
// GroupAdmin { name: 'Adam', age: 20, isAdmin: true }

// console.log(admin.name);
//Property 'name' is protected and only accessible within class 'GroupAdmin'.

console.log(admin.Name); //adam
console.log(admin.Age); //20
console.log(admin.IsAdmin); //true

admin.Name = "John";
admin.Age = 13;
admin.IsAdmin = true;

console.log(admin);
// GroupAdmin { name: 'John', age: 13, isAdmin: true }

class SuperAdmin extends GroupAdmin {
  public isadmin: boolean;
  changeName() {
    this.name = "John";
  }
}

const s = new SuperAdmin("Fish", 20, true);
console.log(s);
// SuperAdmin { name: 'Fish', age: 20, isAdmin: true }

s.changeName();
console.log(s);
// SuperAdmin { name: 'John', age: 20, isAdmin: true }

interface Color {
  color: string;
}

interface Brand {
  brand: string;
}

class Jacket implements Color, Brand {
  constructor(private id: number, public color: string, public brand: string) {}
}

const jacket1 = new Jacket(101, "green", "Nike");
console.log(jacket1);
//Jacket { id: 101, color: 'green', brand: 'Nike' }

// ----------------------abstract classes--------------------------
abstract class NewEmployee {
  constructor(protected name: string, protected age: number) {}

  // abstarct method
  abstract getSalary(): number;

  //concrete method
  getDetails(): string {
    return `Name:${this.name}, Age:${this.age},`;
  }
}

class FullTimeEmployee extends NewEmployee {
  private salary: number;

  constructor(name: string, age: number, salary: number) {
    // Call the constructor of the superclass (NewEmployee)
    super(name, age);
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends NewEmployee {
  private hourlyRate: number;
  private hoursWorked: number;

  constructor(
    name: string,
    age: number,
    hourlyRate: number,
    hoursWorked: number
  ) {
    // Call the constructor of the superclass (NewEmployee)
    super(name, age);
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }

  getSalary(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const fTE1 = new FullTimeEmployee("John", 25, 25_000);
console.log(fTE1);
// FullTimeEmployee { name: 'John', age: 25, salary: 25000 }
console.log(fTE1.getDetails()); // Name:John, Age:25,
console.log(fTE1.getSalary()); //25000


const pTE = new PartTimeEmployee("Jack", 21, 10, 50);
console.log(pTE);
/* PartTimeEmployee {
  name: 'Jack',
  age: 21,
  hourlyRate: 10,
  hoursWorked: 50
}
*/
console.log(pTE.getDetails()); // Name:Jack, Age:21,
console.log(pTE.getSalary()); //500