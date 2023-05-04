var _var;
var _var2;

//ECMAScript 5 -> 6 -> 7 ...

//1) let, const
// var: hoisting, non-block scope

//hoisting (поднятие)

// console.log(_const);

_var = 5;

let _let = 6;
const _const = 7;

console.log(sum2(5, 7));

function sum2(a, b) {
  return a + b;
}

console.log("IsEven = ", isEven);

var isEven = function (num) {
  return num % 2 === 0;
};

// console.log("_var2 = ", _var2);

// for (let i = 0; i < 10; i++) {
//   var _var2 = "qwerty";
//   if(true){
//       const _const2 = "const";

//   }
// }

// console.log("i = ", i);
// console.log("_var2 = ", _var2);
// console.log("_const2 = ", _const2);

console.log("_var = ", _var);
var _var = "12345";
// const _const = 4;
console.log("_var = ", _var);

var num = 0;
var Num = 0;

console.log("_let = ", _let);
_let = 45;
console.log("_let = ", _let);

console.log("_const = ", _const);
// _const++; // _const = _const + 1;
console.log("_const = ", _const);

const numbers = [0, 1, 2, 3, 4, 5];
// numbers = [];
console.log(numbers);
numbers.push(6);
console.log(numbers);

class BankAccount {
  constructor(accountNo, currency, balance = 0) {
    this.accountNo = accountNo;
    this.currencyID = currency;
    this.balance = balance;
  }
}

const me = {
  name: "Eugeniya",
  surname: "Kiseleva",
  fatherName: "Dmitrievna",
  sex: false,
  account: [
    new BankAccount("111222233334444", "USD", 1500),
    // {
    //   accountNo: "111222233334444",
    //   currencyID: "USD",
    //   balance: 1500,
    // },
  ],
};

const bankInfo = {
  name: "BAKAI bank",
  contactPhones: ["+996312111222", "+996312222333"],
};

// me = [];

me.jobTitle = "developer";
// me.name = "Vadim";
// delete me.surname;

console.log(me);

function getCurrencyByCode(currencyCode) {
  switch (currencyCode) {
    case 840:
      return "USD";
    default:
      return "";
  }
}

//2) Template strings - шаблонные строки

const fullName = `${me.surname} ${me.name} ${me.fatherName}`;
console.log(fullName);

const agreementText = `
Уважаем${me.sex ? "ый" : "ая"}, ${fullName}. 
Согласно внутренним правилам ${bankInfo.name} уведомляем Вас
об обработке ваших персональных данных.
Спасибо что выбираете нас,
ваша команда ${bankInfo.name}.

Баланс вашего счета ${me.account.accountNo} составляет ${
  me.account.balance
} ${getCurrencyByCode(me.account.currencyID)}

Связь с нами: ${bankInfo.contactPhones.join()}
`;

console.log(agreementText);

//3) arrow functions -  стрелочные функции

const increase = (counter) => counter + 1;

const decrease = (counter) => {
  return counter - 1;
};

const reset = () => {
  return 0;
};

// function sum() {
//   let sum = 0;
//   for (const arg of arguments) {
//     sum += arg;
//   }

//   return sum;
// }

//4) ... rest operator
const sum = (...numbers) => {
  let sum = 0;
  for (const arg of numbers) {
    sum += arg;
  }

  return sum;
};

console.log("sum(5,5,5) = ", sum(5, 5, 5));
console.log("sum(5) = ", sum(5));
console.log("sum(5,5,5,5,5,5,5,5) = ", sum(5, 5, 5, 5, 5, 5, 5, 5));
console.log("sum() = ", sum());

// function openMultiAccount() {
//   var existAccount = arguments[0];
//   var currencies = Array.from(arguments).slice(1);
//   var newAccounts = [];
//   for (const currency of currencies) {
//     if (currency === existAccount.currencyID) {
//       console.error("Account already exists");
//       continue;
//     }
//     var newAccount = {
//       accountNo: existAccount.accountNo,
//       currencyID: currency,
//       balance: 0,
//     };
//     newAccounts.push(newAccount);
//   }

//   return newAccounts;
// }

const openMultiAccount = (existAccount, ...currencies) => {
  var newAccounts = [];
  for (const currency of currencies) {
    if (currency === existAccount.currencyID) {
      console.error("Account already exists");
      continue;
    }
    var newAccount = new BankAccount(existAccount.accountNo, currency);
    // var newAccount = {
    //   accountNo: existAccount.accountNo,
    //   currencyID: currency,
    //   balance: 0,
    // };
    newAccounts.push(newAccount);
  }

  return newAccounts;
};

console.log(openMultiAccount(me.account[0], "KGS", "EUR", "RUB"));

//5) default params - параметры по умолчанию

const myJoin = (array, separator = ",") => {
  var result = "";
  for (let i = 0; i < array.length; i++) {
    result += array[i] + (i === array.length - 1 ? "" : separator);
  }
  return result;
};

const depersonalize = (text, hiddenSymbol = "_") => {
  let result = [];
  for (const word of text.split(" ")) {
    result.push(
      `${word[0]}${hiddenSymbol.repeat(word.length - 2)}${
        word[word.length - 1]
      }`
    );
  }
  return myJoin(result, " ");
};

console.log(depersonalize(fullName));
console.log(depersonalize(fullName, "*"));

//6) Classes - классы

// class BankAccount {
//   constructor(accountNo, currency, balance = 0) {
//     this.accountNo = accountNo;
//     this.currencyID = currency;
//     this.balance = balance;
//   }
// }
