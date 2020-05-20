import {
    FETCH_PIZZA_LIST,
    FETCH_USER_LIST,
    STORE_PIZZA_LIST,
    STORE_MORE_PIZZAS,
    STORE_USER_LIST,
    STORE_MORE_USERS

} from '../../../src/actions';
import reducer from '../../../src/reducers/all-data-fetched';

describe('All data fetched reducer', () => {
    function anyInitialState() {
        return false;
    }

    it('should return the default state if the provided state is undefined', () => {
        const resultedState = reducer(undefined, {});

        expect(resultedState).toBe(false);
    });


    it('should return the provided state if action type is not handled', () => {
        const initialState = anyInitialState();
        const action = {
            type: 'THIS_IS_AN_UNHANDLED_ACTION'
        };
        const resultedState = reducer(initialState, action);

        expect(resultedState).toBe(initialState);
    });

    [
        {
            type: STORE_PIZZA_LIST
        },
        {
            type: STORE_MORE_PIZZAS
        },
        {
            type: STORE_USER_LIST
        },
        {
            type: STORE_MORE_USERS
        }
    ].forEach((actionItem) => {
        describe(`on dispatching ${actionItem.type} action`, () => {
            it('should return false as state when more data is remaining to load', () => {
                const initialState = anyInitialState();
                const action = {
                    data: ['anyData'],
                    type: actionItem.type
                };
                const resultedState = reducer(initialState, action);

                expect(resultedState).toBe(false);
            });

            it('should return false as state when action has dispatched with null data', () => {
                const initialState = anyInitialState();
                const action = {
                    data: null,
                    type: actionItem.type
                };
                const resultedState = reducer(initialState, action);

                expect(resultedState).toBe(false);
            });

            it('should return true as state when action has dispatched with blank data', () => {
                const initialState = anyInitialState();
                const action = {
                    data: [],
                    type: actionItem.type
                };
                const resultedState = reducer(initialState, action);

                expect(resultedState).toBe(true);
            });
        });
    });

    [
        {
            type: FETCH_PIZZA_LIST
        },
        {
            type: FETCH_USER_LIST
        }
    ].forEach((actionItem) => {
        it(`should set default state on dispatching ${actionItem.type} action`, () => {
            const initialState = anyInitialState();
            const action = {
                type: actionItem.type
            };
            const resultedState = reducer(initialState, action);

            expect(resultedState).toBe(initialState);
        });
    });
});
