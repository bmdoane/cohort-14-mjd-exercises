"use strict";

// Require specific files and assign to variable
let adding = require("./add"); // Setting variable to add.js file path
let subtracting = require("./subtract");
let multiplying = require("./multiply");
let division = require("./divide");

// Compile calculator functions into Calculator
// Using object shorthand. adding = adding: add
let Calculator = {
	adding,
	subtracting,
	multiplying,
	division
};

// Export Calculator to app.js
module.exports = Calculator;