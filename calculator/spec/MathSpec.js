describe("The basic functions for a calculator", function() {

	it("Should have an add function", function() {
		expect(add).toBeDefined();
	});

	it("Should add two integers", function() {
		expect(add(4, 5)).toBe(9);
	});

	it("Should have a subtract function", function() {
		expect(subtract).toBeDefined();
	});

	it("Should subtract one integer from another", function() {
		expect(subtract(9, 7)).toBe(2);
	});

	it("Should have a multiply function", function() {
		expect(multiply).toBeDefined();
	});

	it("Should multiply two integers", function() {
		expect(multiply(10, 3)).toBe(30);
	});

	it("Should have a divide function", function() {
		expect(divide).toBeDefined();
	});

	it("Should divide one integer with another", function() {
		expect(divide(15, 3)).toBe(5);
	});

	it("Should have a squared function", function() {
		expect(squared).toBeDefined();
	});

	it("Should square an integer", function() {
		expect(squared(5, 2)).toBe(25);
	});

	it("Should have a squareRoot function", function() {
		expect(squareRoot).toBeDefined();
	});

	it("Should define the square root of an integer", function() {
		expect(squareRoot(81)).toBe(9);
	});

});