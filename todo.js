var todoInput = document.querySelector(".todo-input");
var btn = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");
btn.onclick = create;
todoList.onclick = performAction;

var data;
var ar=[];

function create(e) {
  e.preventDefault();
  data = todoInput.value;
  data = data.trim();
  
  if (data != "") {
    ar.push(data);
    localStorage.setItem("a",ar);

    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    var newLi = document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerText = data;
    newDiv.appendChild(newLi);

    var cmpltBtn = document.createElement("button");
    cmpltBtn.classList.add("cmpltBtn");
    cmpltBtn.innerHTML = '<i class="fa fa-check " aria-hidden="true"></i>';
    newDiv.appendChild(cmpltBtn);

    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    newDiv.appendChild(deleteBtn);
    todoList.appendChild(newDiv);


    todoInput.value = "";
  } else {
    alert("Box can not be blank");
  }
}

function performAction(e) {
  var item = e.target;

  if (item.classList[0] == "cmpltBtn") {
    var parent = item.parentElement;
    parent.classList.toggle("todo-done");
  }
  if (item.classList[0] == "deleteBtn") {
    var parent = item.parentElement;
    var i=ar.indexOf(parent.innerText);
    ar.splice(i);
    localStorage.setItem("a",ar);
    parent.remove();
    
  }
}
