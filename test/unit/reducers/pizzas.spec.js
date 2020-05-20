import {
    FETCH_USER_LIST,
    STORE_PIZZA_LIST,
    STORE_MORE_PIZZAS
} from '../../../src/actions';
import reducer from '../../../src/reducers/pizzas';

describe('Pizza List Reducer', () => {
    function anyInitialState() {
        return [];
    }

    it('should return the default state if the provided state is undefined', () => {
        const resultedState = reducer(undefined, {});

        expect(resultedState).toStrictEqual(anyInitialState());
    });


    it('should return the provided state if action type is not handled', () => {
        const initialState = anyInitialState();
        const action = {
            type: 'THIS_IS_AN_UNHANDLED_ACTION'
        };
        const resultedState = reducer(initialState, action);

        expect(resultedState).toStrictEqual(initialState);
    });

    it('should store given pizza list on dispatching STORE_PIZZA_LIST action', () => {
        const initialState = anyInitialState();
        const action = {
            data: ['anyData'],
            type: STORE_PIZZA_LIST
        };
        const resultedState = reducer(initialState, action);

        expect(resultedState).toStrictEqual(action.data);
    });

    it('should store dafault state when dispatching STORE_PIZZA_LIST action with null data', () => {
        const initialState = anyInitialState();
        const action = {
            data: null,
            type: STORE_PIZZA_LIST
        };
        const resultedState = reducer(initialState, action);
        const expectedState = [];

        expect(resultedState).toStrictEqual(expectedState);
    });

    it('should append more pizzas in initial list when dispatching STORE_MORE_PIZZAS action with pizzas', () => {
        const initialState = anyInitialState();

        initialState.push('pizza1');
        initialState.push('pizza2');
        const action = {
            data: ['pizza3', 'pizza4'],
            type: STORE_MORE_PIZZAS
        };
        const resultedState = reducer(initialState, action);
        const expectedState = initialState.concat(action.data);

        expect(resultedState).toStrictEqual(expectedState);
    });

    it('should return current pizza list when dispatching STORE_MORE_PIZZAS action with null data', () => {
        const initialState = anyInitialState();

        initialState.push('pizza1');
        initialState.push('pizza2');
        const action = {
            data: null,
            type: STORE_MORE_PIZZAS
        };
        const resultedState = reducer(initialState, action);

        expect(resultedState).toStrictEqual(initialState);
    });

    it('should return current pizza list when dispatching STORE_MORE_PIZZAS action when all pizzas are already stored', () => {
        const initialState = anyInitialState();

        initialState.push('pizza1');
        initialState.push('pizza2');
        initialState.push('pizza3');
        const action = {
            data: [],
            type: STORE_MORE_PIZZAS
        };
        const resultedState = reducer(initialState, action);

        expect(resultedState).toStrictEqual(initialState);
    });


    it('should return blank pizza list on dispatching FETCH_USER_LIST action', () => {
        const initialState = anyInitialState();
        const action = {
            type: FETCH_USER_LIST
        };
        const resultedState = reducer(initialState, action);

        expect(resultedState).toStrictEqual(initialState);
    });
});
