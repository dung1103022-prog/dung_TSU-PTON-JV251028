let items = document.querySelectorAll('.item');

items.forEach((el) => {
  el.onmouseover = function () {
    document.body.style.backgroundColor = el.textContent;
  };
});
