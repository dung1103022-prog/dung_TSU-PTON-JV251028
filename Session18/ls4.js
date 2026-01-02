function addText(char) {
    const textInput = document.getElementById("textInput");
    textInput.value += char;
}

function deletedText() {
    const textInput = document.getElementById("textInput");
    textInput.value = textInput.value.slice(0, -1);
}
