let toDoListTemp = [];
let count = 0;

function clickHandler() {
  count++;
  let output = document.getElementById('input');
  if (output.value !== '') {
    toDoListTemp.push(output.value);
    let li = document.createElement('li');
    li.setAttribute('id', `li${count}`);
    li.innerHTML = `<i class="fas fa-trash delete" id = "del${count}"></i>`;
    document.getElementById('todolist').appendChild(li);
    var t = document.createTextNode(output.value);
    li.appendChild(t);
    document.getElementById('todolist').appendChild(li);
    let del = document.getElementById(`del${count}`);
    del.addEventListener('click', onClickDelete);
    pendingTask(toDoListTemp);
  }
  output.value = '';
}

function pendingTask(array) {
  let pendingTaskEl = document.getElementById('pending-tasks');
  pendingTaskEl.innerText = `You have ${array.length} pending tasks`;
}

function onClickClearAll() {
  count = 0;
  toDoListTemp = [];
  toDoList = [];
  pendingTask(toDoListTemp);
  let parentEl = document.getElementById('todolist');
  while (parentEl.firstChild) {
    parentEl.removeChild(parentEl.firstChild);
  }
}

function onClickDelete(event) {
  let listElement = document.getElementById(event.target.parentElement.id);
  listElement.remove();
  let taskToPop = event.target.parentElement.innerText;
  let index = toDoListTemp.indexOf(taskToPop);
  if (index > -1) {
    toDoListTemp.splice(index, 1);
  }
  pendingTask(toDoListTemp);
}