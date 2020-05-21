import {makeServiceDataReducers} from '../../../../../src/reducers/fetch-status/service-data/service-data';

describe('Service Data Reducers', () => {
    describe('Required Redux behaviour', () => {
        it('should return NA if the provided state is undefined', () => {
            const fetchAction = 'TEST_FETCH_ACTION';
            const storeActions = ['TEST_STORE_ACTION'];
            const reducer = makeServiceDataReducers(fetchAction, storeActions);

            const returnedState = reducer(undefined, {});

            expect(returnedState).toStrictEqual('NA');
        });

        it('should return the provided state if action type is not handled', () => {
            const fetchAction = 'TEST_FETCH_ACTION';
            const storeActions = ['TEST_STORE_ACTION'];
            const reducer = makeServiceDataReducers(fetchAction, storeActions);

            const initialState = 'TEST_STATUS';

            const nextState = reducer(
                initialState,
                {
                    type: 'THIS_IS_AN_UNHANDLED_ACTION'
                }
            );

            expect(nextState).toStrictEqual(initialState);
        });
    });

    describe('FETCH action is given', () => {
        it('should return FETCHING when serviece status is fetching', () => {
            const fetchAction = 'TEST_FETCH_ACTION';
            const storeActions = ['TEST_STORE_ACTION'];
            const reducer = makeServiceDataReducers(fetchAction, storeActions);
            const initialState = 'TEST_STATUS';
            const action = {
                type: fetchAction
            };

            const resultedState = reducer(initialState, action);

            expect(resultedState).toStrictEqual('FETCHING');
        });
    });

    describe('Given Stored Action', () => {
        const fetchAction = 'ANY_FETCH_ACTION';
        const storeActions = ['STORE_ACTION_ONE', 'STORE_ACTION_TWO', 'STORE_ACTION_THREE'];

        function fetchedStatus(reducer, dataKey, action) {
            const initialState = 'TEST_STATUS';
            const finalAction = {
                [dataKey]: 'anyDataKey',
                type: action
            };
            const resultedState = reducer(initialState, finalAction);

            expect(resultedState).toStrictEqual('FETCHED');
        }

        function unavailableStatus(reducer, dataKey, action) {
            const initialState = 'TEST_STATUS';
            const finalAction = {
                [dataKey]: null,
                type: action
            };
            const resultedState = reducer(initialState, finalAction);

            expect(resultedState).toStrictEqual('UNAVAILABLE');
        }

        it('should check for "data" and return state as FETCHED', () => {
            const reducer = makeServiceDataReducers(fetchAction, storeActions);

            storeActions.forEach((action) => {
                fetchedStatus(reducer, 'data', action);
            });
        });

        it('should check if "data" is null and flag it as unavailable', () => {
            const reducer = makeServiceDataReducers(fetchAction, storeActions);

            storeActions.forEach((action) => {
                unavailableStatus(reducer, 'data', action);
            });
        });

        describe('Given dataKey attribute', () => {
            const dataKey = 'anyDataKey';

            it('should check for dataKey and return state as FETCHED', () => {
                const reducer = makeServiceDataReducers(fetchAction, storeActions, dataKey);

                storeActions.forEach((action) => {
                    fetchedStatus(reducer, dataKey, action);
                });
            });

            it('should check if dataKey is null and flag it as unavailable', () => {
                const reducer = makeServiceDataReducers(fetchAction, storeActions, dataKey);

                storeActions.forEach((action) => {
                    unavailableStatus(reducer, dataKey, action);
                });
            });
        });
    });
});

