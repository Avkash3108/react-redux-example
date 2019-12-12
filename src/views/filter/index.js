import { connect } from 'react-redux';
import * as actions from '../../action-creators/actions';
import Filter from './filter';

function mapDispatchToProps(dispatch) {
    return {
        onFilter: (filter) => {
            dispatch(actions.setFilter(filter));
        }
    }
}

export default connect(undefined ,mapDispatchToProps)(Filter)