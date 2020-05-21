export function getDefaultFetchOptions(otherHeaderOptions) {
    const fetchOptions = {};
    const defaultHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    fetchOptions.headers = {
        ...defaultHeaders,
        ...otherHeaderOptions
    };

    return fetchOptions;
}

export const throwError = (error) => {
    if (error.json) {
        return error.json().then((json) => {
            throw json;
        });
    }
    return error;
};

const isValid = (value) => {
    return value !== undefined && value !== null && value !== '';
};

export const buildQueryString = (queryObject) => {
    const queryparams = Object.keys(queryObject);

    const query = queryparams.reduce((acc, param) => {
        return isValid(queryObject[param]) ? acc.concat(`${param}=${queryObject[param]}`) : acc;
    }, []);

    return query.length ? `?${query.join('&')}` : '';
};
