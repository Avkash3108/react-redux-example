import {
	FETCH_PIZZA_LIST,
	FETCH_USER_LIST,
	SET_SORT_ORDER,
	RESET_STATE
} from '../actions'

function getDefaultState() {
	return {
		sortOrder: null,
		sortBy: null

	}
}

function getSortOrder(state) {
    return state.sortOrder.includes('ASC') ? 'DESC' : 'ASC';
}

function setSortOrder(state, action) {
    const reverseSortOrder = state.sortOrder ? getSortOrder(state) : null;

    return {
        sortBy: action.sortBy,
        sortOrder: action.sortBy === state.sortBy ? reverseSortOrder : 'ASC'
    };
}

export default function (state = getDefaultState(), action) {
	const actions = {
		[SET_SORT_ORDER] : setSortOrder,
		[RESET_STATE]: getDefaultState
	}

	const reducers = actions[action.type];

	return reducers ? reducers(state, action) : state;
}