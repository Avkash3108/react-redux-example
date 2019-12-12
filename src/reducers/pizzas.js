import {STORE_PIZZA_LIST } from '../actions'

function getDefaultState() {
	return [];
}

function LoadPizzList(state, action) {
	return action.value;
}

export default function (state = getDefaultState(), action) {
	const actions = {
		[STORE_PIZZA_LIST] : LoadPizzList.bind(this)
	}


	const reducers = actions[action.type];

	return reducers ? reducers(state, action) : state;
}