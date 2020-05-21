import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import {shallow} from 'enzyme';

import ReactReduxExampleProvider from '../../src/react-redux-example-provider';
import {getFactories} from '../../src/factory/react-redux-example-factory';

jest.mock('../../src/factory/react-redux-example-factory', () => {
    const expectedHistory = Object.freeze({
        the: 'history'
    });
    const expectedRoutes = Object.freeze({
        the: 'routes'
    });
    const expectedStore = Object.freeze({
        dispatch: jest.fn(),
        getState: jest.fn(),
        subscribe: () => {},
        the: 'store'
    });

    return {
        getFactories: () => {
            return {
                history: expectedHistory,
                routes: expectedRoutes,
                store: expectedStore
            };
        }
    };
});

describe('React Redux Example Provider', () => {
    const render = () => {
        return shallow(<ReactReduxExampleProvider/>);
    };

    it('should be store provider', () => {
        const component = render();

        expect(component.type()).toStrictEqual(Provider);
        expect(component.props().store).toStrictEqual(getFactories().store);
    });

    it('should render router', () => {
        const component = render();
        const router = component.children();

        expect(router.type()).toStrictEqual(Router);
    });

    it('should be configured with history', () => {
        const component = render();
        const router = component.children();

        expect(router.props().history).toStrictEqual(getFactories().history);
    });

    it('should apply routes from the route factory', () => {
        const component = render();
        const router = component.children();

        expect(router.props().routes).toStrictEqual(getFactories().routes);
    });
});
