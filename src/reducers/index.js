import {combineReducers} from 'redux'
import pizzas from './pizzas';
import filter from './filter';
import sortOrder from './sortOrder';
import isLoading from './loading';
import users from './users';

export function getReducers() {
	const reducers = {
		filter,
		isLoading,
		pizzas,
		sortOrder,
		users
	};

	return combineReducers(reducers);
}
