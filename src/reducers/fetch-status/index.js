import {combineReducers} from 'redux';

import {combineServiceDataReducers} from './service-data';

export function combineFetchStatusReducers() {
    const serviceReducers = {
        serviceData: combineServiceDataReducers()
    };

    return combineReducers(serviceReducers);
}
