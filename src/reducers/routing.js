import {routerReducer} from 'react-router-redux';

export default function (state, action) {
    return routerReducer({
        ...state
    }, action);
}
