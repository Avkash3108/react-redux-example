import add from '../../src/test_demo';

describe('Test Jest setup', () => {
	it('Should add two numbers', () => {
		const x = 5;
		const y = 10;
		const expectedSum = 15;
		const result = add(5, 10);
		
		expect(expectedSum).toEqual(result);
	});
});