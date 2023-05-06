// Get the display element
const display = document.querySelector(".display");

// Function to add input to display
function addToDisplay(value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  display.value = "";
}

// Function to calculate result
function calculate() {
  try {
    const result = eval(display.value);
    display.value = result.toFixed(2);
  } catch (error) {
    alert("Invalid input");
    clearDisplay();
  }
}

// Function to calculate square root
function squareRoot() {
  try {
    const result = Math.sqrt(parseFloat(display.value));
    display.value = result.toFixed(2);
  } catch (error) {
    alert("Invalid input");
    clearDisplay();
  }
}

// Function to calculate square
function square() {
  try {
    const result = Math.pow(parseFloat(display.value), 2);
    display.value = result.toFixed(2);
  } catch (error) {
    alert("Invalid input");
    clearDisplay();
  }
}


