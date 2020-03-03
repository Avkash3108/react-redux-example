import {STORE_USER_LIST } from '../actions'

function getDefaultState() {
	return [];
}

function loadUserList(state, action) {
	return action.value;
}

export default function (state = getDefaultState(), action) {
	const actions = {
		[STORE_USER_LIST] : loadUserList
	}


	const reducers = actions[action.type];

	return reducers ? reducers(state, action) : state;
}