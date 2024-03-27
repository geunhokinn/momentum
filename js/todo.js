const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function checkToDo(event) {
    const checkBox = event.target;
    const li = checkBox.parentElement;
    const checkedToDo = toDos.find(todo => todo.id === parseInt(li.id));
    checkedToDo.complete = checkBox.checked;
    saveToDos();
    const span = li.querySelector("span");
    if(checkedToDo.complete){
        span.classList.add("complete");
    }else{
        span.classList.remove("complete");
    }
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
    li.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.addEventListener("change", checkToDo);
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    if(newToDo.complete) {
        checkBox.checked = true;
        span.classList.add("complete");
    }
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
        complete: false,
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// 그냥 savedToDos도 가능
if(savedToDos!==null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}