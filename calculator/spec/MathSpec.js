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

});