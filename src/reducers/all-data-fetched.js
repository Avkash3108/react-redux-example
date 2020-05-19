import {
    FETCH_PIZZA_LIST,
    FETCH_USER_LIST,
    STORE_PIZZA_LIST,
    STORE_MORE_PIZZAS,
    STORE_USER_LIST,
    STORE_MORE_USERS

} from '../actions';

function getDefaultState() {
    return false;
}

function noDataIsReceived(state, action) {
    return action.data !== null && action.data.length === 0;
}

export default function (state = getDefaultState(), action) {
    const actions = {
        [FETCH_PIZZA_LIST] : getDefaultState,
        [FETCH_USER_LIST] : getDefaultState,
        [STORE_PIZZA_LIST] : noDataIsReceived,
        [STORE_MORE_PIZZAS] : noDataIsReceived,
        [STORE_USER_LIST] : noDataIsReceived,
        [STORE_MORE_USERS] : noDataIsReceived
    };


    const reducers = actions[action.type];

    return reducers ? reducers(state, action) : state;
}
