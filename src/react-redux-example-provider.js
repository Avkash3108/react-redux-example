import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';

import {getFactories} from './factory/react-redux-example-factory';
import './styles/style.scss';

const {
    history,
    store,
    routes
} = getFactories();

function ReactReduxExampleProvider() {
    return (
        <Provider store={store}>
             <Router
                 history={history}
                 routes={routes}
             />
        </Provider>
    );
}

ReactReduxExampleProvider.displayName = 'ReactReduxExampleProvider';

export default ReactReduxExampleProvider;
