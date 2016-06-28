(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use_strict";

function add(a, b) {
	return a + b;
}

module.exports = add;
},{}],2:[function(require,module,exports){
"use_strict";

let MathModule = require("./math");

console.log("adding", MathModule.adding(3,5));
},{"./math":3}],3:[function(require,module,exports){
"use_strict";

let adding = require("./add"); // Setting variable to add.js file path

// Using object shorthand. adding = adding: add
let Calculator = {
	adding
};

module.exports = Calculator;
},{"./add":1}]},{},[2])


//# sourceMappingURL=bundle.js.map
