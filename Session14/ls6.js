let books = [];
while (true) {
    let choice = prompt(
        `---- Munu ----
        1. Them danh sach moi.
        2. Hien thi danh sach.
        3. Tim kiem sach theo ten.
        4. Xoa sach theo ID.
        5. Thoat chuong trinh.
        Nhap lua chon tu 1 - 5:`
    );
    switch(true) {
        case "1":
            let id = prompt("Nhap id sach:");
            let name = prompt("Nhap ten sach:");
            let author = prompt("Nhap ten tac gia:");
            let year = Number(prompt("Nhap nam san xuat:"));
            let book = {
                id: id,
                name: name,
                author: author,
                year: year
            };
            books.push(book);
            alert("Da them sach.");
            break;
        case "2":
            if (books.length === 0) {
                alert("Danh sach trong");
            } else {
                let list = "danh sach sach";
                for (let i = 0; i < books.length; i++) {
                    list += 
                        `Id: ${books[i].id},` +
                        `Ten: ${books[i].name}` +
                        `Tac gia: ${books[i].author}` +
                        `Nam xuat ban: ${books[i].year}`
                }
                alert(list);
            }
            break;
        case "3":
            let keyWord = prompt("Nhap tu khoa can tim:");
            let foundBooks = "";
            let found = false;
            for ( let i =0; i < books.length; i++) {
                if (books[i].name.toLocaleLowerCase().includes(keyWord.toLowerCase())) {
                    foundBooks +=
                        `Id: ${books[i].id},` +
                        `Ten: ${books[i].name}` +
                        `Tac gia: ${books[i].author}` +
                        `Nam xuat ban: ${books[i].year}`
                    found = true;
                }
            }
            if (found) {
                alert("Ket qua tim kiem" + foundBooks)
            } else {
                alert("Khong tim thay ket qua");
            }
            break;
        case "4":
            let deleteId = prompt("Nhap vao id sinh vien can xoa:");
            let isDeleted = false;
            for (let i = 0; i < books.length; i++) {
                if (books[i].id === deleteId) {
                    books.splice(i, 1);
                    isDeleted = true;
                    alert("Da xoa sach");
                    break;
                }
            }
            if (!isDeleted) {
                alert("Khong tim thay id sach.")
            }
            break;
        case "5":
            alert("thoat khoi chuong trinh");
            break;
        default:
            alert("Lua chon khong hop le");
    }
    if (choice === "5") {
        break;
    }
}