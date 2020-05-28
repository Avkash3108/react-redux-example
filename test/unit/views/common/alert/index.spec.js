import React from 'react';
import {shallow} from 'enzyme';
import {when} from 'jest-when';
import Chance from 'chance';

import AlertContainerConnector from '../../../../../src/views/common/alert';
import * as actions from '../../../../../src/action-creators/actions';
import AlertContainer from '../../../../../src/views/common/alert/alert';

const chance = new Chance();

describe('AlertContainer Connector', () => {
    const any = {
        dispatch: () => jest.fn(),
        props: () => {
            return {
                alert: {
                    alertType: chance.pickone(['success', 'warning', 'error']),
                    autoClose: chance.bool(),
                    autoCloseTime: chance.natural(),
                    dismissible: chance.bool(),
                    isOpen: chance.bool(),
                    message: chance.string(),
                    values: {}
                },
                closeAlert: jest.fn(),
                id: chance.word()
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
            <AlertContainerConnector
                store={store}
                {...props}
            />
        );
    };

    it('should render <AlertContainer/>', () => {
        const component = render();

        expect(component.type()).toStrictEqual(AlertContainer);
    });

    describe('Actions', () => {
        it('should connect the action to delete alert', () => {
            const props = any.props();
            const dispatch = any.dispatch();
            const fakeAction = Symbol('fakeAction');

            when(jest.spyOn(actions, 'closeAlert'))
                .calledWith(props.id)
                .mockReturnValue(fakeAction);
            render(any.state(), dispatch, props).props().onClose();
            const dispatchedAction = dispatch.mock.calls[0][0];

            expect(dispatchedAction).toStrictEqual(fakeAction);
        });
    });
});
