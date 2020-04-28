import {
	FETCH_PIZZA_LIST,
	FETCH_USER_LIST,
	SET_SORT_ORDER
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
		[FETCH_PIZZA_LIST] : getDefaultState,
		[FETCH_USER_LIST] : getDefaultState,
		[SET_SORT_ORDER] : setSortOrder
	}

	const reducers = actions[action.type];

	return reducers ? reducers(state, action) : state;
}