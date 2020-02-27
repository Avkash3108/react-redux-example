import {
	FETCH_PIZZA_LIST,
	FETCH_USER_LIST,
	STORE_PIZZA_LIST,
	STORE_USER_LIST
} from '../actions'

function getDefaultState() {
	return false;
}

function setLoading() {
	return true;
}

export default function (state = getDefaultState(), action) {
	const actions = {
		[FETCH_PIZZA_LIST]: setLoading,
		[FETCH_USER_LIST]: setLoading,
		[STORE_PIZZA_LIST]: getDefaultState,
		[STORE_USER_LIST]: getDefaultState
	}

	const reducers = actions[action.type];

	return reducers ? reducers(state, action) : state;
}