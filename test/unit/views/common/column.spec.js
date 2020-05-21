import React from 'react';
import {shallow} from 'enzyme';

import Column from '../../../../src/views/common/column';

describe('Column component', () => {
    const anyProps = () => {
        return {
            className: 'test-class',
            value: 'test'
        };
    };
    const render = (props = anyProps()) => {
        return shallow(<Column {...props}/>);
    };

    it('should be a div', () => {
        const component = render();

        expect(component.is('div')).toBe(true);
    });

    it('should have a class provided as props', () => {
        const props = anyProps();
        const component = render(props);

        expect(component.hasClass(props.className)).toBe(true);
    });

    it('should render value provided in props', () => {
        const props = anyProps();
        const component = render(props);

        expect(component.text()).toBe(props.value);
    });
});
