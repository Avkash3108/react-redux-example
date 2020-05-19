import {
    FETCH_PIZZA_LIST,
    FETCH_USER_LIST,
    STORE_MORE_PIZZAS,
    STORE_MORE_USERS
} from '../../../src/actions';

import reducer from '../../../src/reducers/last-fetched-page';

describe('Last fetched page reducer', () => {
    function anyInitialState() {
        return 1;
    }

    it('should return the default state if the provided state is undefined', () => {
        const resultedState = reducer(undefined, {});

        expect(resultedState).toBe(1);
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
            type: STORE_MORE_PIZZAS
        },
        {
            type: STORE_MORE_USERS
        }
    ].forEach((actionItem) => {
        describe(`on dispatching ${actionItem.type} action`, () => {
            it('should return provided page', () => {
                const initialState = anyInitialState();
                const action = {
                    page: 5,
                    type: actionItem.type
                };
                const resultedState = reducer(initialState, action);

                expect(resultedState).toBe(action.page);
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
