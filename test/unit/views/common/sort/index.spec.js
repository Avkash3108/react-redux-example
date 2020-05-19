import React from 'react';
import {shallow} from 'enzyme';
import {when} from 'jest-when';

import SortConnector from '../../../../../src/views/common/sort';
import * as actions from '../../../../../src/action-creators/actions';
import Sort from '../../../../../src/views/common/sort/sort';

describe('Sort Header Connector', () => {
    const any = {
        dispatch: () => jest.fn(),
        props: () => {
            return {
                onSort: jest.fn(),
                sortBy: 'TEST'
            };
        },
        state: () => {
            return {
                sort: {
                    sortBy: 'TEST',
                    sortOrder: 'DESC'
                }
            };
        }
    };
    const render = (state = any.state(), dispatch = any.dispatch(), props = any.props()) => {

        const store = {
            dispatch,
            getState: () => state,
            subscribe: () => {}
        };
        return shallow(
            <SortConnector
                store={store}
                {...props}
            />
        );
    };

    it('should render <Sort/>', () => {
        const component = render();

        expect(component.type()).toStrictEqual(Sort);
    });

    it('should connect Sort Order from state to set sort icon state', () => {
        const state = any.state();
        const props = any.props();
        const dispatch = any.dispatch();
        const component = render(state, dispatch, props);

        expect(component.props().sortOrder).toStrictEqual(state.sort.sortOrder);
    });

    it('should connect Sort Order to blank when it doesn not match sortby', () => {
        const state = any.state();
        const props = any.props();

        props.sortBy = 'anySortByKey';
        const dispatch = any.dispatch();
        const component = render(state, dispatch, props);

        expect(component.props().sortOrder).toStrictEqual('');
    });

    describe('Actions', () => {
        it('should connect the action creators on changing sort order', () => {
            const props = any.props();
            const dispatch = any.dispatch();
            const fakeAction = Symbol('fakeAction');

            when(jest.spyOn(actions, 'setSortOrder'))
                .calledWith(props.sortBy)
                .mockReturnValue(fakeAction);
            render(any.state(), dispatch, props).props().onSorting();
            const dispatchedAction = dispatch.mock.calls[0][0];

            expect(dispatchedAction).toStrictEqual(fakeAction);
        });

        it('should call callback provided as prop on sorting', () => {
            const props = any.props();
            const dispatch = any.dispatch();

            const propStub = jest.spyOn(props, 'onSort');
            render(any.state(), dispatch, props).props().onSorting();

            expect(propStub).toHaveBeenCalledTimes(1);
        });
    });
});
