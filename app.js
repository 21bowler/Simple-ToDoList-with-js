const A = document.getElementById('task-area');
// const btn = document.getElementById('btn');
const B = document.getElementById('single-task');
const C = document.getElementById('tasks');

// styling the Input
// input.style.padding = '5px ';

// styling the add button
// btn.style.textTransform = 'uppercase';

// adding a list
function addTask (e){
    e.preventDefault();
    // if(B.value === '') return;
    const task = createTask(B.value);
    C.appendChild(task);
    B.value = '';
}

// creating a new list element
function createTask (taskName) {
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerHTML = `
        <input type="checkbox">
        <label> ${taskName}</label>
        <span class="delete"> X </span>
    `;

    // adding delete button

    const deleteBtn = task.querySelector('.delete');
    deleteBtn.addEventListener('click', deleteTask);

    return task;
}

//deleting a task from the list

function deleteTask(e){
    e.target.parentElement.remove();
}

A.addEventListener('submit', addTask);



