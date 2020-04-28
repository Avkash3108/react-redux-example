import {combineReducers} from 'redux';

function getStoreAction(payload) {
	return (state, action) => {
		return action[payload] === null ? 'UNAVAILABLE' : 'FETCHED';
	};
}

export function makeServiceDataReducers(fetchActions, storeActions, payload = 'data') {
	const storeAction = storeActions.reduce((acc, action) => {
		return {
			...acc,
			[action]: getStoreAction(payload)
		};

	}, {});

	return (state = 'NA', action) => { 
		const actions = {
			[fetchActions]: () => {
				return 'FETCHING'
			},
			...storeAction
		};
		const reducer = actions[action.type];

		 return reducer ? reducer(state, action) : state;
	}
}