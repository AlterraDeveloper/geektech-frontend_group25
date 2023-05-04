// callback - функция обратного вызова

function sum(a, b) {
  a = a || 0;
  b = b || 0;
  return a + b;
}

sum(5, 5);

const button = document.querySelector("button");
button.addEventListener("click", add1);

var counter = 0;
function add1() {
  counter++;
  button.innerText = `Click me ${counter}`;
}

function validate(value, validatorCb) {
  if (validatorCb(value)) {
    return true;
  } else {
    console.error("Validation error");
  }
}

const customer = {
  name: "Petr",
  surname: "",
  age: 35,
  type: 0, // 1-Физ.лицо, 2- Юр.лицо, 3-ИП/ЧП
  birthDate: null,
};

const ageValidator = (value) => value > 18;

validate(customer["age"], ageValidator);

//anonymous functions - (анонимные) безымянные функции
validate(customer.type, function (value) {
  return [1, 2, 3].includes(value);
});

validate(customer.type, (value) => [1, 2, 3].includes(value));

const required = (value) => !!value;

//falsy (ложноподобные): false, 0, NaN, "" '' ``, null, undefined,
//truthy(правдоподобные): все что не falsy

for (const key in customer) {
  validate(customer[key], required) || console.log(`${key} is required`);
}

var numbers = null;

console.log(numbers && numbers.length);
console.log(sum());
