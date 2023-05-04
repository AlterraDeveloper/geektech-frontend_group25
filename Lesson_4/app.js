// document.write("Hello JS");

//DOM manipulation - манипуляции с DOM
//Document Object Model

var containerNode = document.getElementsByClassName("container")[0];
var cardNumberLabelNode = document.getElementsByTagName("legend")[0];
var cardNumberInputNode = document.getElementById("cardNumberText");
var checkCardButtonNode = document.querySelector("#сheckCardNumberBtn");
var validationTextNode = document.querySelector("p#validationText");

containerNode.style.backgroundColor = "#000";
cardNumberLabelNode.style.color = "white";
cardNumberLabelNode.style.paddingRight = "10px";

// console.log(containerNode);

function cardInputHadler(event) {
  var cardNo = event.target.value;
  cardNo = formatCardNumber(cardNo); //1234 123
  var newCardNo = "";
  for (let i = 0; i < cardNo.length; i++) {
    newCardNo += cardNo[i] + ((i + 1) % 4 === 0 ? " " : "");
  }
  event.target.value = newCardNo.trim();
  clearValidation();
}

function formatCardNumber(cardNo) {
  var newCardNo = "";
  for (const cardDigit of cardNo) {
    if (cardDigit >= "0" && cardDigit <= "9") {
      newCardNo += cardDigit;
    }
  }
  return newCardNo.substring(0, 16);
}

function checkCardNumberHandler(event) {
  var cardNo = cardNumberInputNode.value;
  cardNo = formatCardNumber(cardNo);
  if (cardNo.length !== 16) {
    clearValidation();
    return;
  }

  var cardIsValid = validateByLuhn(cardNo);
  if (cardIsValid) {
    validationTextNode.textContent = "Верный номер карты";
    validationTextNode.classList.add("success");
  } else {
    validationTextNode.textContent = "Фальшивая карта";
    validationTextNode.classList.add("danger");
  }
}

function clearValidation() {
  validationTextNode.textContent = "Закончите ввод данных...";
  validationTextNode.classList = [];
}

cardNumberInputNode.addEventListener("input", cardInputHadler);
checkCardButtonNode.addEventListener("click", checkCardNumberHandler);

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


//URL (URI) - Unified Resource Locator (Identifier)
//https://youtube.com
//HTTP(S) - Hyper Text Transfer Protocol (Secured)
//DNS name (youtube.com) -> IP(Internet Protocol) address 124.45.12.8
//Web-server
//http://localhost:5500/Lesson_4/
//Parsing HTML... -> DOM (Document Object Model)

var a = parseInt("550");
console.log(a);