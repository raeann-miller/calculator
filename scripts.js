// Simple arithmetic calculator app

/**
 *
 *
 */

function add(a, b) {
	return Number(a) + Number(b);
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function remainder(a, b) {
	return a % b;
}

const form = document.querySelector("form")
const num1 = document.querySelector("#num-1")
const num2 = document.querySelector("#num-2")
const select = document.querySelector("select")
// Use an anonymous callback function as the 2nd argument

form.addEventListener("submit", function(event){
  // Prevent the default browser behavior - DONT SUBMIT
  event.preventDefault();

  // Form inputs have a property called value
  console.log(num1.value, num2.value, select.value);
});
