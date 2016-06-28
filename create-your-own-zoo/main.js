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
console.log("Chinese Mantis", chineseMantis);


// Making a Wolf
// Genus
function Canis() {
	this.genusName = null;
	this.furColor = "";
}
// Species
function CanisLupus() {
	this.genusName = "Canus";
	this.speciesName = null;
}

// Link Canidae to animal
Canis.prototype = new Animal();
CanisLupus.prototype = new Canis();

let grayWolf = new CanisLupus();
grayWolf.speciesName = "Gray Wolf";
console.log("Gray Wolf", grayWolf);


// Making a monkey
// Genus
function Alouatta() {
	this.genusName = null;
	this.color = null;
}
// Species
function AlouattaBelzebul() {
	this.genusName = Alouatta;
	this.speciesName = null;
}

Alouatta.prototype = new Animal();
AlouattaBelzebul.prototype = new Alouatta();

let howler = new AlouattaBelzebul();
howler.speciesName = "Red-handed Howler"; 
console.log("Howler", howler);


// Making a shark
// Genus
function Carcharodon() {
	this.genusName = null;
	this.conservationStatus = "threatened";
}

//Species
function CarcharodonCarcharias() {
	this.genusName = "Carcharodon";
	this.speciesName = null;
}

Carcharodon.prototype = new Animal();
CarcharodonCarcharias.prototype = new Carcharodon();

let greatWhite = new CarcharodonCarcharias();
greatWhite.speciesName = "Great White Shark";
console.log("Great White", greatWhite);


