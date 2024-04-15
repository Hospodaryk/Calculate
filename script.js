let display = document.getElementById('display');

function buttonValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

document.querySelectorAll('.buttons button').forEach(button => {
    if (!button.onclick) {
        button.addEventListener('click', () => {
            buttonValue(button.textContent);
        });
    }
});
