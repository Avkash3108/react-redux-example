import {connect} from 'react-redux';

import * as actions from '../../../action-creators/actions';
import Checkbox from './checkbox';

function mapStateToProps(state, ownProps) {
    return {
        checked: Boolean(state.selectedRows[ownProps.id])
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onChange: () => {
            dispatch(actions.onSelectedRow(ownProps.id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
