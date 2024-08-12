const nums: number[] = [1, 2, 3, 4, 5];
const letters: string[] = ["a", "b", "c", "d"];
const bools: boolean[] = [true, false, false, true];

console.log(nums); //[ 1, 2, 3, 4, 5 ]
console.log(letters); //[ 'a', 'b', 'c', 'd' ]
console.log(bools); //[ true, false, false, true ]

const nums2: Array<number> = [1, 2, 3, 4, 5];
const letters2: Array<string> = ["a", "b", "c", "d"];
const bools2: Array<boolean> = [true, false, false, true];

console.log(nums2); //[ 1, 2, 3, 4, 5 ]
console.log(letters2); //[ 'a', 'b', 'c', 'd' ]
console.log(bools2); //[ true, false, false, true ]

type Animal = {
  name: string;
  age: number;
};

const animals1: Animal[] = [
  { name: "dog", age: 19 },
  { name: "cat", age: 11 },
];

const animals2: Array<Animal> = [
  { name: "horse", age: 19 },
  { name: "lion", age: 21 },
];

console.log(animals1);
//[ { name: 'dog', age: 19 }, { name: 'cat', age: 11 } ]
console.log(animals2);
// [ { name: 'horse', age: 19 }, { name: 'lion', age: 21 } ]

//multi-dimensional array
const board: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(board);
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

// ---------------Exercise----------------
const ages1: number[] = [1, 2, 4, 5];
const ages2: Array<number> = [1, 2, 4, 5];

const gameBoard1: string[][] = [];
const gameBoard2: Array<Array<string>> = [];

type Product = {
  name: string;
  price: number;
};


function getTotalPrice(products:Product[]):number{
  let total = 0
  for(let product of products){
    total += product.price
  }
  return total;
}

const product1:Product = {name:"pen", price:20}
const product2 = {name:"pen", price:20}
const all = [product1,product2]

console.log(getTotalPrice(all)); //40
