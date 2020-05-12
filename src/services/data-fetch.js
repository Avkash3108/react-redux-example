import 'isomorphic-fetch';
import {
	buildQueryString,
	getDefaultFetchOptions,
	throwError,

} from '../helpers/fetch-helper';

export const fetchData = (endpoint, queryObject = {}) => {
    const query = buildQueryString(queryObject);
    const serviceEndpoint = `${endpoint}${query}`;

    return fetch(serviceEndpoint, getDefaultFetchOptions())
        .then((response) => response.json())
        .catch(throwError)	
}
