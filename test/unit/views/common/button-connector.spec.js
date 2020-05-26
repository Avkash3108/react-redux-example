import React from 'react';
import {shallow} from 'enzyme';
import {when} from 'jest-when';
import Chance from 'chance';

import ButtonConnector from '../../../../src/views/common/button-connector';
import * as actions from '../../../../src/action-creators/actions';
import Button from '../../../../src/views/common/button';

const chance = new Chance();

describe('Button Connector', () => {
    const any = {
        dispatch: () => jest.fn(),
        props: () => {
            return {
                label: 'DELETE',
                searchId: chance.word()
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
            <ButtonConnector
                store={store}
                {...props}
            />
        );
    };

    it('should render <Button/>', () => {
        const component = render();

        expect(component.type()).toStrictEqual(Button);
    });

    it('should disable button if no any row is selected', () => {
        const props = any.props();
        const state = any.state();

        state.selectedRows = {
            [`${chance.natural()}`]: false
        };
        const dispatch = any.dispatch();
        const component = render(state, dispatch, props);

        expect(component.props().disabled).toBe(true);
    });

    it('should enable button if one of row is selected', () => {
        const props = any.props();
        const state = any.state();

        state.selectedRows = {
            [`${chance.natural()}`]: true
        };
        const dispatch = any.dispatch();
        const component = render(state, dispatch, props);

        expect(component.props().disabled).toBe(false);
    });

    describe('Actions', () => {
        it('should connect the action creator for deleting records', () => {
            const props = any.props();
            const dispatch = any.dispatch();
            const fakeAction = Symbol('fakeAction');

            when(jest.spyOn(actions, 'deleteRecords'))
                .calledWith(props.searchId)
                .mockReturnValue(fakeAction);
            render(any.state(), dispatch, props).props().onClick();
            const dispatchedAction = dispatch.mock.calls[0][0];

            expect(dispatchedAction).toStrictEqual(fakeAction);
        });
    });
});
