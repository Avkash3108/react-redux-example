import React from 'react';
import {shallow} from 'enzyme';
import Chance from 'chance';
import Sticky from 'react-stickynode';
import InfiniteScroll from 'react-infinite-scroller';

import InfiniteLoader from '../../../../src/views/common/loader/infinite-loader';
import Headers from '../../../../src/views/common/headers';
import Row from '../../../../src/views/common/row';
import DataTable from '../../../../src/views/common/data-table';

const chance = new Chance();

describe('Container component', () => {
    const getData = (n = 1) => {
        return chance.n(() => {
            return {
                id: chance.natural()
            };
        }, n);
    };
    const anyProps = () => {
        return {
            allDataFetched: chance.bool(),
            data: getData(),
            dataLoading: chance.bool(),
            loadData: jest.fn(),
            loadMoreData: jest.fn(),
            moreDataLoading: chance.bool(),
            searchId: chance.pickone(['users', 'pizzas'])
        };
    };
    const render = (props = anyProps()) => {
        return shallow(<DataTable {...props}/>);
    };

    it('should be a div', () => {
        const component = render();

        expect(component.is('div')).toBe(true);
    });

    it('should have a identifying class', () => {
        const props = anyProps();
        const component = render(props);

        expect(component.hasClass(`flex-table ${props.searchId}`)).toBe(true);
    });

    describe('No data is given', () => {
        it('should not render any row when data loading is in progress', () => {
            const props = anyProps();

            props.data = [];
            props.dataLoading = true;
            const component = render(props);

            expect(component.children()).toHaveLength(1);
        });

        it('should render No Records Found alert when data loading is done', () => {
            const props = anyProps();

            props.data = [];
            props.dataLoading = false;
            const component = render(props);

            expect(component.childAt(1).type()).toStrictEqual('span');
            expect(component.childAt(1).text()).toBe('No Records Found');
        });
    });
    describe('Render Header component with Sticky', () => {
        it('should have <Sticky/> component', () => {
            const component = render();

            expect(component.childAt(0).type()).toStrictEqual(Sticky);
        });

        it('should wrape <Headers/> component in <Sticky/>', () => {
            const props = anyProps();
            const component = render(props);
            const stickyComponent = component.childAt(0);
            const headerComponent = stickyComponent.childAt(0);

            expect(headerComponent.type()).toStrictEqual(Headers);
            expect(headerComponent.props().onSort).toBe(props.loadData);
            expect(headerComponent.props().searchId).toStrictEqual(props.searchId);
        });
    });

    describe('Render row components with InfiniteScroll', () => {
        it('should have <InfiniteScroll/> component', () => {
            const props = anyProps();
            const component = render(props);
            const infiniteScrollComponent = component.childAt(1);
            const threshold = 500;

            expect(infiniteScrollComponent.type()).toStrictEqual(InfiniteScroll);
            expect(infiniteScrollComponent.props().loader).toStrictEqual(<InfiniteLoader key={'infinite-loader'}/>);
            expect(infiniteScrollComponent.props().pageStart).toBe(0);
            expect(infiniteScrollComponent.props().loadMore).toBe(props.loadMoreData);
            expect(infiniteScrollComponent.props().threshold).toBe(threshold);
            expect(infiniteScrollComponent.props().initialLoad).toBe(true);
        });

        it('should pass hasMore false when more data loading is in progress', () => {
            const props = anyProps();

            props.moreDataLoading = true;
            const component = render(props);
            const infiniteScrollComponent = component.childAt(1);

            expect(infiniteScrollComponent.props().hasMore).toBe(false);
        });

        it('should pass hasMore false when all data has been fetched', () => {
            const props = anyProps();

            props.moreDataLoading = false;
            props.allDataFetched = true;
            const component = render(props);
            const infiniteScrollComponent = component.childAt(1);

            expect(infiniteScrollComponent.props().hasMore).toBe(false);
        });

        it('should pass hasMore true when more data remaining to fetch', () => {
            const props = anyProps();

            props.moreDataLoading = false;
            props.allDataFetched = false;
            const component = render(props);
            const infiniteScrollComponent = component.childAt(1);

            expect(infiniteScrollComponent.props().hasMore).toBe(true);
        });

        it('should render row based on received data', () => {
            const props = anyProps();

            props.data = getData(2);
            props.moreDataLoading = false;
            props.allDataFetched = false;
            const component = render(props);
            const infiniteScrollComponent = component.childAt(1);

            props.data.forEach((item, index) => {
                const rowComponent = infiniteScrollComponent.childAt(index);

                expect(rowComponent.type()).toStrictEqual(Row);
                expect(rowComponent.props().item).toStrictEqual(item);
            });
        });
    });
});
