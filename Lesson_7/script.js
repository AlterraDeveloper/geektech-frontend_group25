const sumAsText = (...numbers) => {
  const numbersWithPluses = numbers.join(" + ");
  const numbersSum = numbers.reduce((sum, num) => (sum += num), 0);
  return `${numbersWithPluses} = ${numbersSum}`;
};

function _sumAsText() {
  var numbers = Array.from(arguments);
  //   console.log("arguments is array", Array.isArray(arguments) ? "yes" : "no");
  //   console.log("numbers is array", Array.isArray(numbers) ? "yes" : "no");
  var numbersWithPluses = "";
  var sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    numbersWithPluses +=
      num.toString() + (i === numbers.length - 1 ? "" : " + ");
    sum += num;
  }
  return "".concat(numbersWithPluses, " = ", sum);
}

console.log(sumAsText(5, 4, 3));
console.log(_sumAsText(5, 4, 3));

const reverseString = (string) => {
  const stack = [];
  let reversedString = "";
  Array.from(string).forEach((char) => stack.push(char));
  while (stack.length) {
    reversedString += stack.pop();
  }
  return reversedString;
};

console.log(reverseString("12345"));

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const guessedNumber = getRandomInt(1, 5);
// let tries = 0;
// let userNumber = 0;
// do {
//   userNumber = Number(prompt("Guess number from 1 to 5"));
//   tries++;
// } while (userNumber !== guessedNumber);
// console.log(`Good job! ${tries} tries`);

// for
// for..of
// for..in
//while
//do..while
//Infinity loop: for(;;), while(true)

// ()()
// (())()
function checkBrackets(string) {
  const stack = [];
  for (const bracket of string) {
    if (bracket === "(") {
      stack.push(bracket);
    } else {
      if (!stack.pop()) return false;
    }
  }
  return stack.length === 0;
}

console.log(checkBrackets("()"));
console.log(checkBrackets("(())"));
console.log(checkBrackets("(())()(())"));
console.log(checkBrackets("((())()(())"));
console.log(checkBrackets(")(())()(())"));
