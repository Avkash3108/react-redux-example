import React from 'react';
import {Provider} from 'react-redux';

import {getFactories} from './factory/react-redux-example-factory';
import Container from './views'

const {
    store
} = getFactories();

function ReactReduxExampleProvider() {
    return (
        <Provider store={store}>
         <Container/>
        </Provider>
    );
}

ReactReduxExampleProvider.displayName = 'ReactReduxExampleProvider';

export default ReactReduxExampleProvider;