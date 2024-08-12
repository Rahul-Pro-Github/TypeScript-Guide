function welcomeCustomer(person) {
    return { firstName: person.firstName, lastName: person.lastName };
}
console.log(welcomeCustomer({ firstName: "John", lastName: "doe" }));
// { firstName: 'John', lastName: 'doe' }
console.log(welcomeCustomer({ firstName: "Kate", lastName: "paul" }));
function showAccountDetails(bankAccount) {
    return {
        accountNumber: bankAccount.accountNumber,
        accountHolderName: bankAccount.accountHolderName,
        accountBalance: bankAccount.accountBalance,
    };
}
var ramAccount = {
    accountNumber: 101,
    accountHolderName: "Ram",
    accountBalance: 45000,
};
console.log(showAccountDetails(ramAccount));
var cake1 = {
    flavour: "choclate",
    price: 2300,
    name: "leo",
};
var cake2 = {
    flavour: "choclate",
    price: 2300,
};
var jakeChannel = {
    id: 101,
    name: "jakePro",
    subs: 90000,
};
console.log(jakeChannel.id); // 101
var HumanAlien1 = {
    name: "leo",
    age: 21,
    color: "blue",
};
console.log(HumanAlien1);
// { name: 'leo', age: 21, color: 'blue' }
var HumanAlien2 = {
    name: "leo",
    age: 21,
    color: "blue",
    eyeColor: "green",
};
console.log(HumanAlien2);
var joker = {
    title: "Joker",
    originalTitle: "Joker",
    director: "Leo",
    releaseYear: 2029,
    boxOffice: {
        budget: 1000,
        grossUS: 3000,
        grossWorldWide: 1000,
    },
};
var batman = {
    title: "BatMan",
    originalTitle: "BatMan",
    director: "Leo",
    releaseYear: 2029,
    boxOffice: {
        budget: 10000,
        grossUS: 1000,
        grossWorldWide: 1000,
    },
};
function calculateMovieProfit(movie) {
    var profit = movie.boxOffice.grossUS +
        movie.boxOffice.grossWorldWide -
        movie.boxOffice.budget;
    return profit;
}
console.log(calculateMovieProfit(joker)); // 3000
console.log(calculateMovieProfit(batman)); //
