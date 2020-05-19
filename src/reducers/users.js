import {
    FETCH_PIZZA_LIST,
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
    ] :  state;
}

export default function (state = getDefaultState(), action) {
    const actions = {
        [FETCH_PIZZA_LIST]: getDefaultState,
        [STORE_USER_LIST] : loadUserList,
        [STORE_MORE_USERS] : loadMoreUsers
    };


    const reducers = actions[action.type];

    return reducers ? reducers(state, action) : state;
}
