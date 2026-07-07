const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown", function(event) {

    const key = event.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        display.value += key;
    }

    if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    if (key === "Backspace") {
        deleteLast();
    }

    if (key === "Escape") {
        clearDisplay();
    }
});
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.lang = "en-US";

recognition.onresult = (event) => {
    let text = event.results[0][0].transcript.toLowerCase();

    text = text
        .replace(/plus/g, "+")
        .replace(/minus/g, "-")
        .replace(/times|multiply/g, "*")
        .replace(/divided by|divide/g, "/");

    display.value = text;

    try {
        display.value = eval(text);
    } catch {
        display.value = "Invalid Voice Input";
    }
};

function startVoice() {
    recognition.start();
}
const length = {
    mm:0.001,
    cm:0.01,
    m:1,
    km:1000,
    inch:0.0254,
    foot:0.3048,
    yard:0.9144,
    mile:1609.34
};

function convertUnit(){

    const value = Number(document.getElementById("value").value);

    const from = document.getElementById("fromUnit").value;

    const to = document.getElementById("toUnit").value;

    const meters = value * length[from];

    const answer = meters / length[to];

    document.getElementById("result").innerHTML =
        answer.toFixed(4) + " " + to;
}