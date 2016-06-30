"use strict";

// Car prototype chain
function Car() {
	this.manufactured_date = Date();
	this.warranty = null;
}

function Make(maker) {
	this.manufacturer = maker; 
}
Make.prototype = new Car();

function Chevrolet(name) {
	this.modelName = name;
}
Chevrolet.prototype = new Make('Chevrolet');

// License plate constructor for car property
function LicensePlate(num) {
	this.number = num;
	this.state = "TN";
}

// Car One
function Corvette(plateNum) {
	this.licensePlate = new LicensePlate(plateNum);
	this.warranty = "Ten year, bumper to bumper.";
	this.tires = [];
}
Corvette.prototype = new Chevrolet('Corvette');
let myStingray = new Corvette("PXN-420");

// Car Two
function Camaro(plateNum) {
	this.licensePlate = new LicensePlate(plateNum);
	this.warranty = "Limited";
	this.tires = [];
}
Camaro.prototype = new Chevrolet('Camaro');
let myConvertable = new Camaro("JAX-333");

// Car Three
function Malibu(plateNum) {
	this.licensePlate = new LicensePlate(plateNum);
	this.warranty = "One year, bumper to bumper.";
	this.tires = [];
}
Malibu.prototype = new Chevrolet('Malibu');
let myLimited = new Malibu("Go-Preds");


// Tires prototype chain -
function Tire() {
	this.shape = "round";
}

function Manufacturer(name) {
	this.name = name;
}
Manufacturer.prototype = new Tire();

function TireType(type) {
	this.type = type;
	this.PSI = 0;
	this.width = 0;
	this.radius = 0;
}

TireType.prototype = new Manufacturer("Bridgestone");
// Create method for prototype, not in constructor
// TireType can access it but it doesn't need to be on every instance
TireType.prototype.setPSI = function(num) {
	this.PSI = num;
};

TireType.prototype.setWidth = function(num) {
	this.width = num;
};

TireType.prototype.setRadius = function(num) {
	this.radius = num;
};

let street1 = new TireType('front');
let street2 = new TireType('front');
let street3 = new TireType('rear');
let street4 = new TireType('rear');

myStingray.tires.push(street1, street2, street3, street4);
myConvertable.tires.push(street1, street2, street3, street4);
myLimited.tires.push(street1, street2, street3, street4);

function setTire(myCar, numPSI, numWidth, numRadius) {
	for (let i = 0; i < myCar.tires.length; i++) {
		myCar.tires[i].setPSI(numPSI);
		myCar.tires[i].setWidth(numWidth);
		myCar.tires[i].setRadius(numRadius);
	}
}

setTire(myStingray, 32, 12, 22);
setTire(myConvertable, 30, 10, 22);
setTire(myLimited, 36, 11, 24);

console.log("myStingray", myStingray);
console.log("myConvertable", myConvertable);
console.log("myLimited", myLimited);