import React from 'react';

function AppProvider(props) {
	return(
        <div
            className={'react-redux-example'}
        >
            {props.children}
        </div>
	);
}

export default AppProvider;