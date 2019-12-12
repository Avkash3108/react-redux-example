import {
	FETCH_PIZZA_LIST,
	STORE_PIZZA_LIST
} from '../actions'

function getDefaultState() {
	return false;
}

function setLoading(state, action) {
	return action.type === FETCH_PIZZA_LIST ? true : false;
}

export default function (state = getDefaultState(), action) {
	const actions = {
		[FETCH_PIZZA_LIST]: setLoading,
		[STORE_PIZZA_LIST]: setLoading
	}

	const reducers = actions[action.type];

	return reducers ? reducers(state, action) : state;
}