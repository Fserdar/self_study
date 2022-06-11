//* =================================================
//*                     IOS CALCULATOR
//* =================================================

const alan1 = document.querySelector(".alan1");
const alan2 = document.querySelector(".alan2");

const btnContainer = document.querySelector(".buttons");

let currOperand = "";
let previousOperand = "";
let operation = "";

let equalOrPercentPressed = false;

btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("sayi")) {
    appendNumber(e.target.textContent);
    updateDisplay();
  }

  if (e.target.classList.contains("icon")) {
    chooseOperator(e.target.textContent);
    updateDisplay();
  }

  if (e.target.classList.contains("esit")) {
    calculate();
    updateDisplay();
    equalOrPercentPressed = true;
  }

  if (e.target.classList.contains("ac")) {
    previousOperand = "";
    currOperand = "";
    operation = "";
    updateDisplay();
  }

  if (e.target.classList.contains("fa-plus-minus")) {
    if (!currOperand) return;
    currOperand *= -1;
    updateDisplay();
  }

  if (e.target.classList.contains("yuzde")) {
    if (!currOperand) return;
    currOperand = currOperand / 100;
    updateDisplay();
    equalOrPercentPressed = true;
  }
});

const appendNumber = (sayi) => {
  if (currOperand === "0" && sayi === "0") return;

  if (currOperand === "0" && sayi !== ".") {
    currOperand = sayi;
    return;
  }

  if (sayi === "." && currOperand.includes(".")) return;

  if (currOperand.length > 10) return;

  if (equalOrPercentPressed) {
    currOperand = sayi;
    equalOrPercentPressed = false;
    return;
  }

  currOperand += sayi;
};

const updateDisplay = () => {
  if (currOperand.toString().length > 11) {
    currOperand = Number(currOperand).toExponential(3);
  }
  alan2.textContent = currOperand;
  alan1.textContent = `${previousOperand} ${operation}`;
};

const chooseOperator = (op) => {
  if (previousOperand) {
    calculate();
  }

  operation = op;
  previousOperand = currOperand;
  currOperand = "";
};

const calculate = () => {
  let calculation = 0;

  const prev = Number(previousOperand);
  const current = Number(currOperand);

  switch (operation) {
    case "+":
      calculation = prev + current;
      break;
    case "-":
      calculation = prev - current;
      break;
    case "x":
      calculation = prev * current;
      break;
    case "÷":
      calculation = prev / current;
      break;
    default:
      return;
  }

  currOperand = calculation;

  previousOperand = "";
  operation = "";
};
