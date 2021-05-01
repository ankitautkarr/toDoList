// function
let toDoList = [];
let toDoListTemp = [];
function clickHandler() {
  toDoList = [];
  let output = document.getElementById('input');
  toDoList.push(output.value);
  toDoListTemp.push(output.value);

  toDoList.forEach((task) => {
    let li = document.createElement('li'); // Create a <p> node
    li.setAttribute('id', `li${toDoListTemp.indexOf(task)}`);

    let icon = document.createElement('i');
    icon.setAttribute('class', 'fas fa-trash delete');

    document.getElementById('todolist').appendChild(li);
    var t = document.createTextNode(task); // Create a text node
    li.appendChild(t); // Append the text to <p>
    li.appendChild(icon);
    document.getElementById('todolist').appendChild(li); // Append <p> to <div> with id="myDIV"

    let hr = document.createElement('hr');
    document.getElementById('todolist').appendChild(hr);
  });
  let pendingTaskEl = document.getElementById('pending-tasks');
  pendingTaskEl.innerText = `You have ${toDoListTemp.length} pending tasks`;
}
