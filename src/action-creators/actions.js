import {
    FETCH_PIZZA_LIST,
    SET_FILTER,
    STORE_PIZZA_LIST,
    SET_SORT_ORDER
} from '../actions'
import fetch from 'isomorphic-fetch';

export function loadPizzaList(dispatch) {
    dispatch({
        type: FETCH_PIZZA_LIST
    });
    	 fetch('/pizzas')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (response) {
                dispatch({
                	type: STORE_PIZZA_LIST,
                	value: response.pizzas
                })
            });
}

export function setFilter(filter) {
	return {
		type: SET_FILTER,
		value: filter
	}
}

export function setSortOrder(sortOrder) {
    return {
		type: SET_SORT_ORDER,
		value: sortOrder ==='DESC'?'ASC':'DESC'
	}
}