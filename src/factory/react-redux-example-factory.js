import {syncHistoryWithStore} from 'react-router-redux';
import {hashHistory} from 'react-router';

import * as storeFactory from './store/store-factory';
import * as routeFactory from './route/route-factory';

export function getFactories() {
    const store = storeFactory.getStore();
    const routes = routeFactory.getRoutes();
    const history = syncHistoryWithStore(hashHistory, store);

    return {
        history,
        routes,
        store
    };
}
