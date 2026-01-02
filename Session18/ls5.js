let students = [];
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const classInput = document.getElementById("className");
const studentList = document.getElementById("studentList");
const searchInput = document.querySelector(".search input");

let editIndex = null;
function renderStudents(list = students) {
    studentList.innerHTML = "";

    list.forEach((student, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.className}</td>
            <td>
                <button onclick="handleEditStudent(${index})">Sua</button>
                <button onclick="handleDeleteStudent(${index})">Xoa</button>
            </td>
        `;

        studentList.appendChild(tr);
    });
};

function handleCreateStudent() {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const className = classInput.value.trim();

    if (!name || !age || !className) {
        alert("Vui long nhap day du thong tin");
        return;
    }

    if (editIndex == null) {
        students.push({name, age, className})
    } else {
        students[editIndex] = { name, age, className};
        editIndex = null;
        document.querySelector(".input-group button").textContent = "Them";
    }

    clearForm();
    renderStudents();
}

function handleDeleteStudent(index) {
    if (confirm("Ban co chac muon xoa sinh vien nay?")) {
        students.splice(index, 1);
        renderStudents();
    }
}

function handleEditStudent(index) {
    const student = students[index];
    nameInput.value = student.name;
    ageInput.value = student.age;
    classInput.value = student.className;

    editIndex = index;
    document.querySelector(".input-group button").textContent = "cap nhat";
}


searchInput.addEventListener("input", function(){
    const keyword = searchInput.value.toLowerCase();
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(keyword)
    );
    renderStudents(filteredStudents);
});

function clearForm() {
    nameInput.value = "";
    ageInput.value = "";
    classInput.value = "";
}




