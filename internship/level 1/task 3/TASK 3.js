let display = document.getElementById('display');
let currentInput = '';
let result = '';

function appendToDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}

function calculate() {
  try {
    result = eval(currentInput);
    display.value = result;
    currentInput = '';
  } catch (error) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  display.value = '';
  currentInput = '';
}
