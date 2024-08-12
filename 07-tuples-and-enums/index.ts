/*
 - Tuples are a special type exculsive to typescript(they don't exist in Javascript).
 - Tuples are arrays of fixed lengths and ordered with specific types.
 - let myTuple: [number ,string];
 - myTuple = [12, "abc"] (valid)
 - myTuple = ["abc", 12] (in-valid coz acc to type of myTuple, number should come before string)
 - myTuple = ["abc", 12 ,12] (in-valid coz acc to type of myTuple, it should only have one number and one string )
*/

let myTuple: [number, string, number];
myTuple = [10, "abc", 30]; //valid

// myTuple = [10,20,"abc"] // (invalid)
//invalid (coz order should be [number, string, number], but we provided [number, number, string])

// myTuple = [10, "abc", 90, 89]; (invalid)
//invalid (coz order should be [number, string, number], but we provided [number, string,number, number], length should also match with the type)

/*
- Enums : enums allow us to define a set of named constants. We can give these constants numeric or string values.


*/

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

let itemOneStatus: OrderStatus = OrderStatus.PENDING;

function itemStatusInfo(status: OrderStatus): void {
  if (status === OrderStatus.PENDING) {
    console.log("Order is Pending");
  }
  if (status === OrderStatus.SHIPPED) {
    console.log("Order is shipped");
  }
  if (status === OrderStatus.DELIVERED) {
    console.log("Order is delivered");
  }
  if (status === OrderStatus.RETURNED) {
    console.log("Order is returned");
  }
}

itemStatusInfo(OrderStatus.PENDING); // Order is Pending
itemStatusInfo(OrderStatus.SHIPPED); // Order is shipped
itemStatusInfo(OrderStatus.DELIVERED); // Order is delivered
itemStatusInfo(OrderStatus.RETURNED); // Order is returned

console.log(OrderStatus.PENDING); //0
console.log(OrderStatus.SHIPPED); //1
console.log(OrderStatus.DELIVERED); //2
console.log(OrderStatus.RETURNED); //3

enum Status {
  PENDING = 10,
  SHIPPED,
  DELIVERED,
  RETURNED,
}
console.log(Status.PENDING); //10
console.log(Status.SHIPPED); //11
console.log(Status.DELIVERED); //12
console.log(Status.RETURNED); //13
