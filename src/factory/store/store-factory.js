import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import {hashHistory} from 'react-router';
import {
    applyMiddleware,
    compose,
    createStore as reduxCreateStore
} from 'redux';

import {getReducers} from '../../reducers/index';

export function getStore() {
    const reducers = getReducers();
    const middleware = routerMiddleware(hashHistory);

    return reduxCreateStore(reducers, compose(applyMiddleware(middleware), applyMiddleware(thunk)));
}
