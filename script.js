document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let firstOperand = null;

    function updateDisplay(value) {
        display.textContent = value;
    }

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstOperand = null;
                updateDisplay('0');
            } else if (value === '=') {
                if (firstOperand !== null && operator !== '' && currentInput !== '') {
                    currentInput = String(eval(firstOperand + operator + currentInput));
                    updateDisplay(currentInput);
                    firstOperand = null;
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    firstOperand = currentInput;
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                updateDisplay(currentInput);
            }
        });
    });
});
