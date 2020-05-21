import React from 'react';
import {shallow} from 'enzyme';

import PizzaTableConnector from '../../../../src/views/pizzas';
import * as actions from '../../../../src/action-creators/actions';
import Container from '../../../../src/views/common/container';

describe('PIzza Table Connector', () => {
    const any = {
        dispatch: () => jest.fn(),
        props: () => {
            return {
                searchId: 'users'
            };
        },
        state: () => {
            return {};
        }
    };
    const render = (state = any.state(), dispatch = any.dispatch(), props = any.props()) => {
        const store = {
            dispatch,
            getState: () => state,
            subscribe: () => {}
        };

        return shallow(
            <PizzaTableConnector
                store={store}
                {...props}
            />
        );
    };

    it('should render <Container/>', () => {
        const component = render();

        expect(component.type()).toStrictEqual(Container);
    });

    describe('Actions', () => {
        it('should connect the data loading action', () => {
            const props = any.props();
            const dispatch = any.dispatch();
            const fakeAction = Symbol('fakeAction');

            jest.spyOn(actions, 'loadPizzaList').mockReturnValue(fakeAction);
            render(any.state(), dispatch, props).props().loadData();
            const dispatchedAction = dispatch.mock.calls[0][0];

            expect(dispatchedAction).toStrictEqual(fakeAction);
        });

        it('should connect the more data loading action', () => {
            const props = any.props();
            const dispatch = any.dispatch();
            const fakeAction = Symbol('fakeAction');

            jest.spyOn(actions, 'loadMorePizzas').mockReturnValue(fakeAction);
            render(any.state(), dispatch, props).props().loadMoreData();
            const dispatchedAction = dispatch.mock.calls[0][0];

            expect(dispatchedAction).toStrictEqual(fakeAction);
        });

        it('should connect reset state action', () => {
            const props = any.props();
            const dispatch = any.dispatch();
            const fakeAction = Symbol('fakeAction');

            jest.spyOn(actions, 'resetState').mockReturnValue(fakeAction);
            render(any.state(), dispatch, props).props().resetState();
            const dispatchedAction = dispatch.mock.calls[0][0];

            expect(dispatchedAction).toStrictEqual(fakeAction);
        });
    });
});
