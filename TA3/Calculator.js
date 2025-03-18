function appendCharacter(char) {
    document.getElementById("display").value += char;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}
