import React from 'react';
import {shallow} from 'enzyme';

import {
    cleanHeaderClass,
    getDataKeys,
    getHeaderKeys
} from '../../../../src/helpers';
import Headers from '../../../../src/views/common/headers';
import Header from '../../../../src/views/common/header';

describe('Headers component', () => {
    const anyProps = () => {
        return {
            onSort: jest.fn(),
            searchId: 'users'
        };
    };
    const render = (props = anyProps()) => {
        return shallow(<Headers {...props}/>);
    };

    it('should be a div', () => {
        const component = render();

        expect(component.is('div')).toBe(true);
    });

    it('should have a identifying class', () => {
        const component = render();

        expect(component.hasClass('flex-row header')).toBe(true);
    });

    it('should render headers based on given search id', () => {
        const props = anyProps();
        const component = render(props);
        const headerKays = getHeaderKeys(props.searchId);

        headerKays.forEach((headerKey, index) => {
            const headerComponent = component.childAt(index);
            const className = `flex-cell ${cleanHeaderClass(headerKey)}`;
            const sortBy = getDataKeys(props.searchId)[index];

            expect(headerComponent.type()).toStrictEqual(Header);
            expect(headerComponent.hasClass(className)).toBe(true);
            expect(headerComponent.props().onSort).toStrictEqual(props.onSort);
            expect(headerComponent.props().sortBy).toStrictEqual(sortBy);
        });
    });
});
