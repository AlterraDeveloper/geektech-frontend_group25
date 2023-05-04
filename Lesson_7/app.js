const findButton = document.querySelector("#btn_find_chars");
const textarea = document.querySelector("#text");
const resultContainer = document.querySelector("#result");

const isLatin = (char) =>
  (char >= "A" && char <= "Z") || (char >= "a" && char <= "z");
const isCyrrilic = (char) =>
  (char >= "А" && char <= "Я") || (char >= "а" && char <= "я");

findButton.addEventListener("click", () => {
  const originalText = textarea.value;

  var mapResult = Array.from(originalText).map((char) => {
    if (isLatin(char)) {
      return `<span class="text-info">${char}</span>`;
    }
    if (isCyrrilic(char)) {
      return `<span class="text-orang">${char}</span>`;
    }

    return char;
  });
  const resultComponent = firstComponent("Результат", mapResult.join(""));
  const resultComponent2 = firstComponent("Выводы", "f5ctvuyb32iojcnwe");
  const resultComponent3 = firstComponent("Действия", `<button class="btn btn-danger">Delete</button>
  <button class="btn btn-primary">Save</button>`);
  resultContainer.innerHTML = "";
  resultContainer.innerHTML = resultComponent + resultComponent2 + resultComponent3;
});

function firstComponent(title, data) {
  return `
    <legend class="text-success" style="font-size: 24px">${title}</legend>
    <div style="wight: 100%">${data}</div>
    <div style="clear: both; margin-bottom: 50px"></div>`;
}
