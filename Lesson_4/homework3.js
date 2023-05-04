var fullName = "Fedor Simonov";

console.log(depersonalize(fullName));
// console.log(depersonalize(5));

//JSDoc
/**
 * Функция по скрытию данных в строке
 * (используется для личных данных клиентов)
 * @param {string} text Оригинальный текст
 * @returns Строку в виде, например Федор = Ф___р
 */
function depersonalize(text) {
  var words = text.split(" ");
  var newText = [];

  for (const word of words) {
    var newWord = "";
    for (var i = 0; i < word.length; i++) {
      newWord += i === 0 || i === word.length - 1 ? word[i] : "_";
    }
    newText.push(newWord);
  }
  return newText.join(" ");
  //   return text[0] + "_".repeat(text.length - 2) + text[text.length - 1];
}

function depers(text) {
  // return text[0] + text[text.length - 1].padStart(text.length - 1, "_");
  return text[0].padEnd(text.length - 1, "_") + text[text.length - 1];
}

console.log(depers("Aikosha"));
