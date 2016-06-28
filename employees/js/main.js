"use strict";

// Main constructor function
function Employee() {
	this.firstName = null;
	this.lastName = null;
	this.department = null;
}

function Clinician(expertise) {
	this.expertise = expertise;
}

function OperationsStaff() {
	this.responsibility = null;
}

Clinician.prototype = new Employee();
OperationsStaff.prototype = new Employee();

// Main constructor function
function Department() {

}

function FieldOffice() {
	this.city = null;
}

function HeadQuarters() {

}

FieldOffice.prototype = new Department();
HeadQuarters.prototype = new Department();

let employee_01 = new Clinician('Physical Therapist');
console.log("employee_01", employee_01);