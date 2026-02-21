function append(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    let display = document.getElementById("display");
    display.value = eval(display.value);
}
function add(a, b) {
    return a + b;
}

if (typeof module !== "undefined") {
    module.exports = { add };
}