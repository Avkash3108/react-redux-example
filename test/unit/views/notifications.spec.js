import React from 'react';
import {shallow} from 'enzyme';
import Chance from 'chance';

import Alert from '../../../src/views/common/alert';
import Notifications from '../../../src/views/notifications';

const chance = new Chance();

describe('Notifications component', () => {
    const getAlert = () => {
        return {
            alertType: chance.pickone(['success', 'warning', 'error']),
            autoClose: chance.bool(),
            autoCloseTime: chance.natural(),
            dismissible: chance.bool(),
            id: chance.word(),
            isOpen: chance.bool(),
            message: chance.string(),
            values: {}
        };
    };

    const render = (props = {}) => {
        return shallow(<Notifications {...props}/>);
    };

    it('should render <Alert/> component for given alerts', () => {
        const alertsCount = 5;
        const props = {
            alerts: chance.n(getAlert, alertsCount)
        };
        const component = render(props);

        props.alerts.forEach((alert, index) => {
            const alertComponent = component.childAt(index);

            expect(alertComponent.type()).toStrictEqual(Alert);
            expect(alertComponent.props().id).toBe(alert.id);
            expect(alertComponent.props().alert).toStrictEqual(alert);
        });
    });
});
