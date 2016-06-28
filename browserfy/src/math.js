"use_strict";

let adding = require("./add"); // Setting variable to add.js file path

// Using object shorthand. adding = adding: add
let Calculator = {
	adding
};

module.exports = Calculator;