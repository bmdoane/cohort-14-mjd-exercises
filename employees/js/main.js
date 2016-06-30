"use strict";

let employeeArray1 = [];
let employeeArray2 = [];

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

// Instantiating new field office
let regionNorthWest = new FieldOffice();
regionNorthWest.city = "Springfield";

// Instantiating new employees
let employee_01 = new Clinician('Physical Therapist');
employee_01.firstName = "Karl";
employee_01.lastName = "Karlson";
employee_01.location = regionNorthWest;
console.log("employee_01", employee_01);

let employee_02 = new Clinician('Occupational Therapist');
employee_02.firstName = "Lenny";
employee_02.lastName = "Leonard";
employee_02.location = regionNorthWest;
console.log("employee_02", employee_02);

let employee_03 = new OperationsStaff('Chief of Security');
employee_03.firstName = "Clancy";
employee_03.lastName = "Wiggums";
employee_03.securityClearance = "Global";
employee_03.armed = true;
employee_03.location = northAmerica;
console.log("employee_03", employee_03);

let employee_04 = new OperationsStaff('IT Administrator');
employee_04.firstName = "John";
employee_04.lastName = "Frink";
employee_04.securityClearance = "Modified-Global";
employee_04.location = northAmerica;
console.log("employee_04", employee_04);

employeeArray1.push(employee_01, employee_02);
console.log("employeeArray1", employeeArray1);

employeeArray2.push(employee_03, employee_04);
console.log("employeeArray2", employeeArray2);

employeeArray1.forEach(function(employee) {
	console.log(`${employee.firstName} ${employee.lastName} works as a ${employee.jobDescription}, in ${employee.location.city} at ${employee.location.name}, with the title ${employee.expertise}`);
})

employeeArray2.forEach(function(employee) {
	console.log(`${employee.firstName} ${employee.lastName} works as an ${employee.jobDescription}, in ${employee.location.city} at ${employee.location.name}, with the title ${employee.responsibility}`);
})


// The code below is from the instructor on dealing different variables and logging out results which can include different syntax requirements
// Grab all the global vars and loop through them to find all the employee instances
// Then push them into the employees array
// var allVars = Object.keys(window);
// // console.log("allVars", allVars );
// for (var variable in allVars) {
//   // console.log("variable", variable);
//   if (allVars[variable].indexOf("employee_") == 0) // check the prefix
//     employeesArr.push(window[allVars[variable]]);
// }
// console.log("employees arr", employeesArr );

// // Automate logging the approriate string for each employee
// employeesArr.forEach(function(emp) {
//   // console.log("employee", emp );
//   let jobDesc,
//       jobArticle = "a",
//       jobString = !emp.hasOwnProperty("jobType") ? "does" : "is a";

//   if (emp instanceof Operations) {
//     jobDesc = `${emp.responsibility}`;
//     jobArticle = "an";
//   } else if (emp instanceof Clinician) {
//     jobDesc = `${emp.specialty}`;
//   } else {
//     jobDesc = `${emp.duty}`
//   }

//   console.log(`${emp.firstName} ${emp.lastName} works as ${jobArticle} ${emp.jobType} in the ${emp.department.city} field office, and ${jobString} ${jobDesc}.`);
// });

