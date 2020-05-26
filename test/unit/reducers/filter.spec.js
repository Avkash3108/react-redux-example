import {
    RESET_STATE,
    SET_FILTER
} from '../../../src/actions';
import reducer from '../../../src/reducers/filter';

describe('Filter reducer', () => {
    function anyInitialState() {
        return '';
    }

    it('should return the default state if the provided state is undefined', () => {
        const resultedState = reducer(undefined, {});

        expect(resultedState).toBe('');
    });

    it('should return the provided state if action type is not handled', () => {
        const initialState = anyInitialState();
        const action = {
            type: 'THIS_IS_AN_UNHANDLED_ACTION'
        };
        const resultedState = reducer(initialState, action);

        expect(resultedState).toBe(initialState);
    });

    it('should clear filter on dispatching RESET_STATE', () => {
        const initialState = anyInitialState();
        const action = {
            type: RESET_STATE
        };
        const resultedState = reducer(initialState, action);

        expect(resultedState).toBe(initialState);
    });

    it('should set filter value on changing filter component', () => {
        const initialState = anyInitialState();
        const action = {
            type: SET_FILTER,
            value: 'TEST'
        };
        const resultedState = reducer(initialState, action);

        expect(resultedState).toBe(action.value);
    });
});
