import {
    CLOSE_ALERT,
    ITEMS_DELETED,
    RESET_STATE
} from '../../actions';

const autoCloseTiming = 6;

function getDefaultState() {
    return [];
}

function getDefaultValues() {
    return {};
}

function makeAlert({
    alertType,
    autoClose = true,
    autoCloseTime = autoCloseTiming,
    blockUser = false,
    dismissible = true,
    getValues = getDefaultValues,
    message
}) {
    return (state, action) => {
        return {
            alertType,
            autoClose,
            autoCloseTime,
            blockUser,
            dismissible,
            id: action.type,
            isOpen: true,
            message,
            values: getValues(state, action)
        };
    };
}

function getDeletedCount(state, action) {
    return {
        count: action.selectedIds.length
    };
}

function addAlert(state, action, alert) {
    return [
        ...state,
        ...[alert(state, action)]
    ];
}

function removeAlert(state, action) {
    return state.filter((alertObject) => {
        return alertObject.id !== action.alertId;
    });
}

export function makeAlerts() {
    const actions = {
        [CLOSE_ALERT]: removeAlert,
        [ITEMS_DELETED]: makeAlert({
            alertType: 'success',
            getValues: getDeletedCount,
            message: 'RECORDS_DELETED'
        }),
        [RESET_STATE]: getDefaultState
    };

    return (state = [], action) => {
        if ([CLOSE_ALERT, RESET_STATE].indexOf(action.type) >= 0) {
            return actions[action.type](state, action);
        }
        const alert = actions[action.type];

        return alert ? addAlert(state, action, alert) : state;
    };
}
