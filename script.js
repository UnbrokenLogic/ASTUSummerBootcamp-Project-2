// TO-DO LIST (TASK ONLY)

// Array to store tasks
let tasks = [];

// Elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const errorMsg = document.getElementById("errorMsg");
const remainingCount = document.getElementById("remainingCount");

// Add button
addBtn.addEventListener("click", addTask);

// Add a new task
function addTask() {
    let text = taskInput.value.trim();

    if (text === "") {
        errorMsg.textContent = "Please type a task first";
        return;
    }

    errorMsg.textContent = "";

    tasks.push({
        text: text,
        done: false
    });

    taskInput.value = "";

    renderTasks();
}

// Show tasks on the page
function renderTasks() {

    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        const li = document.createElement("li");
        li.className = "task-item";

        if (tasks[i].done) {
            li.classList.add("done");
        }

        const taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.textContent = tasks[i].text;

        const doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";
        doneBtn.className = "done-btn";

        doneBtn.addEventListener("click", function () {
            tasks[i].done = !tasks[i].done;
            renderTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", function () {
            tasks.splice(i, 1);
            renderTasks();
        });

        li.appendChild(taskText);
        li.appendChild(doneBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    }

    updateCounter();
}

// Update remaining tasks
function updateCounter() {

    let remaining = tasks.filter(function (task) {
        return task.done === false;
    });

    remainingCount.textContent = remaining.length;
}