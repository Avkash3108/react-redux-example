import {connect} from 'react-redux';

import * as actions from '../../action-creators/actions';
import Button from './button';

function mapStateToProps(state) {
    return {
        disabled: !Object.keys(state.selectedRows).some((id) => {
            return state.selectedRows[id];
        })
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: () => {
            dispatch(actions.deleteRecords(ownProps.searchId));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);
