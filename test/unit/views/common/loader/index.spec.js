import React from 'react';
import {shallow} from 'enzyme';

import FullPageLoaderConnector from '../../../../../src/views/common/loader';
import FullPageLoader from '../../../../../src/views/common/loader/full-page-loader';

describe('Full Page Loader Connector', () => {
    const any = {
        dispatch: () => jest.fn(),
        props: () => {
            return {
                servicesToCheck: ['fetchTestDataOne', 'fetchTestDataTwo']
            };
        },
        state: () => {
            return {
                fetchStatus: {
                    serviceData: {
                        fetchTestData: 'NA',
                        fetchTestDataOne: 'NA',
                        fetchTestDataTwo: 'NA'
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
            <FullPageLoaderConnector
                store={store}
                {...props}
            />
        );
    };
    it('should render <FullPageLoader/> component', () => {
        const component = render();

        expect(component.type()).toStrictEqual(FullPageLoader);
    });

    describe('One of the service is fatching data form given services', () => {
        it('should set isLoading flag to true', () => {
            const state = any.state();

            state.fetchStatus.serviceData.fetchTestDataOne = 'FETCHING';
            const component = render(state);

            expect(component.props().isLoading).toStrictEqual(true);
        });
    });

    describe('None of the service is fatching data form given services', () => {
        it('should set isLoading flag to false', () => {
            const state = any.state();
            const component = render(state);

            expect(component.props().isLoading).toStrictEqual(false);
        });
    });

});
