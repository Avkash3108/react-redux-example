import {
    FETCH_PIZZA_LIST,
    ITEMS_DELETED,
    STORE_USER_LIST,
    STORE_MORE_USERS
} from '../actions';

function getDefaultState() {
    return [];
}

function loadUserList(state, action) {
    return action.data !== null ? action.data : getDefaultState();
}

function loadMoreUsers(state, action) {
    const haveMore = action.data !== null && action.data.length !== 0;

    return haveMore ? [
        ...state,
        ...action.data
    ] : state;
}

function removeDeletedUsers(state, action) {
    return state.filter((item) => {
        return action.selectedIds.indexOf(`${item.id}`) === -1;
    });
}

export default function (state = getDefaultState(), action) {
    const actions = {
        [FETCH_PIZZA_LIST]: getDefaultState,
        [ITEMS_DELETED]: removeDeletedUsers,
        [STORE_MORE_USERS]: loadMoreUsers,
        [STORE_USER_LIST]: loadUserList
    };

    const reducers = actions[action.type];

    return reducers ? reducers(state, action) : state;
}
