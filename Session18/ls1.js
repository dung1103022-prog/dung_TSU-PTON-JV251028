// bai 1
function bai1() {
    const studentBai1 = {
        id: document.getElementById("id-value").querySelector("input").value,
        name: document.getElementById("name-value").querySelector("input").value,
        gender: document.getElementById("gender-value").querySelector("input").value,
        age: Number(document.getElementById("age-value").querySelector("input").value),
        mark: Number(document.getElementById("mark-value").querySelector("input").value)
    };
    console.log("Id:", studentBai1.id);
    console.log("Ten:", studentBai1.name);
    console.log("Gioi tinh:", studentBai1.gender);
    console.log("Tuoi:", studentBai1.age);
    console.log("Diem:", studentBai1.mark);

    alert(`Thong tin hoc sinh:,
        ID: ${studentBai1.id},
        Ten: ${studentBai1.name},
        Gioi tinh: ${studentBai1.gender},
        Tuoi: ${studentBai1.age},
        Diem: ${studentBai1.mark}`);
}

// bai 2
const students = [];
function bai2() {
    const newStudent = {
        id: document.getElementById("id-value").querySelector("input").value,
        name: document.getElementById("name-value").querySelector("input").value,
        gender: document.getElementById("gender-value").querySelector("input").value,
        age: Number(document.getElementById("age-value").querySelector("input").value),
        mark: Number(document.getElementById("mark-value").querySelector("input").value)
    };
    students.push(newStudent);
    alert(`Da them hoc sinh${newStudent.name} vao danh sach`)
    console.log("Danh sach hoc sinh", students);
}

// bai 3
function bai3() {
    if (students.length === 0) {
        console.log("Danh sach hoc sinh trong, vui long nhap danh sach hoc sinh");
        return;
    }
    let topStudent = students[0];
    for (let i = 1; i < students.length; i++){
        if (students[i].mark > topStudent.mark) {
            topStudent = students[i];
        };
    };
    alert(`Hoc sinh co diem cao nhat:,
        ID: ${topStudent.id},
        Ten: ${topStudent.name},
        Gioi tinh: ${topStudent.gender},
        Tuoi: ${topStudent.age},
        Diem: ${topStudent.mark}`
        
    );
    console.log("hocj sinh co diem cao nhat:", topStudent);
    
}