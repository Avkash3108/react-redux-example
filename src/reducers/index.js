import {combineReducers} from 'redux';

import pizzas from './pizzas';
import filter from './filter';
import sort from './sort-order';
import routing from './routing';
import users from './users';
import selectedRows from './selected-rows';
import {combineFetchStatusReducers} from './fetch-status';
import allDataFetched from './all-data-fetched';
import lastFetchedPage from './last-fetched-page';

export function getReducers() {
    const reducers = {
        allDataFetched,
        fetchStatus: combineFetchStatusReducers(),
        filter,
        lastFetchedPage,
        pizzas,
        routing,
        selectedRows,
        sort,
        users
    };

    return combineReducers(reducers);
}
