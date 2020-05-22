import React from 'react';
import {shallow} from 'enzyme';

import Filter from '../../../../../src/views/common/filter/filter';

describe('Filter Component', () => {
    const anyProps = () => {
        return {
            label: 'sarching',
            onFilter: jest.fn()
        };
    };
    const render = (props = anyProps()) => {
        return shallow(<Filter {...props}/>);
    };

    it('should be a div', () => {
        const component = render();

        expect(component.type()).toStrictEqual('div');
    });

    it('should have an identifying class name', () => {
        const component = render();

        expect(component.hasClass('filter')).toStrictEqual(true);
    });

    it('should display provided label', () => {
        const props = anyProps();
        const component = render(props);

        expect(component.childAt(0).type()).toStrictEqual('label');
        expect(component.childAt(0).text()).toStrictEqual(props.label);
    });

    it('should display search input', () => {
        const props = anyProps();
        const component = render(props);
        const filterComponent = component.childAt(1);
        const event = {
            target: {
                value: 'TEST'
            }
        };

        filterComponent.simulate('change', event);
        expect(filterComponent.type()).toStrictEqual('input');
        expect(props.onFilter).toHaveBeenCalledTimes(1);
        expect(props.onFilter).toHaveBeenCalledWith(event.target.value);
    });
});
