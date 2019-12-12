import {
    createStore as reduxCreateStore
} from 'redux';

import {getReducers} from '../../reducers/index';

export function getStore() {
    const reducers = getReducers();
   
    return reduxCreateStore(reducers);
}