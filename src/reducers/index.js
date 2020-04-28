import {combineReducers} from 'redux'
import pizzas from './pizzas';
import filter from './filter';
import sort from './sortOrder';
import isLoading from './loading';
import users from './users';
import {combineFetchStatusReducers} from './fetch-status'

export function getReducers() {
	const reducers = {
		fetchStatus: combineFetchStatusReducers(),
		filter,
		isLoading,
		pizzas,
		sort,
		users
	};

	return combineReducers(reducers);
}
