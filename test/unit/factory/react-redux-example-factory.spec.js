import * as factory from '../../../src/factory/react-redux-example-factory';
import * as routeFactory from '../../../src/factory/route/route-factory';
import * as storeFactory from '../../../src/factory/store/store-factory';
import {hashHistory} from 'react-router';

import * as reactRouterRedux from 'react-router-redux';
import {when} from 'jest-when';

describe('React Eedux Example Factory', function() {
    let expectedObject;

    beforeEach(() => {
        expectedObject = {
            history: 'history',
            routes: 'routes',
            store: 'store'
        };
        jest.spyOn(routeFactory, 'getRoutes').mockReturnValue(expectedObject.routes);
        jest.spyOn(storeFactory, 'getStore').mockReturnValue(expectedObject.store);
        when(jest.spyOn(reactRouterRedux, 'syncHistoryWithStore'))
            .calledWith(hashHistory, expectedObject.store)
            .mockReturnValue(expectedObject.history);
    });

    afterEach(() => {});

    it('should export routes', () => {
        const factories = factory.getFactories();

        expect(factories.routes).toStrictEqual(expectedObject.routes);
    });

    it('should export state', () => {
        const factories = factory.getFactories();

        expect(factories.store).toStrictEqual(expectedObject.store);
    });

    it('should sync history with store', () => {
        const factories = factory.getFactories();

        expect(factories.history).toStrictEqual(expectedObject.history);
    });
});
