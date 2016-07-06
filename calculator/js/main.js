"use strict";

// Jasmine tested calculator functions
function add(a, b) {
  return a + b;
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

function squared(a, b) {
	return Math.pow(a, b);
}

function squareRoot(a) {
	return Math.sqrt(a);
}

// The user will enter a number in the text input.
// The user will then press one of the buttons for an operation.
// The input field should be cleared so that a new number can be typed in.
// The user will then type in a new number and press enter.
// The resulting value of the operation should then be in the text input.

// Set variable for number input
let input = $('#user-input');
input.focus();
let a;
let b;
let operation;

// Button div.on( events [, selector ] [, data ] )
$('#operations').on('click', 'button', function() {
	// Set a value for a argument
	a = parseInt(input.val());
	input.val('');
	// Set variable for the cases argument
	let buttonText = $(this).html();

  switch (buttonText){
    case "+":
      operation = add;
      break;
    case "-":
      operation = subtract;
      break;
    case "x":
      operation = multiply;
      break;
    case "/":
      operation = divide;
      break;
    case "Square":
      operation = squared;
      input.val(operation(a, 2));
      break;
    case "Square Root":
      operation = squareRoot;
      input.val(operation(a));
      break;
    default:
      alert("What now?");
  }

  input.focus();
  
});


input.keyup(function(e){
  if (e.keyCode === 13){
    b = parseInt(input.val());
    input.val(operation(a, b));
  }

});

