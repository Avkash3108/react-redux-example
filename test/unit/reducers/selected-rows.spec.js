import Chance from 'chance';

import {
    ITEMS_DELETED,
    ON_SELECT_ROW,
    RESET_STATE
} from '../../../src/actions';
import reducer from '../../../src/reducers/selected-rows';

const chance = new Chance();

describe('Selected Rows reducer', () => {
    function anyInitialState() {
        return {};
    }

    it('should return the default state if the provided state is undefined', () => {
        const resultedState = reducer(undefined, {});

        expect(resultedState).toStrictEqual({});
    });

    it('should return the provided state if action type is not handled', () => {
        const initialState = anyInitialState();
        const action = {
            type: 'THIS_IS_AN_UNHANDLED_ACTION'
        };
        const resultedState = reducer(initialState, action);

        expect(resultedState).toStrictEqual(initialState);
    });

    [
        {
            type: ITEMS_DELETED
        },
        {
            type: RESET_STATE
        }
    ].forEach((actionItem) => {
        describe(`on dispatching ${actionItem.type} action`, () => {
            it('should return default state', () => {
                const initialState = anyInitialState();
                const action = {
                    type: actionItem.type
                };
                const resultedState = reducer(initialState, action);

                expect(resultedState).toStrictEqual(initialState);
            });
        });
    });

    it('should revert the selection when it is available in state', () => {
        const initialState = anyInitialState();
        const id = chance.natural();
        const anotherId = chance.natural();

        initialState[`${id}`] = false;
        initialState[`${anotherId}`] = true;

        const action = {
            id: anotherId,
            type: ON_SELECT_ROW
        };
        const expectState = {
            [`${anotherId}`]: false,
            [`${id}`]: false
        };
        const resultedState = reducer(initialState, action);

        expect(expectState).toStrictEqual(resultedState);
    });

    it('should set id selected when it is not available in state', () => {
        const initialState = anyInitialState();
        const id = chance.natural();
        const anotherId = chance.natural();

        initialState[`${id}`] = true;

        const action = {
            id: anotherId,
            type: ON_SELECT_ROW
        };
        const expectState = {
            [`${anotherId}`]: true,
            [`${id}`]: true
        };
        const resultedState = reducer(initialState, action);

        expect(expectState).toStrictEqual(resultedState);
    });
});
