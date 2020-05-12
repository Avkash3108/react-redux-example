import PropTypes from 'prop-types';
import React from 'react';
import {IntlProvider} from "react-intl";
import messages from '../i18n/en.json';

function AppProvider(props) {
	return(
		<IntlProvider
		    locale='en'
		    messages={messages}
		>
            <div
                className={'react-redux-example'}
            >
                {props.children}
            </div>
        </IntlProvider>
	);
}

AppProvider.displayName = 'AppProvider';
AppProvider.propTypes = {
	children: PropTypes.element
};

export default AppProvider;