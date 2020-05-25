import {
    FETCH_USER_LIST,
    ITEMS_DELETED,
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

function removeDeletedPizzas(state, action) {
    return state.filter((item) => {
        return action.selectedIds.indexOf(`${item.id}`) === -1;
    });
}

export default function (state = getDefaultState(), action) {
    const actions = {
        [FETCH_USER_LIST]: getDefaultState,
        [ITEMS_DELETED]: removeDeletedPizzas,
        [STORE_MORE_PIZZAS]: loadMorePizzas,
        [STORE_PIZZA_LIST]: loadPizzList
    };
    const reducers = actions[action.type];

    return reducers ? reducers(state, action) : state;
}
