// Step 1: Select DOM Elements
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let filterTodo = document.querySelector(".filter-todo");
let todoList = document.querySelector(".todo-list");

// Step 2: Create event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCompleteTodo);
filterTodo.addEventListener("change", filterTodos);

function addTodo(e){
    // Prevent the default form submit
    e.preventDefault();

    // Create the todoDiv container
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create the new todo list item.
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    // Create the complete button
    let completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML = `<i class="fas fa-check"></i>`;
    todoDiv.appendChild(completeButton);

    // Create the delete button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    todoInput.value = ""
}

function deleteOrCompleteTodo(e){
    const targetElement = e.target;
    if (targetElement.classList.contains("trash-btn")){
        // Delete the task
        const todoDiv = targetElement.parentElement;
        todoDiv.classList.add("fall");
        
        todoDiv.addEventListener("transitionend", function(){
            todoDiv.remove();
        });
    }
    if (targetElement.classList.contains("complete-btn")){
        // Mark the task as completed
        const todoDiv = targetElement.parentElement;
        todoDiv.classList.toggle("completed");
    }
}

function filterTodos(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value){
            case "all":
                todo.style.display = "flex";
                break
            case "completed":
                if (todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}
