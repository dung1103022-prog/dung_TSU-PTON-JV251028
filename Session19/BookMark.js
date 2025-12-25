const addBtn = document.getElementById("addBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const form = document.getElementById("bookmarkForm");
const siteName = document.getElementById("siteName");
const siteUrl = document.getElementById("siteUrl");
const bookmarkList = document.getElementById("bookmarkList");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

/* OPEN / CLOSE MODAL */
addBtn.onclick = () => modal.style.display = "flex";
closeModal.onclick = () => modal.style.display = "none";

/* RENDER */
function renderBookmarks() {
  bookmarkList.innerHTML = "";

  bookmarks.forEach((bm, index) => {
    const div = document.createElement("div");
    div.className = "bookmark";

    div.innerHTML = `
      <a href="${bm.url}" target="_blank">${bm.name}</a>
      <span class="delete">✖</span>
    `;

    div.querySelector(".delete").onclick = () => {
      deleteBookmark(index);
    };

    bookmarkList.appendChild(div);
  });
}

/* ADD */
form.onsubmit = function (e) {
  e.preventDefault();

  if (siteName.value === "" || siteUrl.value === "") return;

  bookmarks.push({
    name: siteName.value,
    url: siteUrl.value.startsWith("http") ? siteUrl.value : "https://" + siteUrl.value
  });

  saveBookmarks();
  form.reset();
  modal.style.display = "none";
};

/* DELETE */
function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  saveBookmarks();
}

/* SAVE */
function saveBookmarks() {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  renderBookmarks();
}

renderBookmarks();
