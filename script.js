(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
})();




//selectors
const todoButton = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
//event listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener('click',deleteCheck); 
filterOption.addEventListener('click',filterTodo);
// function

function addTodo(event){
    // peventing the form from submitting
    event.preventDefault();
    
    // creating todo DIv
    const todoDiv = document.createElement("div") ;
   
    todoDiv.classList.add("todo");

    // create new Li
    const newTodo =  document.createElement("li");    
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);   //appending the todoDiv to the newtodo

// creating a check mark button

const  completeButton = document.createElement("button");
completeButton.innerHTML = '<i class="fas fa-check"></i>';
completeButton.classList.add("complete-btn");
todoDiv.appendChild(completeButton);

// creating a trash mark button

const  trashButton = document.createElement("button");
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
 
// appending the ToDoList
todoList.appendChild(todoDiv); 
todoInput.value =""; 
}


function deleteCheck(e) {
  const item = e.target ;
  //delete todo 
  if (item.classList[0] === 'trash-btn'){
      const todo = item.parentElement;
     // animation
      todo.classList.add('fall');
   todo.addEventListener('transitioned' ,function(){
       todo.remove();
   }) 
}

  // checmark

  if (item.classList[0] === 'complete-btn'){
       const todo = item.parentElement;
       todo.classList.toggle('completed');
  }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
    });
  }

  
