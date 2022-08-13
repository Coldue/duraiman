const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector('#todo-form input');
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveTodDos() {
  localStorage.setItem('todos', JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  li.remove();
  saveTodDos();
}

function paintToDo(newTodo){
  const li = document.createElement('li');
  li.id = newTodo.id
  const span = document.createElement('span');
  span.innerHTML = newTodo.text;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveTodDos();
}
toDoForm.addEventListener('submit', handleToDoSubmit);


const savedTodDos = localStorage.getItem('todos');

if(savedTodDos !== null){
  const parsedToDos = JSON.parse(savedTodDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}