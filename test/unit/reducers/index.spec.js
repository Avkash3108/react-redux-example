import * as reduxUtils from 'redux';

import {getReducers} from '../../../src/reducers';
import pizzas from '../../../src/reducers/pizzas';
import filter from '../../../src/reducers/filter';
import sort from '../../../src/reducers/sort-order';
import routing from '../../../src/reducers/routing';
import selectedRows from '../../../src/reducers/selected-rows';
import allDataFetched from '../../../src/reducers/all-data-fetched';
import lastFetchedPage from '../../../src/reducers/last-fetched-page';
import * as fetchStatusReducers from '../../../src/reducers/fetch-status';

import users from '.../../../src/reducers/users';

describe('Application Reducers', () => {
    let combineReducersStub;

    beforeEach(() => {
        combineReducersStub = jest.spyOn(reduxUtils, 'combineReducers');
    });

    afterEach(() => {

    });

    const expectedReducers = {
        allDataFetched,
        fetchStatus: Symbol('fetchStatus'),
        filter,
        lastFetchedPage,
        pizzas,
        routing,
        selectedRows,
        sort,
        users
    };

    function expectedReducersStub() {
        jest.spyOn(fetchStatusReducers, 'combineFetchStatusReducers').mockReturnValue(expectedReducers.fetchStatus);

        return expectedReducers;
    }

    it('should wrap the reducers in a single reducing function', () => {
        const expectedCompositeReducers = expectedReducersStub();

        getReducers();

        expect(combineReducersStub).toHaveBeenCalledTimes(1);
        expect(combineReducersStub).toHaveBeenCalledWith(expectedCompositeReducers);
    });

    it('should return created combined reducer function', () => {
        const expectedCombinedReducer = Symbol('reducer');

        combineReducersStub.mockReturnValue(expectedCombinedReducer);

        const actualReducer = getReducers();

        expect(actualReducer).toStrictEqual(expectedCombinedReducer);
    });
});

