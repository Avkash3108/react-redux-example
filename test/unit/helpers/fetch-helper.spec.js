import * as fetchHelpers from '../../../src/helpers/fetch-helper';

describe('Fetch Helpers', () => {
    it('should return default fetch options when given header options are blank', () => {
        const expctedOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        const resultedFetchOptions = fetchHelpers.getDefaultFetchOptions({});

        expect(expctedOptions).toStrictEqual(resultedFetchOptions);
    });

    it('should add default fetch options with given header options', () => {
        const expctedOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'test-header-option': 'test'
            }
        };
        const resultedFetchOptions = fetchHelpers.getDefaultFetchOptions({
            'test-header-option': 'test'
        });

        expect(expctedOptions).toStrictEqual(resultedFetchOptions);
    });

    describe('Build Query String', () => {
        it('should ignore param with undefined value', () => {
            const expectQueryString = '?param1=param1Value1&param2=param2Value2';
            const resultedQueryString = fetchHelpers.buildQueryString({
                'param1': 'param1Value1',
                'param2': 'param2Value2',
                'param3': undefined
            });

            expect(expectQueryString).toStrictEqual(resultedQueryString);
        });

        it('should ignore param with null value', () => {
            const expectQueryString = '?param1=param1Value1&param2=param2Value2';
            const resultedQueryString = fetchHelpers.buildQueryString({
                'param1': 'param1Value1',
                'param2': 'param2Value2',
                'param3': null
            });

            expect(expectQueryString).toStrictEqual(resultedQueryString);
        });

        it('should ignore param with blank string', () => {
            const expectQueryString = '?param1=param1Value1&param2=param2Value2';
            const resultedQueryString = fetchHelpers.buildQueryString({
                'param1': 'param1Value1',
                'param2': 'param2Value2',
                'param3': ''
            });

            expect(expectQueryString).toStrictEqual(resultedQueryString);
        });
    });
});
