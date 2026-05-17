function randomColor() {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}


function createPalette() {

    let palette = document.getElementById("palette");

    for (let i = 0; i < 5; i++) {

        let color = randomColor();

        let box = document.createElement("div");

        box.className = "color-box";

        box.style.background = color;

        box.innerHTML = color;

        box.onclick = function() {

            navigator.clipboard.writeText(color);

            alert("Copied");
        };

        palette.appendChild(box);
    }
}

createPalette();




let data = [

    { id: 1, name: "mahmoud", role: "Developer", status: "active" },
    { id: 2, name: "mohamed", role: "Designer", status: "pending" },
    { id: 3, name: "omar", role: "Manager", status: "active" },
    { id: 4, name: "mostafa", role: "QA", status: "inactive" }

];


let tableBody = document.getElementById("tableBody");


data.forEach(function(item) {

    tableBody.innerHTML += `

        <tr>

            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.role}</td>
            <td class="${item.status}">
                ${item.status}
            </td>

        </tr>

    `;
});






let input = document.getElementById("taskInput");

let taskList = document.getElementById("taskList");

let tasks = [];


function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task) {

        taskList.innerHTML += `

            <div class="task-item">

                <span>${task}</span>

                <div>

                    <button onclick="editTask('${task}')">
                        Edit
                    </button>

                    <button onclick="deleteTask('${task}')">
                        Delete
                    </button>

                </div>

            </div>

        `;
    });
}


function addTask() {

    if (input.value == "") return;

    tasks.push(input.value);

    input.value = "";

    renderTasks();
}


function deleteTask(task) {

    tasks = tasks.filter(function(t) {

        return t != task;
    });

    renderTasks();
}


function editTask(task) {

    let newTask = prompt("Edit", task);

    if (newTask) {

        tasks = tasks.map(function(t) {

            if (t == task) {

                return newTask;
            }

            return t;
        });
    }

    renderTasks();
}


input.addEventListener("keydown", function(e) {

    if (e.key == "Enter") {

        addTask();
    }
});