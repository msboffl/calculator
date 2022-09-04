const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const clearAllButton = document.querySelector('[data-clear]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelectorAll('[data-delete]');

const previousText = document.querySelector('[data-previous]')
const currentText = document.querySelector('[data-current]')

class  Calculator {
    constructor(previousText, currentText) {
        this.previousText = previousText;
        this.currentText = currentText;
        this.clear();
    }
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    delete() {

    }
    appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = number.toString() + this.currentOperand.toString();

    }
    chooseOperand(operation) {
        if(this.currentOperand === '') return
        if(this.previousOperand !== '') {
            this.calculate()
        }
        this.operation = operation;
        this.previousOperand  = this.currentOperand;
        this.currentOperand = ''

    }
    calculate() {

    }
    updateDisplay() {
        this.currentText.innerText = this.currentOperand;
        this.previousText.innerText = this.previousOperand;

    }
}

const calculator = new Calculator(previousText, currentText);

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach((operationBtn) => {
    operationBtn.addEventListener('click', () => {
        calculator.chooseOperand(operationBtn.innerText);
        calculator.updateDisplay();
    })
})

equalButton.addEventListener('click', () => {
    calculator.calculate();
    calculator.updateDisplay()

})