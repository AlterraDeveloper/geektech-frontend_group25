console.log("Hello app");

//я строчный комментарий
/*
    Я 
    блочный
    комментарий
*/

// data types - типы данных

//1) String - текстовый (строчный)

var customerSurname = "Kiselev"; // Camel Case
var customerName = "Evgeniy";
var customerFatherName = "Dmitrievich";

console.log(customerSurname);

//Concatenation - конкатенация
var customerFullName =
  customerSurname + " " + customerName + " " + customerFatherName;
var customerCardPrintName = customerSurname + " " + customerName;

console.log(customerFullName);
console.log(customerCardPrintName);

// customerSurname = 55;

// console.log(customerSurname);

//2) Number - числовой

var customerId = 15612;

var customerSalary = 1_500_000.5;
var customerAccountBalance = 45_000;

console.log(customerSalary);

// + - * / % **

console.log("27 % 5 = ", 27 % 5);
console.log("5**2 = ", 5 ** 3);

// Short-hand operators (операторы короткого обновления переменных)
// += -= *= /= %= **=
// customerAccountBalance = customerAccountBalance + 1000;
customerAccountBalance += 1000;
customerAccountBalance -= 10_000;

// customerAccountBalance += 1;
// customerAccountBalance++;

console.log(customerAccountBalance);

console.log("5 / 0 = ", 5 / 0);
console.log("-5 / 0 = ", -5 / 0);

// NaN - Not a Number
console.log("Not a Number is", typeof NaN);

//3) Boolean - логический

var customerIsResident = true; // 1 Да
var customerFatcaRelated = false; // Fatca - держатель грин-карты США

// && || !

if (customerIsResident) {
  if (!customerFatcaRelated) {
    console.log("Issue loan allowed");
  } else {
    console.error("Issue loan blocked due to green-card holding");
  }
} else {
  console.error("Issue loan blocked due to resident status");
}

// var withdrawAmount = Number(prompt("How much money do you want?"));
// console.log("typeof(withdrawAmount) = ", typeof(withdrawAmount));

// > < >= <= == === != !==

// customerAccountBalance = 5000;
// console.log("Balance before transaction:", customerAccountBalance);

// if(withdrawAmount > customerAccountBalance){
//     console.error("Not enought money")
// }else{
//     customerAccountBalance += withdrawAmount;
//     console.log("Balance after transaction:", customerAccountBalance);
// }

var customerDepositPeriod = 25; // период в месяцах

if (customerDepositPeriod > 0 && customerDepositPeriod < 24) {
  console.log("Short-term deposit");
} else if (customerDepositPeriod >= 24 && customerDepositPeriod < 60) {
  console.log("Middle-term deposit");
} else if (customerDepositPeriod >= 60) {
  console.log("Long-term deposit");
} else {
  console.error("Invalid deposit period");
}
