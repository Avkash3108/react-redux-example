import {SET_SORT_ORDER } from '../actions'

function getDefaultState() {
	return 'ASC';
}

function setSortOrder(state, action) {
	return action.value;     
}

export default function (state = getDefaultState(), action) {
	const actions = {
		[SET_SORT_ORDER] : setSortOrder
	}


	const reducers = actions[action.type];

	return reducers ? reducers(state, action) : state;
}