import {connect} from 'react-redux';

import * as actions from '../../../action-creators/actions';
import AlertContainer from './alert';

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClose: () => {
            dispatch(actions.closeAlert(ownProps.id));
        }
    };
}

export default connect(undefined, mapDispatchToProps)(AlertContainer);
