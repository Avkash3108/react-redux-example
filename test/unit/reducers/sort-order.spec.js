import {
    SET_SORT_ORDER,
    RESET_STATE
} from '../../../src/actions';

import reducer from '../../../src/reducers/sort-order';

describe('Sort Order Reducer', () => {
    function anyInitialState() {
        return {
            sortOrder: null,
            sortBy: null
        };
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

    it('should set default state on dispatching RESET_STATE', () => {
        const initialState = anyInitialState();
        const action = {
            type: RESET_STATE
        };
        const resultedState = reducer(initialState, action);

        expect(resultedState).toStrictEqual(initialState);
    });

    it('should update the sortBy and sort Order to DESC for sorted column', () => {
        const initialState = anyInitialState();

        initialState.sortBy = 'test';
        initialState.sortOrder = 'ASC';
        const action = {
            sortBy: 'test',
            type: SET_SORT_ORDER
        };
        const resultedState = reducer(initialState, action);
        const expectedState = {
            sortBy: 'test',
            sortOrder: 'DESC'
        };

        expect(resultedState).toStrictEqual(expectedState);
    });

    it('should update the sortBy and sort Order to ASC for sorted column', () => {
        const initialState = anyInitialState();

        initialState.sortBy = 'test';
        initialState.sortOrder = 'DESC';
        const action = {
            sortBy: 'test',
            type: 'SET_SORT_ORDER'
        };
        const resultedState = reducer(initialState, action);
        const expectedState = {
            sortBy: 'test',
            sortOrder: 'ASC'
        };

        expect(resultedState).toStrictEqual(expectedState);
    });

    it('should update the sortBy and sort Order to ASC sorting other column', () => {
        const initialState = anyInitialState();

        const action = {
            sortBy: 'test',
            type: 'SET_SORT_ORDER'
        };
        const resultedState = reducer(initialState, action);
        const expectedState = {
            sortBy: 'test',
            sortOrder: 'ASC'
        };

        expect(resultedState).toStrictEqual(expectedState);
    });
});
