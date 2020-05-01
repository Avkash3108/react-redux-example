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

export default AppProvider;