import React from 'react';
import {shallow} from 'enzyme';
import Chance from 'chance';

import Container from '../../../../src/views/common/container';
import FullPageLoader from '../../../../src/views/common/loader';
import Tabs from '../../../../src/views/common/tabs/tabs';
import DataTable from '../../../../src/views/common/data-table-connector';

const chance = new Chance();

describe('Container component', () => {
    const anyProps = () => {
        return {
            deleteData: jest.fn(),
            loadData: jest.fn(),
            loadMoreData: jest.fn(),
            resetState: jest.fn(),
            searchId: chance.pickone(['users', 'pizzas'])
        };
    };
    const render = (props = anyProps()) => {
        return shallow(<Container {...props}/>);
    };

    describe('Component did mount', () => {
        it('should load data after mounting', () => {
            const props = anyProps();

            render(props);

            expect(props.loadData).toHaveBeenCalledTimes(1);
        });
    });

    describe('Component will unmount', () => {
        it('should reset state before unmount', () => {
            const props = anyProps();
            const component = render(props);

            component.unmount();
            expect(props.resetState).toHaveBeenCalledTimes(1);
        });
    });

    it('should be a div', () => {
        const component = render();

        expect(component.is('div')).toBe(true);
    });

    it('should have a identifying class', () => {
        const component = render();

        expect(component.hasClass('table-container')).toBe(true);
    });

    it('should render tabs', () => {
        const component = render();

        expect(component.childAt(0).type()).toStrictEqual(Tabs);
    });

    it('should render Data Table', () => {
        const props = anyProps();
        const component = render(props);
        const tableComponent = component.childAt(2);

        expect(tableComponent.type()).toStrictEqual(DataTable);
        expect(tableComponent.props().searchId).toStrictEqual(props.searchId);
        expect(tableComponent.props().loadMoreData).toStrictEqual(props.loadMoreData);
    });

    it('should render Full Page Loader', () => {
        const props = anyProps();
        const component = render(props);
        const index = 3;
        const loaderComponent = component.childAt(index);

        expect(loaderComponent.type()).toStrictEqual(FullPageLoader);
        expect(loaderComponent.props().servicesToCheck).toStrictEqual(['deleteItems', 'fetchPizzas', 'fetchUsers']);
    });
});
