import {combineReducers} from 'redux';

import {combineServiceDataReducers} from './service-data';
import {makeAlerts} from './alert-factory';

export function combineFetchStatusReducers() {
    const serviceReducers = {
        alerts: makeAlerts(),
        serviceData: combineServiceDataReducers()
    };

    return combineReducers(serviceReducers);
}
