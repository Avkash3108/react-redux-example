import React from 'react';
import {shallow} from 'enzyme';
import {when} from 'jest-when';
import Chance from 'chance';

import CheckboxConnector from '../../../../../src/views/common/checkbox';
import Checkbox from '../../../../../src/views/common/checkbox/checkbox';
import * as actions from '../../../../../src/action-creators/actions';

const chance = new Chance();

describe('Checkbox Connector', () => {
    const any = {
        dispatch: () => jest.fn(),
        props: () => {
            return {
                id: chance.natural()
            };
        },
        state: () => {
            return {
                selectedRows: {}
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
            <CheckboxConnector
                store={store}
                {...props}
            />
        );
    };

    it('should render <Checkbox/>', () => {
        const component = render();

        expect(component.type()).toStrictEqual(Checkbox);
    });

    describe('Connect other props', () => {
        it('should connect the check props', () => {
            const props = any.props();
            const state = any.state();

            state.selectedRows[props.id] = true;
            const dispatch = any.dispatch();
            const component = render(state, dispatch, props);

            expect(component.props().checked).toStrictEqual(true);
        });
    });

    describe('Actions', () => {
        it('should connect the on Change action', () => {
            const props = any.props();
            const dispatch = any.dispatch();
            const fakeAction = Symbol('fakeAction');

            when(jest.spyOn(actions, 'onSelectedRow'))
                .calledWith(props.id)
                .mockReturnValue(fakeAction);
            render(any.state(), dispatch, props).props().onChange();
            const dispatchedAction = dispatch.mock.calls[0][0];

            expect(dispatchedAction).toStrictEqual(fakeAction);
        });
    });
});
