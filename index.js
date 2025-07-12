const inputBox = document.getElementById("input-box");
const todoList = document.getElementById("todo-lists");
const form = document.getElementById("add-form")

form.addEventListener("submit", addTask)
function addTask(e) {
  e.preventDefault()
  if (inputBox.value === "") {
    alert("You most enter your task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    todoList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
  inputBox.value = "";
  saveData();
}

todoList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function listToEdit(editingLi){
  const listToEdit = todoList.filter((todoList) => {

  if (todoList.list === editingLi) {
    return todoList()
  }
  }
)}

function saveData() {
  localStorage.setItem("data", todoList.innerHTML);
}
function showTask() {
  todoList.innerHTML = localStorage.getItem("data");
}
showTask();
