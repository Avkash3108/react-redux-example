import {
    FETCH_PIZZA_LIST,
    FETCH_USER_LIST,
    FETCH_MORE_PIZZAS,
    FETCH_MORE_USERS,
    STORE_MORE_PIZZAS,
    STORE_MORE_USERS,
    SET_FILTER,
    SET_SORT_ORDER,
    STORE_PIZZA_LIST,
    STORE_USER_LIST,
    RESET_STATE
} from '../actions';
import {fetchData} from '../services/data-fetch';

export function loadPizzaList() {
    return (dispatch, getState) => {
        dispatch({
            type: FETCH_PIZZA_LIST
        });
        const state = getState();
        const queryObject = {
            '_limit': 100,
            '_order': state.sort.sortOrder,
            '_page': 1,
            '_sort': state.sort.sortBy,
            'q': state.filter
        };

        return fetchData('/pizzas', queryObject)
            .catch(() => null)
            .then((data) => {
                dispatch({
                    data,
                    type: STORE_PIZZA_LIST
                });
            });
    };
}

export function loadMorePizzas() {
    return (dispatch, getState) => {
        dispatch({
            type: FETCH_MORE_PIZZAS
        });
        const state = getState();
        const lastPage = state.lastFetchedPage + 1;
        const queryObject = {
            '_limit': 100,
            '_order': state.sort.sortOrder,
            '_page': lastPage,
            '_sort': state.sort.sortBy,
            'q': state.filter

        };

        return fetchData('/pizzas', queryObject)
            .catch(() => null)
            .then((data) => {
                dispatch({
                    data,
                    page: lastPage,
                    type: STORE_MORE_PIZZAS
                });
            });
    };
}

export function loadMoreUsers() {
    return (dispatch, getState) => {
        dispatch({
            type: FETCH_MORE_USERS
        });
        const state = getState();
        const lastPage = state.lastFetchedPage + 1;
        const queryObject = {
            '_limit': 100,
            '_order': state.sort.sortOrder,
            '_page': lastPage,
            '_sort': state.sort.sortBy,
            'q': state.filter

        };

        return fetchData('/users', queryObject)
            .catch(() => null)
            .then((data) => {
                dispatch({
                    data,
                    page: lastPage,
                    type: STORE_MORE_USERS
                });
            });
    };
}

export function loadUserList() {
    return (dispatch, getState) => {
        dispatch({
            type: FETCH_USER_LIST
        });
        const state = getState();
        const queryObject = {
            '_limit': 100,
            '_order': state.sort.sortOrder,
            '_page': 1,
            '_sort': state.sort.sortBy,
            'q': state.filter

        };

        return fetchData('/users', queryObject)
            .catch(() => null)
            .then((data) => {
                dispatch({
                    data,
                    type: STORE_USER_LIST
                });
            });
    };
}

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        value: filter
    };
}

export function setSortOrder(sortBy) {
    return {
        sortBy,
        type: SET_SORT_ORDER
    };
}

export function resetState() {
    return {
        type: RESET_STATE
    };
}
