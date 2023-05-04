class User {
  constructor(name, login, password) {
    this.username = name;
    this.login = login;
    this.password = password;
    this.creationDate = new Date();
  }
}

const users = [
  new User("A", "a@gmail.com", "123qwe123"),
  new User("B", "b@gmail.com", "123qwe123"),
  new User("C", "c@gmail.com", "123qwe123"),
  new User("D", "d@gmail.com", "123qwe123"),
  new User("E", "e@gmail.com", "123qwe123"),
];

const createCell = (value, options) => {
  const newCell = document.createElement(options.forBody ? "td" : "th"); //<td></td>
  newCell.innerHTML = value; //<td>value</td>
  !options.forBody && newCell.setAttribute("scope", "col");
  return newCell;
};

const createRow = (obj, options) => {
  const newTr = document.createElement("tr");
  newTr.classList.add("text-center");
  for (const key in obj) {
    const data = options.forBody ? obj[key] : key;
    newTr.appendChild(createCell(data, options));
  }
  return newTr;
};

const tableHeadElement = document.querySelector("#table-head");
const tableBodyElement = document.querySelector("#table-body");

const renderTable = () => {
  tableHeadElement.innerHTML = "";
  tableBodyElement.innerHTML = "";
  users
    .map((user, i) => ({
      "#": i + 1,
      Логин: user.username,
      Login: user.login,
      Password: "*".repeat(6),
      CreatedAt: user.creationDate.toLocaleString("ru-RU"),
      "": `<button class="btn btn-danger" data-id="${i}" data-action="delete">Delete</button>`,
    }))
    .map((user, i) => {
      if (i === 0) {
        tableHeadElement.appendChild(createRow(user, { forBody: false }));
      }
      tableBodyElement.appendChild(createRow(user, { forBody: true }));
    });
};

renderTable();

//map, filter, reduce

document.body.onclick = (event) => {
  const element = event.target;
  if (!element.dataset.action) return;

  if (element.dataset.action === "delete") {
    const id = element.dataset.id;
    users.splice(id, 1);
    renderTable();
  }
};

//SPA - Single Page Application
