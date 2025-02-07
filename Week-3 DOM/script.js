// function addTodo() {
//     let userInput = document.getElementById("user-input").value;
//     let todoArea = document.querySelector(".todos");
//     let newItem = document.createElement("h3");
//     newItem.setAttribute("id", count);
//     newItem.innerHTML = "<div> <div>" + userInput + "</div> <span onclick='deleteTodo("+ count +")' class='btn'>Delete</span></div>";
//     todoArea.appendChild(newItem);
//     count++;
// }

// function deleteTodo(todoId) {
//     let itemToDelete = document.getElementById(todoId);
//     itemToDelete.parentNode.removeChild(itemToDelete);
// }
let count = 0;
let todos = [];

function addTodo() {
  let inputElement = document.getElementById("user-input");
  todos.push({ text: inputElement.value, id: count++ });
  inputElement.value = "";
  inputElement.focus();
  render();
}

function deleteTodo(id) {
  todos = todos.filter((obj) => obj.id != id);
  render();
}

function createButton(text, id) {
  let btn = document.createElement("button");
  btn.innerText = text;
  btn.className = "btn";
//   btn.addEventListener("click", () => deleteTodo(id));
  btn.onclick = () => deleteTodo(id);
  return btn;
}

function createTodo(data) {
  let newDiv = document.createElement("div");
  let texth3 = document.createElement("h3");
  let deleteButton = createButton("Delete", data.id);
  texth3.innerHTML = data.text;
  newDiv.id = data.id
  newDiv.appendChild(texth3);
  newDiv.appendChild(deleteButton);
  return newDiv;
}

function render() {
  let topDiv = document.querySelector(".todos");
  topDiv.innerHTML = "";

  todos.forEach((todoData) => {
    let todo = createTodo(todoData);
    topDiv.appendChild(todo);
  });
}

