import * as appHelpers from '../../../src/helpers';

describe('App Helpers', () => {
    describe('Service Reducer Key', () => {
        it('should return service reducer key on given search id', () => {
            const searchId = 'pizzas';
            const resultedKey = appHelpers.getServiceReducerKey(searchId);

            expect('fetchPizzas').toStrictEqual(resultedKey);
        });

        it('should return search id is self  when key is not found', () => {
            const searchId = 'test';
            const resultedKey = appHelpers.getServiceReducerKey(searchId);

            expect(searchId).toStrictEqual(resultedKey);
        });
    });

    describe('Load MORE Service Reducer Key', () => {
        it('should return service reducer key on given search id', () => {
            const searchId = 'users';
            const resultedKey = appHelpers.getLoadMoreDataReducerKey(searchId);

            expect('fetchMoreUsers').toStrictEqual(resultedKey);
        });

        it('should return search id is self  when key is not found', () => {
            const searchId = 'test';
            const resultedKey = appHelpers.getLoadMoreDataReducerKey(searchId);

            expect(searchId).toStrictEqual(resultedKey);
        });
    });

    describe('Table Keys', () => {
        it('should get header Keys list', () => {
            const searchId = 'users';
            const resultedKeys = appHelpers.getHeaderKeys(searchId);

            expect(appHelpers.headerKeys[searchId]).toStrictEqual(resultedKeys);
        });

        it('should get data Keys list', () => {
            const searchId = 'pizzas';
            const resultedKeys = appHelpers.getDataKeys(searchId);

            expect(appHelpers.dataKeys[searchId]).toStrictEqual(resultedKeys);
        });
    });

    describe('Clean style classes', () => {
        it('should clean header class', () => {
            const header = 'PIZZA_NAME';
            const resultedClass = appHelpers.cleanHeaderClass(header);

            expect('pizza-name').toStrictEqual(resultedClass);
        });

        it('should clean data column class', () => {
            const dataKey = 'availableSizes';
            const resultedClass = appHelpers.cleanDataClass(dataKey);

            expect('available-sizes').toStrictEqual(resultedClass);
        });
    });
});
