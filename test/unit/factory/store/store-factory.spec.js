import {when} from 'jest-when';
import {hashHistory} from 'react-router';
import * as reactRouterRedux from 'react-router-redux';
import thunk from 'redux-thunk';
import * as reduxUtils from 'redux';

import * as reducerFactory from '../../../../src/reducers';
import * as storeFactory from '../../../../src/factory/store/store-factory';

describe('Application Store Factory', () => {
    let createStoreStub, reducerFactoryStub, expectedStore, reducer, routerMiddleware, thunkMiddleware, unAppliedRouterMiddleware, composedMiddlewares;

    function makeFakeObjects() {
        composedMiddlewares = 'composedMiddlewares';
        expectedStore = 'expectedStore';
        reducer = 'reducer';
        unAppliedRouterMiddleware = 'unAppliedRouterMiddleware';
        routerMiddleware = 'routerMiddleware';
        thunkMiddleware = 'thunkMiddleware';
    }

    function stubObjects() {
        when(jest.spyOn(reactRouterRedux, 'routerMiddleware'))
            .calledWith(hashHistory)
            .mockReturnValue(unAppliedRouterMiddleware);

        when(jest.spyOn(reduxUtils, 'applyMiddleware'))
            .calledWith(unAppliedRouterMiddleware)
            .mockReturnValue(routerMiddleware)
            .calledWith(thunk)
            .mockReturnValue(thunkMiddleware);

        when(jest.spyOn(reduxUtils, 'compose'))
            .calledWith(routerMiddleware, thunkMiddleware)
            .mockReturnValue(composedMiddlewares);

        reducerFactoryStub = jest.spyOn(reducerFactory, 'getReducers');
        reducerFactoryStub.mockReturnValue(reducer);

        createStoreStub = jest.spyOn(reduxUtils, 'createStore');
        createStoreStub.mockReturnValue(expectedStore);
    }

    beforeEach(() => {
        makeFakeObjects();
        stubObjects();
    });

    afterEach(() => {});

    describe('Create Store', () => {
        it('should Create Store using reducers with composing thunk middleware, router middleware', () => {
            storeFactory.getStore();

            expect(createStoreStub).toHaveBeenCalledWith(reducer, composedMiddlewares);
        });

        it('should get all reducers from reducer factory when creating store', () => {
            storeFactory.getStore();

            expect(reducerFactoryStub).toHaveBeenCalledTimes(1);
        });
    });
});
