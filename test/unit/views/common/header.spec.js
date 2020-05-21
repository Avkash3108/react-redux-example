import React from 'react';
import {shallow} from 'enzyme';
import {FormattedMessage} from 'react-intl';

import Header from '../../../../src/views/common/header';
import Sort from '../../../../src/views/common/sort';

describe('Header component', () => {
    const anyProps = () => {
        return {
            className: 'test-class',
            label: 'test',
            onSort: jest.fn(),
            sortBy: 'test'
        };
    };
    const render = (props = anyProps()) => {
        return shallow(<Header {...props}/>);
    };

    it('should be a div', () => {
        const component = render();

        expect(component.is('div')).toBe(true);
    });

    it('should have a class recevied as props', () => {
        const props = anyProps();
        const component = render(props);

        expect(component.hasClass(props.className)).toBe(true);
    });

    it('should render label recevied as props', () => {
        const props = anyProps();
        const component = render(props);
        const lebelComponent = component.childAt(0);

        expect(lebelComponent.type()).toStrictEqual(FormattedMessage);
        expect(lebelComponent.props().id).toStrictEqual(props.label);
    });

    it('should render sorting component for sorting columns', () => {
        const props = anyProps();
        const component = render(props);
        const sortComponent = component.childAt(1);

        expect(sortComponent.type()).toStrictEqual(Sort);
        expect(sortComponent.props().onSort).toStrictEqual(props.onSort);
        expect(sortComponent.props().sortBy).toStrictEqual(props.sortBy);
    });
});
