import React from 'react';
import {Provider} from 'react-redux';

import {getFactories} from '../factory/react-redux-example-factory';

const {
    store
} = getFactories();

function ReactReduxExampleProvider() {
    return (
        <Provider store={store}>
            {'TEST'}
        </Provider>
    );
}

ReactReduxExampleProvider.displayName = 'ReactReduxExampleProvider';

export default ReactReduxExampleProvider;