import * as fetchHelpers from '../../../src/helpers/fetch-helper';
import * as dataFetchServices from '../../../src/services/data-fetch';

describe('Data Fetch Services', () => {
    const anyResponse = () => {
        return {
            [Symbol('mockAttribute')]: Symbol('mockValue')
        };
    };
    const fakeResponse = (body, status) => {
        return {
            json: () => {
                return Promise.resolve(body);
            },
            status
        };
    };

    afterEach(() => {});

    const okStatus = 200;
    const getFetchStub = (response = anyResponse(), success = true, status = okStatus) => {
        const fetchStub = jest.spyOn(global, 'fetch');
        const promiseStatus = success ? 'resolve' : 'reject';

        fetchStub.mockReturnValue(Promise[promiseStatus](fakeResponse(response, status)));

        return fetchStub;
    };

    describe('Data Service', () => {
        it('should call query builder with given query object to build query string', () => {
            const queryObject = {
                any: 'query'
            };
            const endpoint = '/test';
            const buildQueryStringStub = jest.spyOn(fetchHelpers, 'buildQueryString');
            const defaultFetchOptionsStub = jest.spyOn(fetchHelpers, 'getDefaultFetchOptions');

            return dataFetchServices.fetchData(endpoint, queryObject).then(() => {
                expect(buildQueryStringStub).toHaveBeenCalledTimes(1);
                expect(buildQueryStringStub).toHaveBeenCalledWith(queryObject);
                expect(defaultFetchOptionsStub).toHaveBeenCalledTimes(1);
            });
        });

        it('should fetch data wwith endpoint when queryObject is not given', () => {
            const fetchStub = getFetchStub();
            const endpoint = '/test';
            const defaultFetchOptions = fetchHelpers.getDefaultFetchOptions();

            return dataFetchServices.fetchData(endpoint).then(() => {
                expect(fetchStub).toHaveBeenCalledTimes(1);
                expect(fetchStub).toHaveBeenCalledWith(endpoint, defaultFetchOptions);
            });
        });

        it('should use given endpoint and query builder object to fetch data', () => {
            const fetchStub = getFetchStub();
            const queryObject = {
                any: 'query'
            };
            const endpoint = '/test';
            const defaultFetchOptions = fetchHelpers.getDefaultFetchOptions();
            const expectedEndPoint = `${endpoint}${fetchHelpers.buildQueryString(queryObject)}`;

            return dataFetchServices.fetchData(endpoint, queryObject).then(() => {
                expect(fetchStub).toHaveBeenCalledTimes(1);
                expect(fetchStub).toHaveBeenCalledWith(expectedEndPoint, defaultFetchOptions);
            });
        });

        it('should return the correct data', () => {
            const response = anyResponse();
            const queryObject = {
                any: 'query'
            };
            const endpoint = '/test';

            getFetchStub(response);

            return dataFetchServices.fetchData(endpoint, queryObject).then((actualResponse) => {
                expect(actualResponse).toStrictEqual(response);
            });
        });

        it('should reject a known error', () => {
            const expectedResponse = anyResponse();
            const queryObject = {
                any: 'query'
            };
            const endpoint = '/test';

            getFetchStub(expectedResponse, false);

            return dataFetchServices.fetchData(endpoint, queryObject)
                .then(() => {
                    throw new Error('Unexpected resolution');
                })
                .catch((error) => {
                    expect(error).toStrictEqual(expectedResponse);
                });
        });

        it('should reject a any unknown error', () => {
            const anyUnknownError = anyResponse();
            const queryObject = {
                any: 'query'
            };
            const endpoint = '/test';

            getFetchStub(anyUnknownError, false);

            return dataFetchServices.fetchData(endpoint, queryObject)
                .then(() => {
                    throw new Error('Unexpected resolution');
                })
                .catch((error) => {
                    expect(error).toStrictEqual(anyUnknownError);
                });
        });
    });
});
