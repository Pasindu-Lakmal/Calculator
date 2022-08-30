class Calculator {
  constructor(previosOperandTextElement, currentOperandTextElement) {
    this.previosOperandTextElement = previosOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previosOperand = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[all-data-clear]");
const previosOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previosOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
