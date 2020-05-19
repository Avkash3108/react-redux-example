import React, {Component} from 'react';

export function nullify(WrappedComponent, shouldNullify) {
    class Nullify extends Component {
        render() {
            return shouldNullify(this.props) ? null : (<WrappedComponent {...this.props}/>);
        }
    }

    Nullify.displayName = 'Nullify';
    return Nullify;
}
