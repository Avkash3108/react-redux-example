import React from 'react';
import {shallow} from 'enzyme';

import Column from '../../../../src/views/common/column';

const MockChildComponent = () => (<div/>);

describe('Column component', () => {
    const anyProps = () => {
        return {
            children: (
                <MockChildComponent/>
            ),
            className: 'test-class'
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

    it('should render provided children in props', () => {
        const props = anyProps();
        const component = render(props);

        expect(component.contains(props.children)).toStrictEqual(true);
    });
});
