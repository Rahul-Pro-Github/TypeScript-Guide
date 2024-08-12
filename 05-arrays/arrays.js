var nums = [1, 2, 3, 4, 5];
var letters = ["a", "b", "c", "d"];
var bools = [true, false, false, true];
console.log(nums); //[ 1, 2, 3, 4, 5 ]
console.log(letters); //[ 'a', 'b', 'c', 'd' ]
console.log(bools); //[ true, false, false, true ]
var nums2 = [1, 2, 3, 4, 5];
var letters2 = ["a", "b", "c", "d"];
var bools2 = [true, false, false, true];
console.log(nums2); //[ 1, 2, 3, 4, 5 ]
console.log(letters2); //[ 'a', 'b', 'c', 'd' ]
console.log(bools2); //[ true, false, false, true ]
var animals1 = [
    { name: "dog", age: 19 },
    { name: "cat", age: 11 },
];
var animals2 = [
    { name: "horse", age: 19 },
    { name: "lion", age: 21 },
];
console.log(animals1);
//[ { name: 'dog', age: 19 }, { name: 'cat', age: 11 } ]
console.log(animals2);
// [ { name: 'horse', age: 19 }, { name: 'lion', age: 21 } ]
//multi-dimensional array
var board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(board);
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// ---------------Exercise----------------
var ages1 = [1, 2, 4, 5];
var ages2 = [1, 2, 4, 5];
var gameBoard1 = [];
var gameBoard2 = [];
function getTotalPrice(products) {
    var total = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        total += product.price;
    }
    return total;
}
var product1 = { name: "pen", price: 20 };
var product2 = { name: "pen", price: 20 };
var all = [product1, product2];
console.log(getTotalPrice(all)); //40
