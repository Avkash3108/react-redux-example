import {
    FETCH_PIZZA_LIST,
    FETCH_USER_LIST,
    STORE_MORE_PIZZAS,
    STORE_MORE_USERS

} from '../actions';

function getDefaultState() {
    return 1;
}

function setLastFetchedPage(state, action) {
    return action.page;
}

export default function (state = getDefaultState(), action) {
    const actions = {
        [FETCH_PIZZA_LIST] : getDefaultState,
        [FETCH_USER_LIST] : getDefaultState,
        [STORE_MORE_PIZZAS] : setLastFetchedPage,
        [STORE_MORE_USERS] : setLastFetchedPage
    };


    const reducers = actions[action.type];

    return reducers ? reducers(state, action) : state;
}
