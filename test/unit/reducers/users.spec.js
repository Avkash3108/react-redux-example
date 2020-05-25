import Chance from 'chance';

import {
    FETCH_PIZZA_LIST,
    ITEMS_DELETED,
    STORE_USER_LIST,
    STORE_MORE_USERS
} from '../../../src/actions';
import reducer from '../../../src/reducers/users';

const chance = new Chance();

describe('User List Reducer', () => {
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

    it('should store given user list on dispatching STORE_USER_LIST action', () => {
        const initialState = anyInitialState();
        const action = {
            data: ['anyData'],
            type: STORE_USER_LIST
        };
        const resultedState = reducer(initialState, action);

        expect(resultedState).toStrictEqual(action.data);
    });

    it('should store dafault state when dispatching STORE_USER_LIST action with null data', () => {
        const initialState = anyInitialState();
        const action = {
            data: null,
            type: STORE_USER_LIST
        };
        const resultedState = reducer(initialState, action);
        const expectedState = [];

        expect(resultedState).toStrictEqual(expectedState);
    });

    it('should append more users in initial list when dispatching STORE_MORE_USERS action with users', () => {
        const initialState = anyInitialState();

        initialState.push('user1');
        initialState.push('user2');
        const action = {
            data: ['user3', 'user4'],
            type: STORE_MORE_USERS
        };
        const resultedState = reducer(initialState, action);
        const expectedState = initialState.concat(action.data);

        expect(resultedState).toStrictEqual(expectedState);
    });

    it('should return initial user list when dispatching STORE_MORE_USERS action with null data', () => {
        const initialState = anyInitialState();

        initialState.push('user1');
        initialState.push('user2');
        const action = {
            data: null,
            type: STORE_MORE_USERS
        };
        const resultedState = reducer(initialState, action);

        expect(resultedState).toStrictEqual(initialState);
    });

    it('should return current user list when dispatching STORE_MORE_USERS action when all users are already stored', () => {
        const initialState = anyInitialState();

        initialState.push('user1');
        initialState.push('user2');
        initialState.push('user3');
        const action = {
            data: [],
            type: STORE_MORE_USERS
        };
        const resultedState = reducer(initialState, action);

        expect(resultedState).toStrictEqual(initialState);
    });

    it('should return blank user list on dispatching FETCH_PIZZA_LIST action', () => {
        const initialState = anyInitialState();
        const action = {
            type: FETCH_PIZZA_LIST
        };
        const resultedState = reducer(initialState, action);

        expect(resultedState).toStrictEqual(initialState);
    });

    it('should remove selected users on dispatching ITEMS_DELETED action', () => {
        let initialState = anyInitialState();
        const item1 = {
            id: chance.natural()
        };
        const item2 = {
            id: chance.natural()
        };
        const item3 = {
            id: chance.natural()
        };

        initialState = initialState.concat([item1, item2, item3]);

        const action = {
            selectedIds: [`${item1.id}`, `${item3.id}`],
            type: ITEMS_DELETED
        };
        const resultedState = reducer(initialState, action);
        const expectedState = [item2];

        expect(resultedState).toStrictEqual(expectedState);
    });
});
