let text = document.querySelector('.text');
let btnHide = document.querySelector('.right-button');
let btnShow = document.querySelector('.left-button');
btnHide.onclick = function () {
    text.style.display = 'none';
};
btnShow.onclick = function () {
    text.style.display = 'block';
};