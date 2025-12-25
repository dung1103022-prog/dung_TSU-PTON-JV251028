const form = document.getElementById("form");
const tbody = document.getElementById("tbody");

const STORAGE_KEY = "tasks";

const initialTasks = [
    {
        id: 1,
        content: "Learn JavaScript Session 01",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Anh Bach",
    },
    {
        id: 2,
        content: "Learn JavaScript Session 02",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Anh Bach",
    },
    {
        id: 3,
        content: "Learn CSS Session 01",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Anh Bach",
    },
];

function getTasks() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialTasks));
        return initialTasks;
    }
    return JSON.parse(data);
}

function saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function renderTasks() {
    const tasks = getTasks();
    tbody.innerHTML = "";

    tasks.forEach((task, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td style="text-align:left">${task.content}</td>
                <td>${task.dueDate}</td>
                <td>
                    <span class="status ${task.status.toLowerCase()}">
                        ${task.status}
                    </span>
                </td>
                <td>${task.assignedTo}</td>
                <td>
                    <button class="edit" onclick="editTask(${task.id})">Sửa</button>
                    <button class="delete" onclick="deleteTask(${task.id})">Xóa</button>
                </td>
            </tr>
        `;
    });
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const id = form.ID.value;
    const content = form.content.value.trim();
    const dueDate = form.dueDate.value;
    const status = form.status.value;
    const assignedTo = form.assignedTo.value.trim();

    if (!content || !dueDate || status === "Choose status" || !assignedTo) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    let tasks = getTasks();

    if (id) {
        const task = tasks.find(t => t.id == id);
        task.content = content;
        task.dueDate = dueDate;
        task.status = status;
        task.assignedTo = assignedTo;
    } else {
        tasks.push({
            id: Date.now(),
            content,
            dueDate,
            status,
            assignedTo,
        });
    }

    saveTasks(tasks);
    renderTasks();
    form.reset();
    form.ID.value = "";
});

function deleteTask(id) {
    if (!confirm("Bạn chắc chắn muốn xóa không?")) return;
    const tasks = getTasks().filter(task => task.id !== id);
    saveTasks(tasks);
    renderTasks();
}

function editTask(id) {
    const tasks = getTasks();
    const task = tasks.find(t => t.id === id);

    form.ID.value = task.id;
    form.content.value = task.content;
    form.dueDate.value = task.dueDate;
    form.status.value = task.status;
    form.assignedTo.value = task.assignedTo;
}

renderTasks();
