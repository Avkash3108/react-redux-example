import fetch from 'isomorphic-fetch';
import {
	buildQueryString,
	getDefaultFetchOptions,
	throwError,

} from './fetch-helper';

export const fetchData = (endpoint, queryObject = {}) => {
    const query = buildQueryString(queryObject);

    return fetch(`${endpoint}${query}`, getDefaultFetchOptions())
        .then((response) => response.json())
        .catch(throwError)	
}
