import React from 'react';
import {shallow} from 'enzyme';
import {FormattedMessage} from 'react-intl';
import Chance from 'chance';
import Alert from 'react-bootstrap/Alert';

import AlertContainer from '../../../../../src/views/common/alert/alert';

const chance = new Chance();

describe('AlertContainer Component', () => {
    const any = {
        props: () => {
            return {
                alert: {
                    alertType: chance.pickone(['success', 'warning', 'error']),
                    autoClose: chance.bool(),
                    autoCloseTime: chance.natural(),
                    blockUser: false,
                    dismissible: chance.bool(),
                    isOpen: chance.bool(),
                    message: chance.string(),
                    values: {}
                },
                id: chance.word(),
                onClose: jest.fn()
            };
        }
    };
    const render = (props = any.props()) => {
        return shallow(<AlertContainer {...props}/>);
    };

    it('should be a div', () => {
        const component = render();

        expect(component.type()).toStrictEqual('div');
    });

    it('should block user actions when blockUser props is true', () => {
        const props = any.props();

        props.alert.blockUser = true;
        const component = render(props);

        expect(component.childAt(0).type()).toStrictEqual('div');
        expect(component.childAt(0).hasClass('alert-block-screen')).toBe(true);
    });

    it('should display react-bootstrap Alert component', () => {
        const props = any.props();
        const component = render(props);
        const alertComponent = component.childAt(0);

        expect(alertComponent.type()).toStrictEqual(Alert);
        expect(alertComponent.props().dismissible).toBe(props.alert.dismissible);
        expect(alertComponent.props().show).toBe(props.alert.isOpen);
        expect(alertComponent.props().variant).toBe(props.alert.alertType);
        expect(alertComponent.props().onClose).toStrictEqual(props.onClose);
    });

    it('should display alert message in <FormattedMessage/> with given values', () => {
        const props = any.props();
        const component = render(props);
        const messageComponent = component.childAt(0).childAt(0);

        expect(messageComponent.type()).toStrictEqual(FormattedMessage);
        expect(messageComponent.props().id).toBe(props.alert.message);
        expect(messageComponent.props().values).toBe(props.alert.values);
    });
});
