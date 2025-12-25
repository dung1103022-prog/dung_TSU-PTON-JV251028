let todoInput = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");
let taskCount = document.getElementById("taskCount");
let clearAll = document.getElementById("clearAll");

let todos = JSON.parse(localStorage.getItem("todos")) || [];


function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = todo.text;


    span.ondblclick = function () {
      let newText = prompt("Edit todo:", todo.text);
      if (newText !== null && newText.trim() !== "") {
        todos[index].text = newText.trim();
        saveTodos();
      }
    };

    let delBtn = document.createElement("button");
    delBtn.innerText = "🗑";
    delBtn.onclick = function () {
      deleteTodo(index);
    };

    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
  });

  taskCount.innerText = `You have ${todos.length} pending tasks`;
}

addBtn.onclick = function () {
  let text = todoInput.value.trim();
  if (text === "") return;

  todos.push({ text });
  todoInput.value = "";
  saveTodos();
};

// DELETE 
function deleteTodo(index) {
  todos.splice(index, 1);
  saveTodos();
}

//CLEAR ALL
clearAll.onclick = function () {
  todos = [];
  saveTodos();
};

//SAVE TO LOCAL STORAGE
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

renderTodos();
