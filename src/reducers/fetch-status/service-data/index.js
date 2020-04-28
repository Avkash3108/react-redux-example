import {combineReducers} from 'redux';
import * as actions from '../../../actions';
import {makeServiceDataReducers} from './service-data'

export function combineServiceDataReducers() {
	const serviceReducers = {
		fetchPizzas: makeServiceDataReducers(actions.FETCH_PIZZA_LIST, [actions.STORE_PIZZA_LIST], 'value'),
		fetchUsers: makeServiceDataReducers(actions.FETCH_USER_LIST, [actions.STORE_USER_LIST], 'value')
	};

	return combineReducers(serviceReducers);
}