import {when} from 'jest-when';
import * as reduxUtils from 'redux';

import * as actions from '../../../../../src/actions';
import {combineServiceDataReducers} from '../../../../../src/reducers/fetch-status/service-data';
import * as serviceDataReducersFactory from '../../../../../src/reducers/fetch-status/service-data/service-data';

describe('Service Data Reducers', () => {
    let combineReducersStub, serviceDataReducersFactoryStub;

    beforeEach(() => {
        combineReducersStub = jest.spyOn(reduxUtils, 'combineReducers');
    });

    afterEach(() => {

    });

    const expectedReducers = {
        serviceData: Symbol('serviceData')
    };

    function allServiceDataReducers() {
        serviceDataReducersFactoryStub = jest.spyOn(serviceDataReducersFactory, 'makeServiceDataReducers').mockReturnValue(expectedReducers.serviceData);

        return [
            ['deleteItems', actions.DELETE_ITEMS, [actions.ITEMS_DELETED], 'data'],
            ['fetchPizzas', actions.FETCH_PIZZA_LIST, [actions.STORE_PIZZA_LIST], 'data'],
            ['fetchMorePizzas', actions.FETCH_MORE_PIZZAS, [actions.STORE_MORE_PIZZAS], 'data'],
            ['fetchUsers', actions.FETCH_USER_LIST, [actions.STORE_USER_LIST], 'data'],
            ['fetchMoreUsers', actions.FETCH_MORE_USERS, [actions.STORE_MORE_USERS], 'data']
        ].reduce((acc, data) => {
            const [reducerKey, fetchAction, storeActions, dataKey] = data;
            const fakeReducer = Symbol(reducerKey);

            dataKey ? when(serviceDataReducersFactoryStub).calledWith(fetchAction, storeActions, dataKey).mockReturnValue(fakeReducer)
                : when(serviceDataReducersFactoryStub).calledWith(fetchAction, storeActions).mockReturnValue(fakeReducer);

            acc[reducerKey] = fakeReducer;

            return acc;
        }, {});
    }

    it('should combine reducers for all fetch services', () => {
        const allServiceReducers = allServiceDataReducers();

        combineServiceDataReducers();

        expect(combineReducersStub).toHaveBeenCalledTimes(1);
        expect(combineReducersStub).toHaveBeenCalledWith(allServiceReducers);
        expect(serviceDataReducersFactoryStub).toHaveBeenCalledTimes(Object.keys(allServiceReducers).length);
    });

    it('should return created combined reducer function', () => {
        const expectedReducer = Symbol('reducer');

        when(combineReducersStub).calledWith(allServiceDataReducers()).mockReturnValue(expectedReducer);

        const actualReducer = combineServiceDataReducers();

        expect(actualReducer).toStrictEqual(expectedReducer);
    });
});

