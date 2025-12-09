let students = [];
while (true) {
    let choice = prompt(
        `----Menu----
        1. Them sinh vien.
        2. Hien thi danh sach sinh vien.
        3. Xoa sinh vien theo ID.
        4. Thoat
        Nhap lua chon tu 1 toi 4:`
    );
    switch(choice) {
        case "1":
            let name = prompt("Nhap ten sinh vien:");
            let age = Number(prompt("Nhap tuoi:"));
            let id = prompt("Nhap id:");
            let student = {
                name: name,
                age: age,
                id: id,
            };
            students.push(student);
            alert("Da them sinh vien vao danh sach.");
            break;
        case "2":
            if (students.length === 0) {
                alert("Danh sac sinh vien trong.");

            } else {
                let list = "danh sach sinh vien:";
                for (let i = 0; i < students.length; i++) {
                    list += 
                    `Ten: ${students[i].name},` + 
                    `Tuoi ${students[i].age},` +
                     `Id: ${students[i].id}`;

                }
                alert(list);
            }
            break;
        case "3":
            let deleteId = prompt("Nhap vao id sinh vien can xoa:");
            let found = false;
            for (let i = 0; i < students.length; i++) {
                if (students[i].id === deleteId) {
                    students.splice(i, 1);
                    found = true;
                    alert("Da xoa sinh vien");
                    break;
                }
            }
            if (!found) {
                alert("Khong tim thay id sinh vien.")
            }
            break;
        case "4":
            alert("Thoat khoi chuong trinh");
            break;
        default:
            alert("lua chon khong chinh xac");
    }
    if (choice === "4") {
        break;
    }
}