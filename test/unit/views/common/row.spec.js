import React from 'react';
import {shallow} from 'enzyme';

import {
    cleanDataClass,
    getDataKeys
} from '../../../../src/helpers';
import Row from '../../../../src/views/common/row';
import Column from '../../../../src/views/common/column';

describe('Row component', () => {
    const getItems = () => {
        return getDataKeys('users').reduce((acc, key) => {
            acc[key] = 'test-item';
            return acc;
        }, {});
    };
    const anyProps = () => {
        return {
            item: getItems(),
            searchId: 'users'
        };
    };
    const render = (props = anyProps()) => {
        return shallow(<Row {...props}/>);
    };

    it('should be a div', () => {
        const component = render();

        expect(component.is('div')).toBe(true);
    });

    it('should have a identifying class', () => {
        const component = render();

        expect(component.hasClass('flex-row')).toBe(true);
    });

    it('should render columns based on given search id', () => {
        const props = anyProps();
        const dataKays = getDataKeys(props.searchId);
        const component = render(props);

        dataKays.forEach((dataKay, index) => {
            const columnComponent = component.childAt(index);
            const className = `flex-cell ${cleanDataClass(dataKay)}`;
            const value = props.item[dataKay];

            expect(columnComponent.type()).toStrictEqual(Column);
            expect(columnComponent.hasClass(className)).toBe(true);
            expect(columnComponent.props().value).toStrictEqual(value);
        });
    });
});
