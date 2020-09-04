import React from 'react';
import {shallow} from 'enzyme';
import Chance from 'chance';

import {
    getServiceReducerKey,
    getLoadMoreDataReducerKey
} from '../../../../src/helpers';
import DataTableConnector from '../../../../src/views/common/data-table-connector';
import DataTable from '../../../../src/views/common/data-table';
import * as actions from '../../../../src/action-creators/actions';

const chance = new Chance();
let searchId = chance.pickone(['users', 'pizzas']);
const serviceKey = getServiceReducerKey(searchId);
const loadMoreServiceKey = getLoadMoreDataReducerKey(searchId);

describe('Data Table Connector', () => {
    const any = {
        dispatch: () => jest.fn(),
        props: () => {
            return {
                loadMoreData: jest.fn(),
                searchId
            };
        },
        state: () => {
            return {
                allDataFetched: chance.bool(),
                [`${searchId}`]: [],
                fetchStatus: {
                    serviceData: {
                        [`${serviceKey}`]: 'NA',
                        [`${loadMoreServiceKey}`]: 'NA'
                    }
                }
            };
        }
    };
    const render = (state = any.state(), dispatch = any.dispatch(), props = any.props()) => {
        const store = {
            dispatch,
            getState: () => state,
            subscribe: () => {}
        };

        return shallow(
            <DataTableConnector
                store={store}
                {...props}
            />
        );
    };

    it('should render <DataTable/>', () => {
        const component = render();

        expect(component.type()).toStrictEqual(DataTable);
    });

    it('should connect allDataFetched props', () => {
        const state = any.state();
        const component = render(state);

        expect(component.props().allDataFetched).toStrictEqual(state.allDataFetched);
    });

    it('should connect data list', () => {
        const props = any.props();
        const dispatch = any.dispatch();
        const state = any.state();

        state[props.searchId] = ['anyData'];
        const component = render(state, dispatch, props);

        expect(component.props().data).toStrictEqual(state[props.searchId]);
    });

    it('should connect empty data list when object is given', () => {
        const props = any.props();
        const dispatch = any.dispatch();
        const state = any.state();

        state[props.searchId] = {};
        const component = render(state, dispatch, props);

        expect(component.props().data).toStrictEqual([]);
    });

    describe('Data Loading', () => {
        it('should connect dataLoading true when service status is FETCHING', () => {
            const state = any.state();

            state.fetchStatus.serviceData[serviceKey] = 'FETCHING';
            const component = render(state);

            expect(component.props().dataLoading).toBe(true);
        });

        it('should connect dataLoading true when service status is NA', () => {
            const state = any.state();

            state.fetchStatus.serviceData[serviceKey] = 'NA';
            const component = render(state);

            expect(component.props().dataLoading).toBe(true);
        });

        it('should connect dataLoading false when service status is FETCHED', () => {
            const state = any.state();

            state.fetchStatus.serviceData[serviceKey] = 'FETCHED';
            const component = render(state);

            expect(component.props().dataLoading).toBe(false);
        });
    });

    describe('More Data Loading', () => {
        it('should connect moreDataLoading true when service status is FETCHING', () => {
            const state = any.state();

            state.fetchStatus.serviceData[loadMoreServiceKey] = 'FETCHING';
            const component = render(state);

            expect(component.props().moreDataLoading).toBe(true);
        });

        it('should connect moreDataLoading false when service status is not fatching', () => {
            const state = any.state();

            state.fetchStatus.serviceData[loadMoreServiceKey] = 'NA';
            const component = render(state);

            expect(component.props().moreDataLoading).toBe(false);
        });
    });

    describe('Actions', () => {
        [
            'pizzas',
            'users'
        ].forEach((entity) => {
            it(`should connect the data loading action for ${entity}`, () => {
                searchId = entity;
                const props = any.props();
                const dispatch = any.dispatch();
                const fakeAction = Symbol('fakeAction');
                const loadingActionName = {
                    'pizzas': 'loadPizzaList',
                    'users': 'loadUserList'
                }[props.searchId];

                jest.spyOn(actions, loadingActionName).mockReturnValue(fakeAction);
                render(any.state(), dispatch, props).props().loadData();
                const dispatchedAction = dispatch.mock.calls[0][0];

                expect(dispatchedAction).toStrictEqual(fakeAction);
            });
        });
    });
});
