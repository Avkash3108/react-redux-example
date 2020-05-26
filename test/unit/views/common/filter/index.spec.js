import React from 'react';
import {shallow} from 'enzyme';
import {when} from 'jest-when';

import FilterConnector from '../../../../../src/views/common/filter';
import * as actions from '../../../../../src/action-creators/actions';
import Filter from '../../../../../src/views/common/filter/filter';

describe('Filter Connector', () => {
    const any = {
        dispatch: () => jest.fn(),
        props: () => {
            return {
                label: 'search',
                onFilter: jest.fn()
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
            <FilterConnector
                store={store}
                {...props}
            />
        );
    };

    it('should render <Filter/>', () => {
        const component = render();

        expect(component.type()).toStrictEqual(Filter);
    });

    describe('Actions', () => {
        it('should connect the action creators on searching', () => {
            const props = any.props();
            const dispatch = any.dispatch();
            const fakeAction = Symbol('fakeAction');
            const filter = 'test';

            when(jest.spyOn(actions, 'setFilter'))
                .calledWith(filter)
                .mockReturnValue(fakeAction);
            render(any.state(), dispatch, props).props().onFilter(filter);
            const dispatchedAction = dispatch.mock.calls[0][0];

            expect(dispatchedAction).toStrictEqual(fakeAction);
        });

        it('should call callback provided as prop on searching', () => {
            const props = any.props();
            const dispatch = any.dispatch();
            const propStub = jest.spyOn(props, 'onFilter');

            render(any.state(), dispatch, props).props().onFilter('test');

            expect(propStub).toHaveBeenCalledTimes(1);
        });
    });
});
