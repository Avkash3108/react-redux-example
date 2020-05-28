import PropTypes from 'prop-types';
import React from 'react';
import {IntlProvider} from 'react-intl';

import messages from '../i18n/en.json';
import Notifications from './notification-connector';

function AppProvider(props) {
    return (
        <IntlProvider
            locale='en'
            messages={messages}
        >
            <div
                className={'react-redux-example'}
            >
                {props.children}
                <Notifications/>
            </div>
        </IntlProvider>
    );
}

AppProvider.displayName = 'AppProvider';
AppProvider.propTypes = {
    children: PropTypes.element
};

export default AppProvider;
