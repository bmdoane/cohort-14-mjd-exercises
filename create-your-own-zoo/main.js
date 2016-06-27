"use_strict";
// Every animal must have a name property.
// Each genus must have a genusName property.
// Each species must have a speciesName property.


// Constructor function - Capitalizing first letter is convention for constructor.
function Animal() {
	this.weight = null;
}


// Another constructor function
// Making a Mantis
// Genus
function Tenodera() {
	this.genusName = null;
}
// Species
function TenoderaSinensis () {
	this.speciesName = null;
}

// New instance of animal creating prototype chain
Tenodera.prototype = new Animal();

TenoderaSinensis.prototype = new Tenodera();

// New instance of Tenodera
let chineseMantis = new TenoderaSinensis();
// Add property species name
chineseMantis.speciesName = "Chinese Mantis";
console.log("chineseMantis", chineseMantis);


// Making a Wolf
// Genus
function Canis() {
	this.genusName = null;
	this.furColor = "";
}
// Species
function CanisLupus() {
	this.speciesName = "Gray Wolf";
}

// Link Canidae to animal
Canis.prototype = new Animal();
CanisLupus.prototype = new Canis();

Canidae.prototype.setLegCount = (count) => {
	legCount = count;
}

Canidae.prototype.getLegCount = function() {
	return this.legCount;
}

let grayWolf = new CanisLupus();
console.log("grayWolf", grayWolf);


// Making a monkey
// Genus
function Alouatta() {
	this.genusName = null;
	this.color = null;
}
// Species
function AlouattaBelzebul() {
	this.speciesName = "Red-handed Howler";
}

Alouatta.prototype = new Animal();
AlouattaBelzebul.prototype = new Alouatta();

let howler = new AlouattaBelzebul();
console.log("Howler", howler);


// Making a shark
// Genus
function Carcharodon() {
	this.genusName = null;
	this.conservationStatus = "threatened";
}

//Species
function CarcharodonCarcharias() {
	this.speciesName = "Great White Shark";
}

Carcharodon.prototype = new Animal();
CarcharodonCarcharias.prototype = new Carcharodon();

let greatWhite = new CarcharodonCarcharias();
console.log("Great White", greatWhite);
