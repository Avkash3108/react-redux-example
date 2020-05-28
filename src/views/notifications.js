import React from 'react';
import PropTypes from 'prop-types';

import Alert from './common/alert';

const Notifications = (props) => {
    return (
        <>
            {props.alerts.map((alert) =>
                <Alert
                    alert={alert}
                    id={alert.id}
                    key={alert.id}
                />
            )}
        </>
    );
};

Notifications.displayName = 'Notifications';
Notifications.propTypes = {
    alerts: PropTypes.array.isRequired
};

export default Notifications;
