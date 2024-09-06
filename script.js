document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';

    
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
              
                display.textContent = '0';
                currentInput = '';
                operator = '';
                firstOperand = '';
            } else if (value === '=') {
               
                if (firstOperand && operator && currentInput) {
                    const result = calculate(parseFloat(firstOperand), operator, parseFloat(currentInput));
                    display.textContent = result;
                    firstOperand = result;
                    currentInput = '';
                    operator = '';
                }
            } else if (['/', '*', '-', '+'].includes(value)) {
                
                if (currentInput) {
                    firstOperand = currentInput;
                    currentInput = '';
                    operator = value;
                } else if (firstOperand) {
                    operator = value;
                }
            } else {
                
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function calculate(firstOperand, operator, secondOperand) {
        switch (operator) {
            case '+':
                return firstOperand + secondOperand;
            case '-':
                return firstOperand - secondOperand;
            case '*':
                return firstOperand * secondOperand;
            case '/':
                return secondOperand !== 0 ? firstOperand / secondOperand : 'Error';
            default:
                return 'Error';
        }
    }
});