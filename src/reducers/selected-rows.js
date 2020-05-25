import {
    ITEMS_DELETED,
    ON_SELECT_ROW,
    RESET_STATE
} from '../actions';

function getDefaultState() {
    return {};
}

function setRowSelection(state, action) {
    return {
        ...state,
        [action.id]: !state[action.id]
    };
}

export default function (state = getDefaultState(), action) {
    const actions = {
        [ITEMS_DELETED]: getDefaultState,
        [ON_SELECT_ROW]: setRowSelection,
        [RESET_STATE]: getDefaultState
    };

    const reducers = actions[action.type];

    return reducers ? reducers(state, action) : state;
}
