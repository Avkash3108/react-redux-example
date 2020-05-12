import * as reduxUtils from 'redux';

import {combineFetchStatusReducers} from '../../../../src/reducers/fetch-status';                     
import * as combineServiceDataReducers from '../../../../src/reducers/fetch-status/service-data'

describe('Fetch Status Reducers', () => {
	let combineReducersStub, combineServiceDataReducersStub;

	beforeEach(() => {
		combineReducersStub = jest.spyOn(reduxUtils, 'combineReducers');
	});

    afterEach(() => {

    });

    const expectedReducers = {
		serviceData: Symbol('serviceData')
	};

	function expectedReducersStub() {
		combineServiceDataReducersStub = jest.spyOn(combineServiceDataReducers, 'combineServiceDataReducers').mockReturnValue(expectedReducers.serviceData);

		return expectedReducers;
	}

	it('should wrap the fetch service reducers in a single reducing function', () => {
		const expectedCompositeReducers = expectedReducersStub();

		combineFetchStatusReducers();

        expect(combineServiceDataReducersStub).toHaveBeenCalledTimes(1);
		expect(combineReducersStub).toHaveBeenCalledTimes(1);
		expect(combineReducersStub).toHaveBeenCalledWith(expectedCompositeReducers);
	});

	it('should return created combined reducer function', () => {
		const expectedCombinedReducer = Symbol('reducer');

		combineReducersStub.mockReturnValue(expectedCombinedReducer);

		const actualReducer = combineFetchStatusReducers();

		expect(actualReducer).toStrictEqual(expectedCombinedReducer);
	});
});

