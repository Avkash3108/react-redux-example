import React from 'react';
import {shallow} from 'enzyme';

import IconUnSorted from '../../../../../src/views/common/sort/icon-unsorted';
import IconSorted from '../../../../../src/views/common/sort/icon-sorted';
import Sort from '../../../../../src/views/common/sort/sort';

describe('Sort Component', () => {
    const anyProps = () => {
        return {
            onSorting: jest.fn(),
            sortOrder: ''
        };

    };
    const render = (props = anyProps()) => {
        return shallow(<Sort {...props}/>);
    };
    it('should be a div', () => {
        const component = render();

        expect(component.type()).toStrictEqual('div');
    });

    it('should have an identifying class name', () => {
        const component = render();

        expect(component.hasClass('sortable-icons')).toStrictEqual(true);
    });

    it('should have an Ascending Order ClassName when sort order id ASC', () => {
        const props = anyProps();

        props.sortOrder = 'ASC';
        const component = render(props);

        expect(component.hasClass('asc')).toStrictEqual(true);
    });


    it('should not have an Ascending Order ClassName when sort order is not ASC', () => {
        const component = render();

        expect(component.hasClass('asc')).not.toStrictEqual(true);
    });

    it('should call onSorting props on clicking sorting icons', () => {
        const props = anyProps();
        const component = render(props);

        component.simulate('click');

        expect(props.onSorting).toHaveBeenCalledTimes(1);
    });

    describe('rendered sorting icon', () => {
        it('should  render <IconSorted/> when sortOrder is ASC', () => {
            const props = anyProps();

            props.sortOrder = 'ASC';
            const component = render(props);

            expect(component.childAt(0).type()).toStrictEqual(IconSorted);
        });

        it('should  render <IconSorted/> when sortOrder is DESC', () => {
            const props = anyProps();

            props.sortOrder = 'DESC';
            const component = render(props);

            expect(component.childAt(0).type()).toStrictEqual(IconSorted);
        });

        it('should  render <IconUnSorted/> when sortOrder is DESC', () => {
            const component = render();

            expect(component.childAt(0).type()).toStrictEqual(IconUnSorted);
        });
    });
});
