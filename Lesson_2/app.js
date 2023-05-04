// var num1 = Number(prompt("Num 1:"));
// var num2 = Number(prompt("Num 2:"));

// if (num1 < num2) { // "5" < "10" -> 53 < 48
//   console.log(num1 + " less than " + num2);
// } else if (num2 < num1) { // 48 < 53
//   console.log(num2 + " less than " + num1);
// } else {
//   console.log(num1 + " = " + num2);
// }

// 0  1  2  3  4  5  6  7  8  9
// 48 49 50 51 52 53 54 55 56 57

var moneySystemName = "Юнистрим";
moneySystemName = moneySystemName.toLowerCase();

if (moneySystemName === "unistream" || moneySystemName === "юнистрим") {
  console.log("Money transfered by " + moneySystemName);
} else if (moneySystemName === "contact" || moneySystemName === "контакт") {
  console.log("Money transfered by " + moneySystemName);
} else if (moneySystemName === "upt") {
  console.log("Money transfered by " + moneySystemName);
} else {
  console.warn(moneySystemName + " we not supported");
}

switch (moneySystemName) {
  case "unistream":
  case "юнистрим":
    console.log("Money transfered by " + moneySystemName);
    break;
  case "contact":
  case "контакт":
    console.log("Money transfered by " + moneySystemName);
    break;
  case "upt":
    console.log("Money transfered by " + moneySystemName);
    break;
  default:
    console.warn(moneySystemName + " we not supported");
}

//4) undefined - неопределенный

var customerBirthDate;

console.log("customerBirthDate = ", customerBirthDate);
console.log(typeof customerBirthDate);

//5) null - нулевой (пустой)

//источник доходов клиента
var customerIncomeSource = null;

console.log("typeof null = ", typeof null); //баг javascript

// 6) object - объектный (комплексный)

var customerPassport = {
  series: "ID",
  number: "1234567",
  expiryDate: null,
  issueDate: "01-01-2020",
  issueAuthority: "GUVD g.Bishkek",
  isUnlimited: true,
};

console.log("typeof customerPassport = ", typeof customerPassport);

//ID1234567

console.log(
  "Receiver document is:",
  customerPassport.series + customerPassport.number
);

var customerAccount = {
  number: "12313215648948915",
  currency: "KGS",
  balance: 500,
  additionalInfo: {
    creationDate: "01-01-2023",
    office: "VIP-center",
    operatorFIO: "Ivanov Ivan Ivanovich",
    isBlocked: false,
  },
};

console.log(customerAccount.additionalInfo.operatorFIO);

var customer = {
  ID: 545,
  Surname: "Kiselev",
  Name: "Evgeniy",
  FatherName: "Dmitrievich",
  isResident: true,
  INN: "201011990O0956",
  Passport: {
    series: "ID",
    number: "1234567",
    expiryDate: null,
    issueDate: "01-01-2020",
    issueAuthority: "GUVD g.Bishkek",
    isUnlimited: true,
  },
  phones: ["+996 500 123-123", "+996 555 123-123"],
};

function sum(a, b) {
  return a + b;
}

function isEven(num) {
  return num % 2 === 0;
}

console.log("5 + 10 = ", sum(5, 10));
console.log("44 is ", isEven(44));

console.log("typeof isEven = ", typeof isEven); //баг javascript

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (var number of numbers) {
  console.log(number + "^2 = ", number ** 2);
}

var childrenYears = [2002, 2012, 2005, 1998, 2021, 2020, 2012, 2013];
var giftTotal = 0;
var currentYear = new Date().getFullYear();
for (var year of childrenYears) {
  var childAge = currentYear - year;
  if (childAge <= 6 || childAge > 12) continue;
  giftTotal++;
}

console.log("Total gifts:", giftTotal, " of ", childrenYears.length);

var customersNames = [
  "Ivanov A.",
  "Smirnov B.",
  "Fedotova K.",
  "Fedotova K.",
  "Fedotova K.",
  "Fedotova K.",
  "Fedotova K.",
  "Fedotova K.",
];
var blacklist = ["Smirnov B."];

for (var customerName of customersNames) {
  console.log("Processing...", customerName);
  if (blacklist.includes(customerName)) {
    console.warn(customerName, "in blacklist".toUpperCase());
    break;
  }
}

//phones: ["+996 500 123-123", "+996 555 123-123"]
//                  0                   1
document.write("Main phone number:" + customer.phones[0] + "<br />");
document.write("Optional phone number:" + customer.phones[1] + "<br />");
document.write(
  "About me: " +
    customer.Surname +
    " " +
    customer.Name[0] +
    ". " +
    customer.FatherName[0] +
    "."
);

//for(;;){}
for (var i = 0; i < customer.INN.length; i++) {
  var innDigit = Number(customer.INN[i]);
  if (isNaN(innDigit)) {
    console.error("INN invalid");
    break;
  }
}
console.log("INN valid");

for (var i = 1; i <= 10; i++) {
  console.log(i + "^2 = ", i ** 2);
}
