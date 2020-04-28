import {
    FETCH_PIZZA_LIST,
    FETCH_USER_LIST,
    SET_FILTER,
    SET_SORT_ORDER,
    STORE_PIZZA_LIST,
    STORE_USER_LIST
} from '../actions'
import fetch from 'isomorphic-fetch';

export function loadPizzaList(dispatch) {
    return(dispatch) => {
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
                    value: response
                })
            });
    };

}

export function loadUserList(dispatch) {
    return(dispatch) => {
        dispatch({
            type: FETCH_USER_LIST
        });
        
        fetch('/users')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (response) {
                dispatch({
                    type: STORE_USER_LIST,
                    value: response
                })
            });
    };

}

export function setFilter(filter) {
	return {
		type: SET_FILTER,
		value: filter
	}
}

export function setSortOrder(sortBy) {
    return {
        sortBy,
		type: SET_SORT_ORDER
	}
}