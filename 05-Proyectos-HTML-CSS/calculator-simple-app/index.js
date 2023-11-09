let resultEl = document.getElementById("result-el")

//document.getElementById("num1-el").textContent = num1;
//document.getElementById("num2-el").textContent = num2;

let num1 = document.getElementById("num1-el").textContent;
let num2 = document.getElementById("num2-el").textContent;

function add() {
  let add = num1 + num2;
  resultEl.textContent = "Result: " + add;
}

function subtract() {
  let subtract = num1 - num2;
  resultEl.textContent = "Result: " + subtract;
}

function divide() {
  let divide = num1 / num2;
  resultEl.textContent = "Result: " + divide;
}

function multiply() {
  let multiply = num1 * num2;
  resultEl.textContent = "Result: " + multiply;
}
