import React from 'react';
import {shallow} from 'enzyme';
import Chance from 'chance';

import Checkbox from '../../../../../src/views/common/checkbox/checkbox';

const MockChildComponent = () => (<div/>);
const chance = new Chance();

describe('Checkbox Component', () => {
    const anyProps = () => {
        return {
            checked: chance.bool(),
            children: (
                <MockChildComponent/>
            ),
            className: chance.word(),
            id: chance.natural(),
            onChange: jest.fn()

        };
    };
    const render = (props = anyProps()) => {
        return shallow(<Checkbox {...props}/>);
    };

    it('should be a div', () => {
        const component = render();

        expect(component.type()).toStrictEqual('div');
    });

    it('should have an identifying class name', () => {
        const props = anyProps();
        const component = render(props);

        expect(component.hasClass(`react-checkbox ${props.className}`)).toStrictEqual(true);
    });

    it('should have an hidden input with type checkbox', () => {
        const props = anyProps();
        const component = render(props);
        const hiddenInput = component.childAt(0);

        hiddenInput.simulate('change', props);

        expect(hiddenInput.type()).toStrictEqual('input');
        expect(hiddenInput.props().checked).toStrictEqual(props.checked);
        expect(hiddenInput.hasClass('hidden-checkbox')).toBe(true);
        expect(hiddenInput.props().type).toStrictEqual('checkbox');
        expect(props.onChange).toHaveBeenCalledTimes(1);
    });

    it('should display a label with checked class', () => {
        const props = anyProps();

        props.checked = true;
        const component = render(props);
        const label = component.childAt(1);

        expect(label.type()).toStrictEqual('label');
        expect(label.props().htmlFor).toStrictEqual(props.id);
        expect(label.hasClass('style-checkbox checked')).toBe(true);
    });

    it('should display a label with default class', () => {
        const props = anyProps();

        props.checked = false;
        const component = render(props);
        const label = component.childAt(1);

        expect(label.type()).toStrictEqual('label');
        expect(label.props().htmlFor).toStrictEqual(props.id);
        expect(label.hasClass('style-checkbox')).toBe(true);
    });

    it('should display check mark icon svg', () => {
        const props = anyProps();

        props.checked = true;
        const component = render(props);
        const icon = component.childAt(1).childAt(0);

        expect(icon.type()).toStrictEqual('svg');
        expect(icon.hasClass('icon-checked')).toBe(true);
    });

    it('should display given children after check mark icon svg', () => {
        const props = anyProps();

        props.checked = true;
        const component = render(props);

        expect(component.contains(props.children)).toStrictEqual(true);
    });
});
