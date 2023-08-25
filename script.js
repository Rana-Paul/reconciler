const appElement = document.getElementById("app");
let todos = [];
let counter = 0;

function renderBlock(todo) {
  const { id, name } = todo;

    const data = document.createElement("div");
    data.className = "title";
    data.id = id;
    data.innerText = name;
    setTimeout(() => {
      appElement.appendChild(data);
    }, 500);
  
}

function render() {
  todos.forEach(renderBlock);
}

function addTodo() {
  counter++;
  const id = counter;
  const name = prompt("Enter Todo name: ");
  todos.push({ id, name });
  renderBlock(todos[todos.length - 1]);
}

function removeTodo() {
  const id = prompt("Enter the ID of the Todo to remove:");
  todos = todos.filter((todo) => todo.id !== id);
  const todoElement = document.getElementById(id);
  if (todoElement) {
    todoElement.remove();
  } else {
    alert("Todo not found!");
  }
}

render();
