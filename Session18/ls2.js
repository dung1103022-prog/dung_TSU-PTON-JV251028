let products = [
    {id: 1, name: 'Milk', count: 100},
    {id: 2, name: 'Orange', count: 100},
    {id: 3, name: 'Butter', count: 100},
];
products.push({id:4, name: 'Cheese', count: 50});
console.log("mang sau khi them", products);

products = products.filter(product => product.id !== 2);
console.log("sau khi xoa mang", products);

let productUpdate = products.find(product => product.id === 3);
if (productUpdate) {
    productUpdate.count = 0;
}
console.log("Sau khi cap nhat", products);

let keyword = "Butter";
let found = products.find(product => product.name === keyword);
if (found) {
    console.log(found);
} else {
    console.log("khong co du lieu");
}

// bai2
let courses = [
    { name: "HTML", completed: false },
    { name: "CSS", completed: false },
    { name: "Basic of javascript", completed: false },
    { name: "Node package Manager (npm)", completed: false },
    { name: "Git", completed: false },
];

function renderCourses() {
    console.log("Danh sach khoa hoc");
    courses.forEach((course, index) => {
        console.log(
            `${index}. ${course.name} - ${course.completed ? "hoan thanh" : "chua hoan thanh"}`
        );
    });
}

while (true) {
    let choice = prompt("nhap C / R / U / D / E").toUpperCase();

    if (choice === "C") {
        let name = prompt("nhap ten khoa hoc moi");
        let completed = prompt("Da hoan thanh? (true/false)") === "true";
        courses.push({ name, completed });
        renderCourses();

    } else if (choice === "R") {
        renderCourses();

    } else if (choice === "U") {
        let index = Number(prompt("Nhap vi tri khoa hoc"));
        if (courses[index]) {
            let newName = prompt("nhap ten moi");
            let newStatus = prompt("Hoan thanh? (true/false)") === "true";
            courses[index].name = newName;
            courses[index].completed = newStatus;
            renderCourses();
        } else {
            console.log("vi tri khong ton tai");
        }

    } else if (choice === "D") {
        let index = Number(prompt("Nhap vi tri khoa hoc muon xoa"));
        if (courses[index]) {
            courses.splice(index, 1);
            renderCourses();
        } else {
            console.log("vi tri khong ton tai");
        }

    } else if (choice === "E") {
        alert("Cam on ban da den voi Rikkei Academy");
        break;

    } else {
        console.log("lua chon khong hop le");
    }
}
