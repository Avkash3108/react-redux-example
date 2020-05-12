import * as Actions from '../../src/actions';

describe('Give Action List', () => {
	it('should have unique value for each actions', ()=> {
		const sortedValues = Object.values(Actions).sort();

		sortedValues.reduce((previousAction, currentAction) => {
			expect(currentAction).not.toStrictEqual(previousAction);

			return currentAction;
		});
	});
});