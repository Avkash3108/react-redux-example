import React from 'react';
import {shallow} from 'enzyme';
import {FormattedMessage} from 'react-intl';

import Button from '../../../../src/views/common/button';

describe('Button Component', () => {
    const anyProps = () => {
        return {
            className: 'test',
            disabled: false,
            label: 'DELETE',
            onClick: jest.fn()
        };
    };
    const render = (props = anyProps()) => {
        return shallow(<Button {...props}/>);
    };

    it('should be a button', () => {
        const component = render();

        expect(component.type()).toStrictEqual('button');
    });

    it('should have given class name', () => {
        const props = anyProps();
        const component = render(props);

        expect(component.hasClass(props.className)).toStrictEqual(true);
    });

    it('should render button with given props', () => {
        const props = anyProps();
        const component = render(props);

        expect(component.props().disabled).toBe(props.disabled);
        expect(component.props().onClick).toStrictEqual(props.onClick);
        expect(component.props().type).toBe('button');
    });

    it('should display provided label', () => {
        const props = anyProps();
        const component = render(props);
        const label = component.childAt(0);

        expect(label.type()).toStrictEqual(FormattedMessage);
        expect(label.props().id).toStrictEqual(props.label);
    });
});
