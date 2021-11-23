// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
todoList.addEventListener('click', toggleDone);
//Functions
function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create LI
    const newTodo= document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHECKMARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class ="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    // TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class ="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    // Append to list 
    todoList.appendChild(todoDiv);
    // clear todo Input Value
    todoInput.value='';
}


function deleteCheck(e){
   const item = e.target;
   //DELETE TO DO 
   if (item.classList[0] === 'trash-btn') {
       const todo = item.parentElement;
       todo.remove();
   }
}
   //CHECK MARK

function toggleDone(e){
    if(item.classlist[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classlist.toggle('completed');
    }
}
// //    if (item.classlist[0] === "complete-btn"){
// //        const todo = item.parentElement;
// //        todo.classList.toggle("completed");
//    }
// }