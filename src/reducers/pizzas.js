import {
    FETCH_USER_LIST,
    STORE_PIZZA_LIST,
    STORE_MORE_PIZZAS
} from '../actions';

function getDefaultState() {
    return [];
}

function loadPizzList(state, action) {
    return action.data !== null ? action.data : getDefaultState();
}

function loadMorePizzas(state, action) {
    const haveMore = action.data !== null && action.data.length !== 0;

    return haveMore ? [
        ...state,
        ...action.data
    ] : state;
}

export default function (state = getDefaultState(), action) {
    const actions = {
        [FETCH_USER_LIST]: getDefaultState,
        [STORE_MORE_PIZZAS]: loadMorePizzas,
        [STORE_PIZZA_LIST]: loadPizzList
    };
    const reducers = actions[action.type];

    return reducers ? reducers(state, action) : state;
}
