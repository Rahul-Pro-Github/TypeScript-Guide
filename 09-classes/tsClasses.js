var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function () {
    function Player(id, firstName, lastName) {
        this.score = 0;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Player;
}());
var p1 = new Player(101, "John", "Smith");
console.log(p1);
// Player { score: 0, id: 101, firstName: 'John', lastName: 'Smith' }
console.log(p1.score); //0
p1.score = 99;
console.log(p1.score); //99
// p1.id = 23 (Cannot assign to 'id' because it is a read-only property.)
var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    return Employee;
}());
var emp1 = new Employee(101, "John", 10000);
console.log(emp1); //Employee { id: 101, name: 'John', salary: 10000 }
// emp1.salary = 90_000
// (Property 'salary' is private and only accessible within class 'Employee'.)
//parameter properties shorthand
var Product = /** @class */ (function () {
    function Product(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    return Product;
}());
var product1 = new Product(101, "Plate", 200, "utensil");
console.log(product1);
// Product { id: 101, name: 'Plate', price: 200, category: 'utensil' }
product1.name = "iPhone";
product1.price = 900;
product1.category = "Mobile";
// product1.id = 8
// (Property 'id' is private and only accessible within class 'Product')
console.log(product1);
// Product { id: 101, name: 'iPhone', price: 900, category: 'Mobile' }
var GroupAdmin = /** @class */ (function () {
    function GroupAdmin(name, age, isAdmin) {
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;
    }
    Object.defineProperty(GroupAdmin.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupAdmin.prototype, "Age", {
        get: function () {
            return this.age;
        },
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupAdmin.prototype, "IsAdmin", {
        get: function () {
            return this.isAdmin;
        },
        set: function (isAdmin) {
            this.isAdmin = isAdmin;
        },
        enumerable: false,
        configurable: true
    });
    return GroupAdmin;
}());
var admin = new GroupAdmin("Adam", 20, true);
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
var SuperAdmin = /** @class */ (function (_super) {
    __extends(SuperAdmin, _super);
    function SuperAdmin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuperAdmin.prototype.changeName = function () {
        this.name = "John";
    };
    return SuperAdmin;
}(GroupAdmin));
var s = new SuperAdmin("Fish", 20, true);
console.log(s);
// SuperAdmin { name: 'Fish', age: 20, isAdmin: true }
s.changeName();
console.log(s);
var Jacket = /** @class */ (function () {
    function Jacket(id, color, brand) {
        this.id = id;
        this.color = color;
        this.brand = brand;
    }
    return Jacket;
}());
var jacket1 = new Jacket(101, "green", "Nike");
console.log(jacket1);
//Jacket { id: 101, color: 'green', brand: 'Nike' }
// ----------------------abstract classes--------------------------
var NewEmployee = /** @class */ (function () {
    function NewEmployee(name, age) {
        this.name = name;
        this.age = age;
    }
    //concrete method
    NewEmployee.prototype.getDetails = function () {
        return "Name:".concat(this.name, ", Age:").concat(this.age, ",");
    };
    return NewEmployee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(name, age, salary) {
        // Call the constructor of the superclass (NewEmployee)
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployee.prototype.getSalary = function () {
        return this.salary;
    };
    return FullTimeEmployee;
}(NewEmployee));
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee(name, age, hourlyRate, hoursWorked) {
        // Call the constructor of the superclass (NewEmployee)
        var _this = _super.call(this, name, age) || this;
        _this.hourlyRate = hourlyRate;
        _this.hoursWorked = hoursWorked;
        return _this;
    }
    PartTimeEmployee.prototype.getSalary = function () {
        return this.hourlyRate * this.hoursWorked;
    };
    return PartTimeEmployee;
}(NewEmployee));
var fTE1 = new FullTimeEmployee("John", 25, 25000);
console.log(fTE1);
// FullTimeEmployee { name: 'John', age: 25, salary: 25000 }
console.log(fTE1.getDetails());
console.log(fTE1.getSalary());
var pTE = new PartTimeEmployee("Jack", 21, 10, 50);
console.log(pTE);
/* PartTimeEmployee {
  name: 'Jack',
  age: 21,
  hourlyRate: 10,
  hoursWorked: 50
}
*/
console.log(pTE.getDetails());
console.log(pTE.getSalary());
