import Chance from 'chance';

import {
    CLOSE_ALERT,
    ITEMS_DELETED,
    RESET_STATE
} from '../../../../src/actions';
import {makeAlerts} from '../../../../src/reducers/fetch-status/alert-factory';

const chance = new Chance();
const autoCloseTiming = 6;

function getDefaultAlertOptions() {
    return {
        autoClose: true,
        autoCloseTime: autoCloseTiming,
        blockUser: false,
        dismissible: true,
        isOpen: true
    };
}
describe('Alert factory reducer', () => {
    function anyInitialState() {
        return [];
    }

    it('should return the default state if the provided state is undefined', () => {
        const resultedState = makeAlerts()(undefined, {});

        expect(resultedState).toStrictEqual([]);
    });

    it('should return the provided state if action type is not handled', () => {
        const initialState = anyInitialState();
        const action = {
            type: 'THIS_IS_AN_UNHANDLED_ACTION'
        };
        const resultedState = makeAlerts()(initialState, action);

        expect(resultedState).toBe(initialState);
    });

    it('should clear all alerts on dispatching RESET_STATE', () => {
        const initialState = anyInitialState();
        const action = {
            type: RESET_STATE
        };
        const resultedState = makeAlerts()(initialState, action);

        expect(resultedState).toStrictEqual(initialState);
    });

    it('should remove alert from state after closing', () => {
        const alertId = chance.natural();
        const anotherAlertId = chance.natural();
        const initialState = anyInitialState();

        initialState.push({
            id: alertId
        });
        initialState.push({
            id: anotherAlertId
        });
        const action = {
            alertId,
            type: CLOSE_ALERT
        };
        const resultedState = makeAlerts()(initialState, action);
        const expectedState = [{
            id: anotherAlertId
        }];

        expect(resultedState).toStrictEqual(expectedState);
    });

    [
        {
            alertOptions: {
                alertType: 'success',
                message: 'RECORDS_DELETED',
                values: {
                    count: 1
                }
            },
            selectedIds: ['anyId'],
            type: ITEMS_DELETED
        }
    ].forEach((actionItem) => {
        it(`should add alert in state on dispatching ${actionItem.type}`, () => {
            const alertId = chance.natural();
            const initialState = [
                {
                    id: alertId
                }
            ];

            const action = {
                selectedIds: actionItem.selectedIds,
                type: actionItem.type
            };
            const resultedState = makeAlerts()(initialState, action);
            const expectedState = [
                {
                    id: alertId
                },
                {
                    ...getDefaultAlertOptions(),
                    ...actionItem.alertOptions,
                    id: action.type
                }
            ];

            expect(resultedState).toStrictEqual(expectedState);
        });
    });
});
