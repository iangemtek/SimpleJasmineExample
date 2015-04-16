describe('Sum Function', function() {

	it ('Two Positive Integers', function() {
		expect(sum(1, 2)).toBe(3);
		expect(sum(1, 2)).not.toBe(null);
		expect(sum(1, 2)).not.toBeNull();
		expect(sum(1, 2)).toEqual(3);
		expect(sum(1, 2)).toBeDefined();
		expect(sum(1000, 2000)).toBe(3000);
		expect(sum(1000, 2000)).toBeGreaterThan(2000);
		expect(sum(1000, 2000)).toBeLessThan(4000);
		expect(sum(1000, 2000)).toEqual(jasmine.any(Number));
		expect(function(){
			return sum(1000, 2000);
		}).not.toThrow();
	});

	it ('Two Negative Integers', function() {
		expect(sum(-1, -2)).toBe(-3);
		// more expectations here
	});

	it ('One Positive and One Negative Integer', function() {
		expect(sum(1, -2)).toBe(-1);
		// more expectations here
	});

	// Nested Suite
	describe ('Integer and Zero', function() {
		it ('Positive Integer and Zero', function() {
			expect(sum(1, 0)).toBe(1);
			// more expectations here
		});

		it ('Negative Integer and Zero', function() {
			expect(sum(-1, 0)).toBe(-1);
			// more expectations here
		})
		
	});
});

describe('Abs Function',  function() {
	// test cases for abs()
});