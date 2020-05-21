import {combineReducers} from 'redux';

import * as actions from '../../../actions';
import {makeServiceDataReducers} from './service-data';

export function combineServiceDataReducers() {
    const serviceReducers = {
        fetchMorePizzas: makeServiceDataReducers(actions.FETCH_MORE_PIZZAS, [actions.STORE_MORE_PIZZAS], 'data'),
        fetchMoreUsers: makeServiceDataReducers(actions.FETCH_MORE_USERS, [actions.STORE_MORE_USERS], 'data'),
        fetchPizzas: makeServiceDataReducers(actions.FETCH_PIZZA_LIST, [actions.STORE_PIZZA_LIST], 'data'),
        fetchUsers: makeServiceDataReducers(actions.FETCH_USER_LIST, [actions.STORE_USER_LIST], 'data')
    };

    return combineReducers(serviceReducers);
}
