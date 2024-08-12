type Person = {
  firstName: string;
  lastName: string;
};

function welcomeCustomer(person: Person): Person {
  return { firstName: person.firstName, lastName: person.lastName };
}

console.log(welcomeCustomer({ firstName: "John", lastName: "doe" }));
// { firstName: 'John', lastName: 'doe' }
console.log(welcomeCustomer({ firstName: "Kate", lastName: "paul" }));
// { firstName: 'Kate', lastName: 'paul' }

type BankAccount = {
  accountNumber: number;
  accountHolderName: string;
  accountBalance: number;
};

function showAccountDetails(bankAccount: BankAccount): BankAccount {
  return {
    accountNumber: bankAccount.accountNumber,
    accountHolderName: bankAccount.accountHolderName,
    accountBalance: bankAccount.accountBalance,
  };
}

const ramAccount: BankAccount = {
  accountNumber: 101,
  accountHolderName: "Ram",
  accountBalance: 45_000,
};

console.log(showAccountDetails(ramAccount));
// {
// accountNumber: 101,
// accountHolderName: 'Ram',
// accountBalance: 45000
// }

//optional(?) properties.
type Cake = {
  flavour: string;
  price: number;
  name?: string;
};

const cake1: Cake = {
  flavour: "choclate",
  price: 2300,
  name: "leo",
};

const cake2: Cake = {
  flavour: "choclate",
  price: 2300,
};

//readonly
type Channel = {
  readonly id: number;
  name: string;
  subs: number;
};

const jakeChannel: Channel = {
  id: 101,
  name: "jakePro",
  subs: 90_000,
};

console.log(jakeChannel.id); // 101
//jakeChannel.id = 221  //Cannot assign to 'id' because it is a read-only property.

//intersection types
type Human = {
  name: string;
  age: number;
};

type Alien = {
  color: string;
};

const HumanAlien1: Human & Alien = {
  name: "leo",
  age: 21,
  color: "blue",
};
console.log(HumanAlien1);
// { name: 'leo', age: 21, color: 'blue' }

const HumanAlien2: Human & Alien & { eyeColor: string } = {
  name: "leo",
  age: 21,
  color: "blue",
  eyeColor: "green",
};

console.log(HumanAlien2);
// { name: 'leo', age: 21, color: 'blue', eyeColor: 'green' }

// -----------------Exercise--------------
type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldWide: number;
  };
};

const joker: Movie = {
  title: "Joker",
  originalTitle: "Joker",
  director: "Leo",
  releaseYear: 2029,
  boxOffice: {
    budget: 1_000,
    grossUS: 3_000,
    grossWorldWide: 1_000,
  },
};

const batman: Movie = {
  title: "BatMan",
  originalTitle: "BatMan",
  director: "Leo",
  releaseYear: 2029,
  boxOffice: {
    budget: 10_000,
    grossUS: 1_000,
    grossWorldWide: 1_000,
  },
};

function calculateMovieProfit(movie: Movie): number {
  const profit =
    movie.boxOffice.grossUS +
    movie.boxOffice.grossWorldWide -
    movie.boxOffice.budget;

  return profit;
}

console.log(calculateMovieProfit(joker)); // 3000
console.log(calculateMovieProfit(batman)); //-8000
