import 'isomorphic-fetch';
import {
    buildQueryString,
    getDefaultFetchOptions,
    throwError

} from '../helpers/fetch-helper';

export const fetchData = (endpoint, queryObject = {}) => {
    const query = buildQueryString(queryObject);
    const serviceEndpoint = `${endpoint}${query}`;

    return fetch(serviceEndpoint, getDefaultFetchOptions())
        .then((response) => response.json())
        .catch(throwError);
};

export const deleteData = (endpoint) => {
    const options = getDefaultFetchOptions();

    options.method = 'DELETE';
    return fetch(endpoint, options)
        .then((response) => response.json())
        .catch(throwError);
};
