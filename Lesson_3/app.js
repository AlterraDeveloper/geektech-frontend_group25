// Operators
//1) Унарные:+ - !

var num = -(-5);
console.log(num);

//2) Бинарные: + - * / ** % && ||

//3) Тернарный: условие ? результат_если_true : результат_если_false

var customer = {
  ID: 0,
  Surname: "Kiselev",
  Name: "Evgeniy",
  FatherName: "Dmitrievich",
  isResident: true,
  INN: "201011990O0956",
  Sex: true, // true - мужской пол, false - женский
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

if (customer.Passport.isUnlimited) {
  console.log("Бессрочный");
} else {
  console.log(customer.Passport.expiryDate);
}

console.log(
  customer.Passport.isUnlimited ? "Бессрочный" : customer.Passport.expiryDate
);

console.log("Пол клиента: " + customer.Sex ? "Мужской" : "Женский");

console.log(customer.ID > 0 ? "Уже есть" : "Новый");

//Functions

//Function declaration - определение функции

function sayHello() {
  console.log("Hello, user");
}

sayHello();

//Function expression - функциональное выражение

var add2 = function (num) {
  return num + 2;
  //unreachable - недостижимый
  sayHello();
  sayHello();
  sayHello();
};

console.log(add2(10));

function finalizeDay() {
  finalizeDayCards();
  finalizeDayCredits();
  finalizeDayDeposits();
}

function finalizeDayCredits() {
  return;
  console.error("error in credits");
  console.log("Close day in credits");
}

function finalizeDayDeposits() {
  console.log("Close day in deposits");
}

function finalizeDayCards() {
  console.log("Close day in cards");
}

finalizeDay();

console.log(sayHello());

//card PAN - Personal Access Number
function validateByLuhn(cardPan) {
  var isSecond = false;
  var checkSum = 0;
  var cardPanReversed = cardPan.split("").reverse().join("");
  //   for (var i = cardPan.length - 1; i >= 0; i--) {
  for (var digit of cardPanReversed) {
    // var digit = cardPan[i];
    if (isSecond) {
      var doubledDigit = digit * 2;
      var doubledDigitAsText = doubledDigit.toString();
      checkSum +=
        doubledDigitAsText.length === 1
          ? doubledDigit // 2
          : Number(doubledDigitAsText[0]) + Number(doubledDigitAsText[1]); // 18 = 1 + 8
    } else {
      checkSum += Number(digit);
    }
    isSecond = !isSecond;
  }
  console.log("Check sum:", checkSum);
  return checkSum % 10 === 0;
}

console.log(validateByLuhn("4215890114971853") ? "Card valid" : "Card invalid");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//20201
function createAccountNo(balanceGroup) {
  var BankBic = 124; //БИК - BIC - Bank Identificaton Code
  // 124201000000000055
  var accNo = getRandomInt(1, 1000).toString().padStart(10, "0");
  return "".concat(BankBic, balanceGroup.substring(2), accNo);
}

//1242010000000950 - Basic Bank Account Number (BBAN)
// IBAN - KG001242010000000950
function generateIBAN(accountNo) {
  var countryCode = "GB";
  var checkNums = "00";
  var ibanBefore = accountNo + countryCode + checkNums;
  var ibanAfter = "";
  for (const char of ibanBefore) {
    ibanAfter += convertIbanChar(char);
  }
  console.log(ibanAfter);
  checkNums = (98n - (BigInt(ibanAfter) % 97n)).toString().padStart(2, "0"); // 5 -> 05, 12 -> 12
  return countryCode + checkNums + accountNo;
}

function convertIbanChar(char) {
  return char >= "A" && char <= "Z"
    ? 10 + char.charCodeAt() - "A".charCodeAt()
    : char;
}

//BigInt

console.log(generateIBAN("WEST12345698765432"));

var validateIBAN = function (iban) {
  //GB82WEST12345698765432
  var ibanBefore = iban.substring(4) + iban.substring(0, 4);
  var ibanAfter = "";
  for (var char of ibanBefore) {
    ibanAfter += convertIbanChar(char);
  }
  return BigInt(ibanAfter) % 97n === 1n;
};

console.log(
  validateIBAN("GB82WEST12345698765432") ? "IBAN valid" : "IBAN invalid"
);

// == ===

var planet = prompt("Select planet");
switch (Number(planet)) {
  case 1: // 1 === planet
    console.log("Mercury");
    break;
  case 2:
    console.log("Venus");
    break;
  case 3:
    console.log("Earth");
    break;
  default:
    console.log("Unknown planet");
}
