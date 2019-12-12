import { combineReducers } from 'redux'
import AppData from './reducer'

export function getReducers() {
	const reducers = {
		AppData
	};

	return combineReducers(reducers);
}
