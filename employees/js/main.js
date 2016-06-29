"use strict";

let employeeArray = [];

// Employee prototype chain
// Main constructor function
function Employee() {
	this.firstName = null;
	this.lastName = null;
	this.company = null;
	this.jobDescription = "valued employee";
}

function Clinician(expertise) {
	this.expertise = expertise;
	this.jobDescription = "Clinician";
}
Clinician.prototype = new Employee();

function OperationsStaff(responsibility) {
	this.responsibility = responsibility;
	this.jobDescription = "Operations Staff member";	
}
OperationsStaff.prototype = new Employee();


// Department prototype chain
// Main constructor function
function Company(name) {
	this.name = name;
}

function HeadQuarters() {
	this.city = null;	
}
HeadQuarters.prototype = new Company("CryoHealth");

function FieldOffice() {
	this.city = null;
}
FieldOffice.prototype = new Company("CryoHealth Care");

// Instantiating new headquarters
let northAmerica = new HeadQuarters();
northAmerica.city = "Capitol City";
console.log("northAmerica", northAmerica);

// Instantiating new field office
let regionNorthWest = new FieldOffice();
regionNorthWest.city = "Springfield";
console.log("regionNorthWest", regionNorthWest);

// Instantiating new employees
let employee_01 = new Clinician('Physical Therapist');
employee_01.firstName = "Karl";
employee_01.lastName = "Karlson";
console.log("employee_01", employee_01);
employeeArray.push(employee_01);

let employee_02 = new Clinician('Occupational Therapist');
employee_02.firstName = "Lenny";
employee_02.lastName = "Leonard";
console.log("employee_02", employee_02);
employeeArray.push(employee_02);

let employee_03 = new OperationsStaff('Chief of Security');
employee_03.firstName = "Clancy";
employee_03.lastName = "Wiggums";
console.log("employee_03", employee_03);
employeeArray.push(employee_03);

let employee_04 = new OperationsStaff('IT Administrator');
employee_04.firstName = "John";
employee_04.lastName = "Frink";
console.log("employee_04", employee_04);
employeeArray.push(employee_04);

console.log("employeeArray", employeeArray);








