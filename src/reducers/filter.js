import {
    RESET_STATE,
    SET_FILTER
} from '../actions';

function getDefaultState() {
    return '';
}

function setFilter(state, action) {
    return action.value;
}

export default function (state = getDefaultState(), action) {
    const actions = {
        [RESET_STATE]: getDefaultState,
        [SET_FILTER]: setFilter
    };

    const reducers = actions[action.type];

    return reducers ? reducers(state, action) : state;
}
