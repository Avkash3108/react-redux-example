import {connect} from 'react-redux';

import * as actions from '../../../action-creators/actions';
import Filter from './filter';

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onFilter: (filter) => {
            dispatch(actions.setFilter(filter));
            ownProps.onFilter();
        }
    };
}

export default connect(undefined ,mapDispatchToProps)(Filter);
