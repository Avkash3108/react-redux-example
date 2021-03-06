import React from 'react';
import {shallow} from 'enzyme';
import {when} from 'jest-when';

import UserTableConnector from '../../../../src/views/users';
import * as actions from '../../../../src/action-creators/actions';
import Container from '../../../../src/views/common/container';

describe('User Table Connector', () => {
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
            <UserTableConnector
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

            jest.spyOn(actions, 'loadUserList').mockReturnValue(fakeAction);
            render(any.state(), dispatch, props).props().loadData();
            const dispatchedAction = dispatch.mock.calls[0][0];

            expect(dispatchedAction).toStrictEqual(fakeAction);
        });

        it('should connect the more data loading action', () => {
            const props = any.props();
            const dispatch = any.dispatch();
            const fakeAction = Symbol('fakeAction');

            jest.spyOn(actions, 'loadMoreUsers').mockReturnValue(fakeAction);
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

        it('should connect delete data action', () => {
            const props = any.props();
            const dispatch = any.dispatch();
            const fakeAction = Symbol('fakeAction');

            when(jest.spyOn(actions, 'deleteRecords'))
                .calledWith('users')
                .mockReturnValue(fakeAction);
            render(any.state(), dispatch, props).props().deleteData();
            const dispatchedAction = dispatch.mock.calls[0][0];

            expect(dispatchedAction).toStrictEqual(fakeAction);
        });
    });
});
