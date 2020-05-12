import {routerReducer} from 'react-router-redux';

import reducer from '../../../src/reducers/routing';
jest.mock('react-router-redux');

describe('Routing Reducer', () => {
	const any = {
		action: () => {
			return {
				any: 'anyAction'
			};
		},
		state: () => {
			return {
				some: 'state'
			};
		}
	};
	
	it('should call routerReducer with given state and action', () => {
		const state = any.state();
		const action = any.action();
		routerReducer.mockReturnValue({});

		reducer(state, action);

		expect(routerReducer).toHaveBeenCalledTimes(1);
		expect(routerReducer).toHaveBeenCalledWith(state, action);
	});
});