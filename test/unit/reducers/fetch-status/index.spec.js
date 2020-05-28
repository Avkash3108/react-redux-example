import * as reduxUtils from 'redux';

import {combineFetchStatusReducers} from '../../../../src/reducers/fetch-status';
import * as makeAlertsReducer from '../../../../src/reducers/fetch-status/alert-factory';
import * as combineServiceDataReducers from '../../../../src/reducers/fetch-status/service-data';

describe('Fetch Status Reducers', () => {
    let combineReducersStub, combineServiceDataReducersStub, makeAlertsReducerStub;

    beforeEach(() => {
        combineReducersStub = jest.spyOn(reduxUtils, 'combineReducers');
    });

    afterEach(() => {

    });

    const expectedReducers = {
        alerts: Symbol('alertData'),
        serviceData: Symbol('serviceData')
    };

    function expectedReducersStub() {
        combineServiceDataReducersStub = jest.spyOn(combineServiceDataReducers, 'combineServiceDataReducers').mockReturnValue(expectedReducers.serviceData);
        makeAlertsReducerStub = jest.spyOn(makeAlertsReducer, 'makeAlerts').mockReturnValue(expectedReducers.alerts);
        return expectedReducers;
    }

    it('should wrap the fetch service reducers in a single reducing function', () => {
        const expectedCompositeReducers = expectedReducersStub();

        combineFetchStatusReducers();

        expect(combineServiceDataReducersStub).toHaveBeenCalledTimes(1);
        expect(makeAlertsReducerStub).toHaveBeenCalledTimes(1);
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

