import React from 'react';
import {shallow} from 'enzyme';

import NotificationConnector from '../../../src/views/notification-connector';
import Notifications from '../../../src/views/notifications';

describe('Notification Connector', () => {
    const any = {
        dispatch: () => jest.fn(),
        props: () => {
            return {};
        },
        state: () => {
            return {
                fetchStatus: {
                    alerts: ['anyAlert']
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
            <NotificationConnector
                store={store}
                {...props}
            />
        );
    };

    it('should render <Notifications/>', () => {
        const component = render();

        expect(component.type()).toStrictEqual(Notifications);
    });

    describe('Connect state as props', () => {
        it('should connect alerts', () => {
            const state = any.state();
            const component = render(state);

            expect(component.props().alerts).toStrictEqual(state.fetchStatus.alerts);
        });
    });
});
