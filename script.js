// Function to append a number or operator to the display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = '';
}

// Function to calculate the result from the display value
function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value); 
    } catch (e) {
        display.value = 'Error'; 
    }
}

// Add event listeners to buttons
document.getElementById("btn1").addEventListener("click", function() { appendToDisplay('1'); });
document.getElementById("btn2").addEventListener("click", function() { appendToDisplay('2'); });
document.getElementById("btn3").addEventListener("click", function() { appendToDisplay('3'); });
document.getElementById("btnPlus").addEventListener("click", function() { appendToDisplay('+'); });

document.getElementById("btn4").addEventListener("click", function() { appendToDisplay('4'); });
document.getElementById("btn5").addEventListener("click", function() { appendToDisplay('5'); });
document.getElementById("btn6").addEventListener("click", function() { appendToDisplay('6'); });
document.getElementById("btnMinus").addEventListener("click", function() { appendToDisplay('-'); });

document.getElementById("btn7").addEventListener("click", function() { appendToDisplay('7'); });
document.getElementById("btn8").addEventListener("click", function() { appendToDisplay('8'); });
document.getElementById("btn9").addEventListener("click", function() { appendToDisplay('9'); });
document.getElementById("btnMultiply").addEventListener("click", function() { appendToDisplay('*'); });

document.getElementById("btn0").addEventListener("click", function() { appendToDisplay('0'); });
document.getElementById("btnClear").addEventListener("click", clearDisplay);
document.getElementById("btnEquals").addEventListener("click", calculateResult);
document.getElementById("btnDivide").addEventListener("click", function() { appendToDisplay('/'); });
