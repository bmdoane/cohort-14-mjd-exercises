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

function squared(a) {
	return a * a;
}

function squareRoot(a) {
	return Math.sqrt(a);
}

// The user will enter a number in the text input.
// The user will then press one of the buttons for an operation.
// The input field should be cleared so that a new number can be typed in.
// The user will then type in a new number and press enter.
// The resulting value of the operation should then be in the text input.

let input = $('#user-input');

$('#addition').click(function() {
	// add(a, b);
	console.log("Heyo");
});

$('#subtraction').click(function() {
	// add(a, b);
	console.log("Mio");
});

$('#multiplication').click(function() {
	// add(a, b);
	console.log("You");
});

$('#division').click(function() {
	// add(a, b);
	console.log("No");
});

$('#sqr').click(function() {
	// add(a, b);
	console.log("That guy");
});

$('#sqrt').click(function() {
	// add(a, b);
	console.log("Pete?");
});

// function calculate() {
// 	if (input.val() === '') {

// 	}

}