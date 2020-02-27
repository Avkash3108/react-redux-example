import React from 'react';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';

import {getFactories} from './factory/react-redux-example-factory';

const {
    store,
    routes
} = getFactories();

function ReactReduxExampleProvider() {
    return (
        <Provider store={store}>
             <Router
                 history={hashHistory}
                 routes={routes}
             />
        </Provider>
    );
}

ReactReduxExampleProvider.displayName = 'ReactReduxExampleProvider';

export default ReactReduxExampleProvider;